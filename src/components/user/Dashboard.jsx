import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const Dashboard = ({
  companies = [],
  overriddenCommunications = [],
  setOverriddenCommunications,
  setCompanies,
  communicationMethods = [],
}) => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCommType, setNewCommType] = useState('');
  const [newCommDate, setNewCommDate] = useState('');
  const [newCommNotes, setNewCommNotes] = useState('');

  const getRowHighlightClass = (company) => {
    if (!company.communications || company.communications.length === 0) return '';
    const nextComm = company.communications[0];
    const nextCommDate = new Date(nextComm.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let highlightClass = '';
    if (nextCommDate < today) {
      highlightClass = 'bg-red-50';
    } else if (
      nextCommDate.getDate() === today.getDate() &&
      nextCommDate.getMonth() === today.getMonth() &&
      nextCommDate.getFullYear() === today.getFullYear()
    ) {
      highlightClass = 'bg-yellow-50';
    }

    const uniqueId = `${company.id}-${nextComm.date}`;
    if (overriddenCommunications.includes(uniqueId)) {
      if (highlightClass === 'bg-red-50') return 'bg-red-100';
      if (highlightClass === 'bg-yellow-50') return 'bg-yellow-100';
    }

    return highlightClass;
  };

  const toggleOverride = (companyId, commDate) => {
    const uniqueId = `${companyId}-${commDate}`;
    if (overriddenCommunications.includes(uniqueId)) {
      setOverriddenCommunications(
        overriddenCommunications.filter((id) => id !== uniqueId)
      );
    } else {
      setOverriddenCommunications([...overriddenCommunications, uniqueId]);
    }
  };

  const handleAddCommunication = () => {
    if (!newCommType || !newCommDate) {
      alert('Please fill in all required fields.');
      return;
    }

    const selectedMethod = communicationMethods.find(
      (method) => method.id.toString() === newCommType
    );

    if (!selectedMethod) {
      alert('Selected communication method is invalid.');
      return;
    }

    const newCommunication = {
      id: Date.now(),
      type: selectedMethod.name,
      date: new Date(newCommDate).toISOString(),
      notes: newCommNotes,
    };

    const updatedCompanies = companies.map((company) => {
      if (selectedCompanies.includes(company)) {
        return {
          ...company,
          communications: [newCommunication, ...company.communications],
        };
      }
      return company;
    });

    setCompanies(updatedCompanies);

   
    const updatedOverridden = overriddenCommunications.filter((id) => {
      const [companyId] = id.split('-');
      return !selectedCompanies.some(
        (company) => company.id.toString() === companyId
      );
    });
    setOverriddenCommunications(updatedOverridden);

    setNewCommType('');
    setNewCommDate('');
    setNewCommNotes('');
    setShowModal(false);
  };

  return (
    <div className="space-y-8">
      
      <div className="flex justify-between items-center px-6 relative">
        
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
        </div>

        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center flex-1 z-10 relative">
          Company Communications
        </h2>
       
      </div>

      
      <div className="relative bg-white/90 backdrop-blur-lg rounded-lg shadow-2xl p-6 border-2 border-blue-600 transform transition-all duration-500 hover:translate-y-1 hover:shadow-xl mx-6 overflow-hidden">
        
        <div className="absolute inset-0 -z-10">
         
          <div
            className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 transform rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
          
          <div
            className="absolute top-16 right-1/3 w-32 h-32 bg-gradient-to-l from-purple-500 via-blue-500 to-purple-500 opacity-25 transform rotate-30"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
          
          <div
            className="absolute bottom-10 left-1/4 w-28 h-28 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-15 transform rotate(-30deg)"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
         
          <div
            className="absolute bottom-20 right-1/4 w-24 h-24 bg-gradient-to-l from-purple-500 via-blue-500 to-purple-500 opacity-20 transform rotate(-45deg)"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>

          
          <div
            className="absolute top-1/2 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-30"
          ></div>
          
          <div
            className="absolute top-1/4 right-0 w-16 h-16 rounded-full bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-25"
          ></div>
          
          <div
            className="absolute bottom-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-20"
          ></div>
          
          <div
            className="absolute bottom-1/4 right-1/2 w-12 h-12 rounded-full bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-20"
          ></div>

          
          <div
            className="absolute top-1/3 left-2/3 w-0 h-0 border-l-16 border-r-16 border-b-24 border-transparent border-b-blue-500 opacity-15"
          ></div>
         
          <div
            className="absolute bottom-1/3 right-2/3 w-0 h-0 border-l-16 border-r-16 border-t-24 border-transparent border-t-purple-500 opacity-15"
          ></div>

          
          <div
            className="absolute top-1/4 left-3/4 w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-20 transform rotate-30"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
            }}
          ></div>
         
          <div
            className="absolute bottom-1/4 right-3/4 w-24 h-24 bg-gradient-to-l from-purple-500 via-blue-500 to-purple-500 opacity-20 transform rotate(-30deg)"
            style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
            }}
          ></div>

         
          <div
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-10 transform rotate-12"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          ></div>
          
          <div
            className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-l from-blue-500 via-purple-500 to-blue-500 opacity-10 transform rotate(-12deg)"
            style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          ></div>

          
          <div
            className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-15"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
         
          <div
            className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-l from-purple-500 via-blue-500 to-purple-500 opacity-15"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>

        
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-15"
          ></div>
         
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-10 rotate-45"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          ></div>
        </div>

        
        <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

        <div className="flex justify-between items-center mb-6 relative z-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
            Companies
          </h2>
         
          <button
            onClick={() => {
              if (selectedCompanies.length === 0) {
                alert('Please select at least one company.');
                return;
              }
              setShowModal(true);
            }}
            className="flex items-center px-4 py-2 rounded-lg transition-all duration-500 transform hover:translate-x-2 border-2 border-black bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 hover:text-white hover:border-none"
          >
            <Plus className="h-5 w-5 mr-2" />
            Communication Performed
          </button>
        </div>

        <div className="overflow-x-auto relative z-10">
          <table className="w-full border-collapse">
            <thead className="bg-white">
              <tr>
                <th className="p-5 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 w-[10%]">
                  Select
                </th>
                <th className="p-5 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 w-[20%]">
                  Company
                </th>
                <th className="p-5 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 w-[45%]">
                  Last 5 Communications
                </th>
                <th className="p-5 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 w-[25%]">
                  Next Due
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {companies.map((company) => (
                <tr
                  key={company.id}
                  className={`bg-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:via-purple-600/20 hover:to-blue-600/20 transition-colors duration-300 ${getRowHighlightClass(
                    company
                  )}`}
                >
                  <td className="p-5 text-center">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-2 border-black text-blue-600 focus:ring-blue-500"
                      checked={selectedCompanies.includes(company)}
                      onChange={() => {
                        if (selectedCompanies.includes(company)) {
                          setSelectedCompanies(
                            selectedCompanies.filter((c) => c !== company)
                          );
                        } else {
                          setSelectedCompanies([...selectedCompanies, company]);
                        }
                      }}
                    />
                  </td>
                  <td className="p-5 text-center">
                    <div className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {company.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {company.location}
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    <div className="flex justify-center gap-3">
                      {company.communications?.slice(0, 5).map((comm, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-2 rounded-lg text-white cursor-pointer relative overflow-hidden border-2 border-transparent transition-all duration-500 hover:scale-105 hover:shadow-lg"
                          title={`${comm.type} - ${comm.notes || ''}`}
                          style={{
                            background:
                              'linear-gradient(to right, #2563EB, #9333EA)',
                          }}
                        >
                         
                          <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `repeating-linear-gradient(
                                  45deg,
                                  rgba(37, 99, 235, 0.1) 0px,
                                  rgba(37, 99, 235, 0.1) 1px,
                                  transparent 1px,
                                  transparent 10px
                                )`,
                              }}
                            ></div>
                            <div
                              className="absolute -right-4 -bottom-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-30"
                            ></div>
                            <div
                              className="absolute inset-0"
                              style={{
                                backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
                                backgroundSize: '10px 10px',
                              }}
                            ></div>
                          </div>
                          <div className="relative z-10">
                            <div className="font-semibold">{comm.type}</div>
                            <div>
                              {new Date(comm.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    {company.communications?.[0] && (
                      <div className="flex flex-col items-center">
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {company.communications[0].type}
                        </span>
                        <span className="text-gray-600">
                          {new Date(
                            company.communications[0].date
                          ).toLocaleDateString()}
                        </span>
                        <button
                          className="mt-2 text-sm px-3 py-1 rounded-lg border-2 border-black transition-all duration-300 bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 hover:text-white hover:border-none text-gray-800 font-medium"
                          onClick={() =>
                            toggleOverride(
                              company.id,
                              company.communications[0].date
                            )
                          }
                        >
                          {overriddenCommunications.includes(
                            `${company.id}-${company.communications[0].date}`
                          )
                            ? 'Enable Highlight'
                            : 'Disable Highlight'}
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="relative bg-white rounded-lg shadow-2xl w-11/12 md:w-1/2 lg:w-1/3 p-6 border-2 border-blue-600">
              
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
                    clipPath:
                      'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
                  }}
                ></div>
               
                <div
                  className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-10 transform rotate-12"
                  style={{
                    clipPath:
                      'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  }}
                ></div>
                
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 opacity-15"
                ></div>
                
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-l from-purple-300 via-blue-300 to-purple-300 opacity-10 rotate-45"
                  style={{
                    clipPath:
                      'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  }}
                ></div>
              </div>

             
              <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300 z-10"
                onClick={() => setShowModal(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center relative z-10">
                Log New Communication
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddCommunication();
                }}
                className="space-y-6 relative z-10"
              >
                <div className="flex flex-col items-center">
                  <label className="block font-semibold text-gray-800 mb-2">
                    Type of Communication
                  </label>
                  <select
                    className="w-full border-2 border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value={newCommType}
                    onChange={(e) => setNewCommType(e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    {communicationMethods.map((method) => (
                      <option key={method.id} value={method.id}>
                        {method.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col items-center">
                  <label className="block font-semibold text-gray-800 mb-2">
                    Date of Communication
                  </label>
                  <input
                    type="date"
                    className="w-full border-2 border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value={newCommDate}
                    onChange={(e) => setNewCommDate(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col items-center">
                  <label className="block font-semibold text-gray-800 mb-2">
                    Add Notes
                  </label>
                  <textarea
                    className="w-full border-2 border-black rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value={newCommNotes}
                    onChange={(e) => setNewCommNotes(e.target.value)}
                    placeholder="Enter any additional comments..."
                    rows="4"
                  ></textarea>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    className="px-6 py-2 rounded-lg border-2 border-black text-gray-700 bg-white transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 hover:text-white hover:border-none"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg border-2 border-black bg-white text-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-blue-600 hover:text-white hover:border-none transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
