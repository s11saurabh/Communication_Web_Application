import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const NotificationsView = ({
  companies = [],
  overriddenCommunications = [],
  setOverriddenCommunications,
}) => {
  const getNotifications = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const overdueComms = [];
    const todayComms = [];

    companies.forEach((company) => {
      const nextComm = company.communications?.[0];
      if (nextComm) {
        const nextCommDate = new Date(nextComm.date);
        nextCommDate.setHours(0, 0, 0, 0);

        if (nextCommDate < today) {
          overdueComms.push({
            company,
            daysOverdue: Math.floor((today - nextCommDate) / (1000 * 60 * 60 * 24)),
            commDate: nextComm.date,
            notes: nextComm.notes || 'No notes available',
          });
        } else if (
          nextCommDate.getDate() === today.getDate() &&
          nextCommDate.getMonth() === today.getMonth() &&
          nextCommDate.getFullYear() === today.getFullYear()
        ) {
          todayComms.push({
            company,
            commDate: nextComm.date,
            notes: nextComm.notes || 'No notes available',
          });
        }
      }
    });

    return { overdueComms, todayComms };
  };

  const { overdueComms, todayComms } = getNotifications();

  const toggleOverride = (companyId, commDate, e) => {
    e.stopPropagation();
    const uniqueId = `${companyId}-${commDate}`;
    if (overriddenCommunications.includes(uniqueId)) {
      setOverriddenCommunications(
        overriddenCommunications.filter((id) => id !== uniqueId)
      );
    } else {
      setOverriddenCommunications([...overriddenCommunications, uniqueId]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Notifications Container */}
      <div className="container mx-auto px-4 py-8 relative bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border-2 border-[#b78af7] overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 -z-10">
          {/* Diamond */}
          <div
            className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 transform rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
          {/* Circle */}
          <div
            className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-15 rounded-full"
          ></div>
          {/* Triangle */}
          <div
            className="absolute top-1/2 left-1/4 w-0 h-0 border-l-16 border-r-16 border-b-24 border-transparent border-b-blue-500 opacity-25"
          ></div>
          {/* Hexagon */}
          <div
            className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-l from-blue-500 via-purple-500 to-blue-500 opacity-20 transform rotate-30"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
            }}
          ></div>
          {/* Star */}
          <div
            className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-10 transform rotate-12"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          ></div>

          {/* Additional Shapes in the Middle */}
          {/* Large Circle */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-10"
          ></div>
          {/* Rotated Diamond */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-15 rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>

          {/* Additional Geometric Patterns */}
          {/* Smaller Diamond */}
          <div
            className="absolute top-1/3 right-1/2 w-16 h-16 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 opacity-25 transform rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
          {/* Small Circle */}
          <div
            className="absolute bottom-1/2 left-3/4 w-12 h-12 rounded-full bg-gradient-to-l from-purple-300 via-blue-300 to-purple-300 opacity-20"
          ></div>
          {/* Starburst */}
          <div
            className="absolute top-2/3 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 opacity-15 transform rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          ></div>
          {/* Hexagon Pattern */}
          <div
            className="absolute top-3/4 right-1/4 w-14 h-14 bg-gradient-to-l from-blue-200 via-purple-200 to-blue-200 opacity-20 transform rotate-30"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
            }}
          ></div>
        </div>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 relative z-10">
          {/* Overdue Card */}
          <div className="bg-red-50 p-6 rounded-lg shadow transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-500" />
              <h3 className="text-lg font-semibold text-red-700">
                Overdue Communications
              </h3>
            </div>
            <p className="mt-4 text-3xl font-bold text-red-700">
              {overdueComms.length}
            </p>
          </div>

          {/* Due Today Card */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-yellow-500" />
              <h3 className="text-lg font-semibold text-yellow-700">
                Due Today
              </h3>
            </div>
            <p className="mt-4 text-3xl font-bold text-yellow-700">
              {todayComms.length}
            </p>
          </div>
        </div>

        {/* Lists */}
        <div className="space-y-12 relative z-10">
          {/* Overdue Communications */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-red-600 mb-6">
              Overdue Communications
            </h3>
            <div className="space-y-4">
              {overdueComms.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  No overdue communications
                </p>
              ) : (
                overdueComms.map(({ company, daysOverdue, commDate, notes }, index) => {
                  const uniqueId = `${company.id}-${commDate}`;
                  const isOverridden = overriddenCommunications.includes(uniqueId);
                  return (
                    <div
                      key={index}
                      className={`relative group ${
                        isOverridden ? 'bg-red-100' : 'bg-red-50'
                      } rounded-lg p-4 border-l-4 ${
                        isOverridden ? 'border-gray-300' : 'border-red-500'
                      } flex justify-between items-center hover:shadow-md transition-all duration-300`}
                    >
                      {/* Decorative Badge */}
                      <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-50 transform rotate-45 -z-10"></div>

                      <div className="flex-1">
                        <div className="text-lg font-medium text-blue-600">
                          {company.name}
                        </div>
                        <div className="text-sm text-blue-600 mt-1">
                          Last communication: {new Date(commDate).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-red-600 mt-1">
                          {daysOverdue} {daysOverdue === 1 ? 'day' : 'days'} overdue
                        </div>
                      </div>
                      <button
                        onClick={(e) => toggleOverride(company.id, commDate, e)}
                        className={`ml-4 text-sm ${
                          isOverridden ? 'text-gray-500' : 'text-red-600'
                        } underline hover:bg-red-100 px-3 py-1 rounded transition-colors`}
                      >
                        {isOverridden ? 'Enable Highlight' : 'Disable Highlight'}
                      </button>

                      {/* CSS Tooltip */}
                      <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm rounded px-2 py-1 bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-pre-wrap max-w-xs">
                        {notes}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Due Today Communications */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-yellow-600 mb-6">
              Due Today
            </h3>
            <div className="space-y-4">
              {todayComms.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  No communications due today
                </p>
              ) : (
                todayComms.map(({ company, commDate, notes }, index) => {
                  const uniqueId = `${company.id}-${commDate}`;
                  const isOverridden = overriddenCommunications.includes(uniqueId);
                  return (
                    <div
                      key={index}
                      className={`relative group ${
                        isOverridden ? 'bg-yellow-100' : 'bg-yellow-50'
                      } rounded-lg p-4 border-l-4 ${
                        isOverridden ? 'border-gray-300' : 'border-yellow-500'
                      } flex justify-between items-center hover:shadow-md transition-all duration-300`}
                    >
                      {/* Decorative Badge */}
                      <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-50 transform rotate-45 -z-10"></div>

                      <div className="flex-1">
                        <div className="text-lg font-medium text-blue-600">
                          {company.name}
                        </div>
                        <div className="text-sm text-blue-600 mt-1">
                          Due: {new Date(commDate).toLocaleDateString()}
                        </div>
                      </div>
                      <button
                        onClick={(e) => toggleOverride(company.id, commDate, e)}
                        className={`ml-4 text-sm ${
                          isOverridden ? 'text-gray-500' : 'text-yellow-600'
                        } underline hover:bg-yellow-100 px-3 py-1 rounded transition-colors`}
                      >
                        {isOverridden ? 'Enable Highlight' : 'Disable Highlight'}
                      </button>

                      {/* CSS Tooltip */}
                      <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm rounded px-2 py-1 bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-pre-wrap max-w-xs">
                        {notes}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsView;
