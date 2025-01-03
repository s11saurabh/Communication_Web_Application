import React, { useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';

const AdminModule = () => {
  const [activeTab, setActiveTab] = useState('companies');
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "ENTNT",
      location: "Abu Dhabi",
      communicationPeriodicity: 7
    },
    {
      id: 2,
      name: "APPLE",
      location: "California, US",
      communicationPeriodicity: 9
    },
    {
      id: 3,
      name: "TATA",
      location: "Bangalore, India",
      communicationPeriodicity: 17
    }
  ]);

  const [methods, setMethods] = useState([
    {
      id: 1,
      name: "LinkedIn Post",
      description: "Share or interact with company posts on LinkedIn",
      sequence: 1,
      mandatory: true
    },
    {
      id: 2,
      name: "LinkedIn Message",
      description: "Launch the grand iPhone 16",
      sequence: 2,
      mandatory: true
    },
    {
      id: 3,
      name: "Email",
      description: "Cancelled freshers hiring",
      sequence: 3,
      mandatory: true
    }
  ]);

  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [showMethodForm, setShowMethodForm] = useState(false);
  const [editingMethod, setEditingMethod] = useState(null);

  const handleAddCompany = () => {
    setEditingCompany(null);
    setShowCompanyForm(true);
  };

  const handleEditCompany = (company) => {
    setEditingCompany(company);
    setShowCompanyForm(true);
  };

  const handleAddMethod = () => {
    setEditingMethod(null);
    setShowMethodForm(true);
  };

  const handleEditMethod = (method) => {
    setEditingMethod(method);
    setShowMethodForm(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setActiveTab('companies')}
          className={`w-48 p-4 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:translate-x-2 border-2 border-black text-base font-bold ${
            activeTab === 'companies'
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-blue-500/50 border-none'
              : 'bg-white/90 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none'
          }`}
        >
          Company Management
        </button>

        <button
          onClick={() => setActiveTab('methods')}
          className={`w-48 p-4 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:translate-x-2 border-2 border-black text-base font-bold ${
            activeTab === 'methods'
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-blue-500/50 border-none'
              : 'bg-white/90 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none'
          }`}
        >
          Communication Methods
        </button>
      </div>

     
      {activeTab === 'companies' && (
        <div className="relative bg-white/90 backdrop-blur-lg rounded-lg shadow-2xl p-6 border-2 border-black transform transition-all duration-500 hover:translate-y-1 hover:shadow-3xl overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  rgba(37, 99, 235, 0.15) 0px,
                  rgba(37, 99, 235, 0.15) 2px,
                  transparent 2px,
                  transparent 12px
                ),
                repeating-linear-gradient(
                  45deg,
                  rgba(147, 51, 234, 0.15) 0px,
                  rgba(147, 51, 234, 0.15) 2px,
                  transparent 2px,
                  transparent 12px
                )`,
              }}
            ></div>
            <div
              className="absolute top-5 left-1/4 w-40 h-40"
              style={{
                background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.3))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(15deg)',
              }}
            ></div>
 
            <div
              className="absolute top-10 right-1/4 w-32 h-32"
              style={{
                background: 'linear-gradient(-45deg, rgba(147, 51, 234, 0.3), rgba(37, 99, 235, 0.3))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(-15deg)',
              }}
            ></div>
        
            <div
              className="absolute bottom-5 left-1/3 w-28 h-28"
              style={{
                background: 'linear-gradient(60deg, rgba(37, 99, 235, 0.25), rgba(147, 51, 234, 0.25))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(30deg)',
              }}
            ></div>
      
            <div
              className="absolute bottom-10 right-1/3 w-24 h-24"
              style={{
                background: 'linear-gradient(-60deg, rgba(147, 51, 234, 0.25), rgba(37, 99, 235, 0.25))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(-30deg)',
              }}
            ></div>
            
      
            <div
              className="absolute top-1/2 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-40"
            ></div>
     
            <div
              className="absolute top-1/4 right-0 w-16 h-16 rounded-full bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-40"
            ></div>
       
            <div
              className="absolute bottom-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-30"
            ></div>
    
            <div
              className="absolute bottom-1/4 right-1/2 w-12 h-12 rounded-full bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-30"
            ></div>
   
            <div
              className="absolute top-16 left-2/3 w-0 h-0 border-l-16 border-r-16 border-b-24 border-transparent border-b-blue-400 opacity-20"
            ></div>
            
            <div
              className="absolute bottom-16 left-1/2 w-24 h-24 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-25 transform rotate-45"
              style={{
                clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
              }}
            ></div>
          </div>

 
          <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

          <div className="flex justify-between items-center mb-6 relative z-10">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              Companies
            </h2>
            <button
              onClick={handleAddCompany}
              className="flex items-center px-4 py-2 rounded-lg transition-all duration-500 transform hover:translate-x-2 border-2 border-black bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Company
            </button>
          </div>
          <div className="overflow-x-auto relative z-10">
            <table className="w-full border-separate border-spacing-y-4">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Name</th>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Location</th>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Communication Period</th>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map(company => (
                  <tr key={company.id} className="transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-500/40 hover:via-purple-500/40 hover:to-blue-500/40">
                    <td className="px-6 py-4 text-gray-700">{company.name}</td>
                    <td className="px-6 py-4 text-gray-700">{company.location}</td>
                    <td className="px-6 py-4 text-gray-700">Every {company.communicationPeriodicity} days</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-6">
                        <button
                          onClick={() => handleEditCompany(company)}
                          className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this company?')) {
                              setCompanies(companies.filter(c => c.id !== company.id));
                            }
                          }}
                          className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}


      {activeTab === 'methods' && (
        <div className="relative bg-white/90 backdrop-blur-lg rounded-lg shadow-2xl p-6 border-2 border-black transform transition-all duration-500 hover:translate-y-1 hover:shadow-3xl overflow-hidden">

          <div className="absolute inset-0 -z-10">

            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  rgba(37, 99, 235, 0.15) 0px,
                  rgba(37, 99, 235, 0.15) 2px,
                  transparent 2px,
                  transparent 12px
                ),
                repeating-linear-gradient(
                  45deg,
                  rgba(147, 51, 234, 0.15) 0px,
                  rgba(147, 51, 234, 0.15) 2px,
                  transparent 2px,
                  transparent 12px
                )`,
              }}
            ></div>
            

            <div
              className="absolute top-5 left-1/4 w-40 h-40"
              style={{
                background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.3), rgba(147, 51, 234, 0.3))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(15deg)',
              }}
            ></div>

            <div
              className="absolute top-10 right-1/4 w-32 h-32"
              style={{
                background: 'linear-gradient(-45deg, rgba(147, 51, 234, 0.3), rgba(37, 99, 235, 0.3))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(-15deg)',
              }}
            ></div>
      
            <div
              className="absolute bottom-5 left-1/3 w-28 h-28"
              style={{
                background: 'linear-gradient(60deg, rgba(37, 99, 235, 0.25), rgba(147, 51, 234, 0.25))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(30deg)',
              }}
            ></div>

            <div
              className="absolute bottom-10 right-1/3 w-24 h-24"
              style={{
                background: 'linear-gradient(-60deg, rgba(147, 51, 234, 0.25), rgba(37, 99, 235, 0.25))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(-30deg)',
              }}
            ></div>
       
            <div
              className="absolute top-1/2 left-0 w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-40"
            ></div>
        
            <div
              className="absolute top-1/4 right-0 w-16 h-16 rounded-full bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-40"
            ></div>

            <div
              className="absolute bottom-1/2 left-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-30"
            ></div>
  
            <div
              className="absolute bottom-1/4 right-1/2 w-12 h-12 rounded-full bg-gradient-to-l from-purple-400 via-blue-400 to-purple-400 opacity-30"
            ></div>
     
            <div
              className="absolute top-16 left-2/3 w-0 h-0 border-l-16 border-r-16 border-b-24 border-transparent border-b-blue-400 opacity-20"
            ></div>
       
            <div
              className="absolute bottom-16 left-1/2 w-24 h-24 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-25 transform rotate-45"
              style={{
                clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
              }}
            ></div>
       
            <div
              className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-20 transform rotate-45"
              style={{
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              }}
            ></div>
      
            <div
              className="absolute top-3/4 left-1/4 w-18 h-18 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-35"
            ></div>
        
            <div
              className="absolute top-3/4 right-1/4 w-14 h-14 rounded-full bg-gradient-to-l from-purple-500 via-blue-500 to-purple-500 opacity-35"
            ></div>
          </div>

          <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

          <div className="flex justify-between items-center mb-6 relative z-10">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              Communication Methods
            </h2>
            <button
              onClick={handleAddMethod}
              className="flex items-center px-4 py-2 rounded-lg transition-all duration-500 transform hover:translate-x-2 border-2 border-black bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Method
            </button>
          </div>
          <div className="overflow-x-auto relative z-10">
            <table className="w-full border-separate border-spacing-y-4">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Name</th>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Description</th>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Sequence</th>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Mandatory</th>
                  <th className="px-6 py-3 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {methods.map(method => (
                  <tr key={method.id} className="transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-500/40 hover:via-purple-500/40 hover:to-blue-500/40">
                    <td className="px-6 py-4 text-gray-700">{method.name}</td>
                    <td className="px-6 py-4 text-gray-700">{method.description}</td>
                    <td className="px-6 py-4 text-gray-700">{method.sequence}</td>
                    <td className="px-6 py-4 text-gray-700">{method.mandatory ? 'Yes' : 'No'}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-6">
                        <button
                          onClick={() => handleEditMethod(method)}
                          className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('Are you sure you want to delete this method?')) {
                              setMethods(methods.filter(m => m.id !== method.id));
                            }
                          }}
                          className="text-blue-600 hover:text-purple-600 transition-colors duration-300"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showCompanyForm && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setShowCompanyForm(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white p-6 rounded-lg shadow-2xl border-2 border-black z-50">
            <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              {editingCompany ? 'Edit Company' : 'Add Company'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const newCompany = {
                  id: editingCompany ? editingCompany.id : Date.now(),
                  name: formData.get('name'),
                  location: formData.get('location'),
                  communicationPeriodicity: parseInt(formData.get('periodicity'))
                };

                if (editingCompany) {
                  setCompanies(companies.map(c => c.id === editingCompany.id ? newCompany : c));
                } else {
                  setCompanies([...companies, newCompany]);
                }
                setShowCompanyForm(false);
              }}
            >
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingCompany?.name}
                  className="w-full p-2 border-2 border-black rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={editingCompany?.location}
                  className="w-full p-2 border-2 border-black rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Communication Periodicity (days)</label>
                <input
                  type="number"
                  name="periodicity"
                  defaultValue={editingCompany?.communicationPeriodicity || 14}
                  className="w-full p-2 border-2 border-black rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  required
                  min="1"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCompanyForm(false)}
                  className="px-4 py-2 rounded-lg border-2 border-black bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg border-2 border-black bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none transition-all duration-300"
                >
                  {editingCompany ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </>
      )}


      {showMethodForm && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setShowMethodForm(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white p-6 rounded-lg shadow-2xl border-2 border-black z-50">
            <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              {editingMethod ? 'Edit Method' : 'Add Method'}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const newMethod = {
                  id: editingMethod ? editingMethod.id : Date.now(),
                  name: formData.get('name'),
                  description: formData.get('description'),
                  sequence: parseInt(formData.get('sequence')),
                  mandatory: formData.get('mandatory') === 'on'
                };

                if (editingMethod) {
                  setMethods(methods.map(m => m.id === editingMethod.id ? newMethod : m));
                } else {
                  setMethods([...methods, newMethod]);
                }
                setShowMethodForm(false);
              }}
            >
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Method Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingMethod?.name}
                  className="w-full p-2 border-2 border-black rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  defaultValue={editingMethod?.description}
                  className="w-full p-2 border-2 border-black rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700">Sequence</label>
                <input
                  type="number"
                  name="sequence"
                  defaultValue={editingMethod?.sequence || methods.length + 1}
                  className="w-full p-2 border-2 border-black rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  required
                  min="1"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="mandatory"
                    defaultChecked={editingMethod?.mandatory}
                    className="form-checkbox h-5 w-5 text-blue-500 rounded border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                  <span className="font-medium text-gray-700">Mandatory</span>
                </label>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowMethodForm(false)}
                  className="px-4 py-2 rounded-lg border-2 border-black bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg border-2 border-black bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:border-none transition-all duration-300"
                >
                  {editingMethod ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminModule;
