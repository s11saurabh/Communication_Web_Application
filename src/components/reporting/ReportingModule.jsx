
import React from 'react';
import CommunicationFrequencyReport from './CommunicationFrequencyReport';
import EngagementEffectivenessReport from './EngagementEffectivenessReport';
import OverdueTrendsReport from './OverdueTrendsReport';
import ActivityLog from './ActivityLog';

const ReportingModule = () => {
  const [currentTab, setCurrentTab] = React.useState('frequency');

  const tabs = [
    { id: 'frequency', label: 'Communication Frequency' },
    { id: 'effectiveness', label: 'Engagement Effectiveness' },
    { id: 'trends', label: 'Overdue Trends' },
    { id: 'activity', label: 'Activity Log' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-3">
      
      <div className="flex justify-center items-center gap-3 mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`w-40 p-2 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:translate-x-2 border-2 border-blue text-sm font-bold ${
              currentTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 border-none'
                : 'bg-white/90 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-lg'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

     
      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-3 border-2 border-blue transform transition-all duration-500 hover:translate-y-1 hover:shadow-xl h-[calc(85vh-1px)]">
       
        <h2 className="text-lg font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 sticky top-0 bg-white/80 backdrop-blur-sm py-1">
          {tabs.find(tab => tab.id === currentTab)?.label}
        </h2>

       
        <div className="mt-2">
          {currentTab === 'frequency' && (
            <div className="animate-fade-in">
              <CommunicationFrequencyReport />
            </div>
          )}
          {currentTab === 'effectiveness' && (
            <div className="animate-fade-in">
              <EngagementEffectivenessReport />
            </div>
          )}
          {currentTab === 'trends' && (
            <div className="animate-fade-in">
              <OverdueTrendsReport />
            </div>
          )}
          {currentTab === 'activity' && (
            <div className="animate-fade-in">
              <ActivityLog />
            </div>
          )}
        </div>
      </div>

      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ReportingModule;