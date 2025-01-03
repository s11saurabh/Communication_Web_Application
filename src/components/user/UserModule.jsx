import React, { useState } from 'react';
import { MessageSquare, Bell } from 'lucide-react';
import Dashboard from './Dashboard';
import CalendarView from './CalendarView';
import NotificationsView from './NotificationsView';

const UserModule = ({ companies = [], setCompanies, communicationMethods = [] }) => {
  const [view, setView] = useState('dashboard');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [overriddenCommunications, setOverriddenCommunications] = useState([]);

  const getNotifications = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let overdueCount = 0;
    let dueTodayCount = 0;

    companies.forEach((company) => {
      const nextComm = company.communications?.[0];
      if (nextComm) {
        const nextCommDate = new Date(nextComm.date);
        nextCommDate.setHours(0, 0, 0, 0);

        if (nextCommDate < today) {
          overdueCount += 1;
        } else if (
          nextCommDate.getDate() === today.getDate() &&
          nextCommDate.getMonth() === today.getMonth() &&
          nextCommDate.getFullYear() === today.getFullYear()
        ) {
          dueTodayCount += 1;
        }
      }
    });

    return overdueCount + dueTodayCount;
  };

  const notificationBadgeCount = getNotifications();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-center items-center gap-6 mb-8">
        <button
          onClick={() => setView('dashboard')}
          className={`w-48 p-4 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:translate-x-2 border-2 border-black text-base font-bold ${
            view === 'dashboard'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 border-none'
              : 'bg-white/90 text-gray-700 hover:bg-[#d2c8e2] hover:text-gray-900 hover:shadow-lg'
          }`}
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Dashboard
        </button>

        <button
          onClick={() => setView('calendar')}
          className={`w-48 p-4 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:translate-x-2 border-2 border-black text-base font-bold ${
            view === 'calendar'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 border-none'
              : 'bg-white/90 text-gray-700 hover:bg-[#d2c8e2] hover:text-gray-900 hover:shadow-lg'
          }`}
        >
          <Bell className="h-5 w-5 mr-2" />
          Calendar
        </button>

        <button
          onClick={() => setView('notifications')}
          className={`w-48 p-4 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:translate-x-2 border-2 border-black text-base font-bold relative ${
            view === 'notifications'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 border-none'
              : 'bg-white/90 text-gray-700 hover:bg-[#d2c8e2] hover:text-gray-900 hover:shadow-lg'
          }`}
        >
          <Bell className="h-5 w-5 mr-2" />
          Notifications
          {notificationBadgeCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
              {notificationBadgeCount}
            </span>
          )}
        </button>
      </div>

      {/* Content Containers */}
      {view === 'dashboard' && (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-2 border-blue transform transition-all duration-500 hover:translate-y-1 hover:shadow-xl">
          <Dashboard
            companies={companies}
            overriddenCommunications={overriddenCommunications}
            setOverriddenCommunications={setOverriddenCommunications}
            setCompanies={setCompanies}
            communicationMethods={communicationMethods}
          />
        </div>
      )}

      {view === 'calendar' && (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-2 border-blue transform transition-all duration-500 hover:translate-y-1 hover:shadow-xl">
          <CalendarView
            companies={companies}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      )}

      {view === 'notifications' && (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-2 border-black transform transition-all duration-500 hover:translate-y-1 hover:shadow-xl">
          <NotificationsView
            companies={companies}
            overriddenCommunications={overriddenCommunications}
            setOverriddenCommunications={setOverriddenCommunications}
          />
        </div>
      )}
    </div>
  );
};

export default UserModule;