import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = ({ companies = [], selectedDate = new Date(), setSelectedDate }) => {
  const currentDate = selectedDate instanceof Date ? selectedDate : new Date();

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const goToPreviousMonth = () => {
    if (setSelectedDate) {
      setSelectedDate(prev => {
        const date = new Date(prev || new Date());
        date.setMonth(date.getMonth() - 1);
        return date;
      });
    }
  };

  const goToNextMonth = () => {
    if (setSelectedDate) {
      setSelectedDate(prev => {
        const date = new Date(prev || new Date());
        date.setMonth(date.getMonth() + 1);
        return date;
      });
    }
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const getCommunicationsForDate = (date) => {
    if (!date || !companies) return [];

    const dateStr = date.toISOString().split('T')[0];
    const comms = [];

    companies.forEach(company => {
      company.communications?.forEach(comm => {
        if (comm.date.split('T')[0] === dateStr) {
          comms.push({
            company: company.name,
            type: comm.type,
            notes: comm.notes
          });
        }
      });
    });

    return comms;
  };

  return (
    <div className="space-y-8">
      
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-2 border-[#b78af7] relative overflow-hidden">
        
        <div className="absolute inset-0 -z-10">
          
          <div
            className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 transform rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
          
          <div
            className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-15 rounded-full"
          ></div>
         
          <div
            className="absolute top-1/2 left-1/4 w-0 h-0 border-l-16 border-r-16 border-b-24 border-transparent border-b-blue-500 opacity-25"
          ></div>
          
          <div
            className="absolute top-1/4 right-1/3 w-20 h-20 bg-gradient-to-l from-blue-500 via-purple-500 to-blue-500 opacity-20 transform rotate-30"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
            }}
          ></div>
          
          <div
            className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-10 transform rotate-12"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          ></div>

         
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-10"
          ></div>
         
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-15 rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>

          <div
            className="absolute top-1/3 right-1/2 w-16 h-16 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 opacity-25 transform rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
          
          <div
            className="absolute bottom-1/2 left-3/4 w-12 h-12 rounded-full bg-gradient-to-l from-purple-300 via-blue-300 to-purple-300 opacity-20"
          ></div>
         
          <div
            className="absolute top-2/3 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 opacity-15 transform rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          ></div>
         
          <div
            className="absolute top-3/4 right-1/4 w-14 h-14 bg-gradient-to-l from-blue-200 via-purple-200 to-blue-200 opacity-20 transform rotate-30"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
            }}
          ></div>
        </div>

       
        <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

       
        <div className="flex justify-center items-center mb-6 relative z-10">
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white border-2 border-[#b78af7]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <h2 className="mx-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {currentDate.toLocaleDateString('default', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </h2>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white border-2 border-[#b78af7]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

       
        <div className="grid grid-cols-7 gap-4 relative z-10">
         
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="py-3 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {day}
            </div>
          ))}

        
          {generateCalendarDays().map((day, index) => {
            if (!day) {
              return (
                <div 
                  key={`empty-${index}`} 
                  className="min-h-[100px] p-2 rounded-lg border-2 border-gray-200 bg-gray-50/50"
                />
              );
            }

            const communications = getCommunicationsForDate(day);
            const isToday = day.toDateString() === new Date().toDateString();

            return (
              <div
                key={day.toISOString()}
                className={`min-h-[100px] p-2 rounded-lg transition-all duration-300 border-2 relative overflow-hidden
                  ${isToday 
                    ? 'border-blue-600 shadow-lg shadow-blue-200' 
                    : 'border-[#b78af7] hover:border-blue-400'
                  } 
                  bg-white/90 hover:shadow-lg hover:transform hover:scale-[1.02]`}
              >
                
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  
                  <div className="absolute inset-0" 
                       style={{
                         backgroundImage: `repeating-linear-gradient(
                           45deg,
                           rgb(37, 99, 235) 0px,
                           rgb(37, 99, 235) 1px,
                           transparent 1px,
                           transparent 10px
                         )`
                       }}>
                  </div>
                  
                 
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full"
                       style={{
                         background: 'radial-gradient(circle, rgb(37, 99, 235) 0%, rgba(147, 51, 234, 0.5) 50%, transparent 70%)'
                       }}>
                  </div>
                  
                 
                  <div className="absolute inset-0" 
                       style={{
                         backgroundImage: `radial-gradient(rgb(37, 99, 235) 1px, transparent 1px)`,
                         backgroundSize: '10px 10px'
                       }}>
                  </div>
                </div>

               
                <div className="relative z-10">
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {day.getDate()}
                    </span>
                    <span className="text-sm text-gray-600">
                      {day.toLocaleDateString('en-US', { weekday: 'short' })}
                    </span>
                  </div>

                 
                  <div className="space-y-1">
                    {communications.map((comm, idx) => (
                      <div
                        key={idx}
                        className="px-2 py-1 text-xs rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white cursor-pointer"
                        title={`${comm.company} - ${comm.type}${comm.notes ? `\nNotes: ${comm.notes}` : ''}`}
                      >
                        {comm.company} - {comm.type}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
