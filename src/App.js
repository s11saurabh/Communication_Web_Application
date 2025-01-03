import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminModule from './components/admin/AdminModule';
import UserModule from './components/user/UserModule';
import ReportingModule from './components/reporting/ReportingModule';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import BackgroundDesign from './components/common/BackgroundDesign';

const initialCompanies = [
  {
    id: 1,
    name: "ENTNT",
    location: "Abu Dhabi",
    linkedinProfile: "linkedin.com/company/entnt",
    emails: ["contact@entnt.com"],
    phoneNumbers: ["+1-555-0123"],
    comments: "Leading technology provider",
    communicationPeriodicity: 7,
    communications: [
      {
        type: "LinkedIn Post",
        date: "2025-01-05",
        notes: "Introduced new content collaboration tools"
      }
    ]
  },
  {
    id: 2,
    name: "GOOGLE",
    location: "California, US",
    linkedinProfile: "linkedin.com/company/google",
    emails: ["info@google.com"],
    phoneNumbers: ["+1-555-0456"],
    comments: "Global technology leader",
    communicationPeriodicity: 9,
    communications: [
      {
        type: "Email",
        date: "2024-12-11",
        notes: "Shared updates on AI initiatives"
      },
      {
        type: "Webinar",
        date: "2025-01-18",
        notes: "Hosted a session on cloud computing advancements"
      }
    ]
  },
  {
    id: 3,
    name: "MICROSOFT",
    location: "Washington, US",
    linkedinProfile: "linkedin.com/company/microsoft",
    emails: ["info@microsoft.com"],
    phoneNumbers: ["+1-425-882-8080"],
    comments: "Software and services giant",
    communicationPeriodicity: 7,
    communications: [
      {
        type: "Email",
        date: "2025-01-25",
        notes: "Announced new Office 365 features"
      },
      {
        type: "Conference Call",
        date: "2024-12-05",
        notes: "Discussed enterprise solutions partnership"
      }
    ]
  },
  {
    id: 4,
    name: "AMAZON",
    location: "Seattle, us",
    linkedinProfile: "linkedin.com/company/amazon",
    emails: ["contact@amazon.com"],
    phoneNumbers: ["+1-206-266-1000"],
    comments: "E-commerce and cloud services leader",
    communicationPeriodicity: 3,
    communications: [
      {
        type: "Email",
        date: "2025-01-21",
        notes: "Introduced new AWS services"
      },
      {
        type: "Newsletter",
        date: "2024-12-21",
        notes: "Sent monthly performance report"
      },
      {
        type: "Phone Call",
        date: "2025-01-13",
        notes: "Followed up on supply chain collaboration"
      }
    ]
  },
  {
    id: 5,
    name: "NVIDIA",
    location: "Santa Clara, California, US",
    linkedinProfile: "linkedin.com/company/nvidia",
    emails: ["info@nvidia.com"],
    phoneNumbers: ["+1-425-882-8080"],
    comments: "microprocessor upgradation",
    communicationPeriodicity: 11,
    communications: [

      {
        type: "Newsletter",
        date: "2025-01-03",
        notes: "Sent monthly performance report"
      },
      {
        type: "LinkedIn Post",
        date: "2025-01-07",
        notes: "Introduced new content collaboration tools"
      },
      {
        type: "Email",
        date: "2024-12-14",
        notes: "Announced new Office 365 features"
      },
      {
        type: "Conference Call",
        date: "2025-01-16",
        notes: "Discussed enterprise solutions partnership"
      }
    ]
  }

];

const initialCommunicationMethods = [
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
    description: "Direct message to company representatives on LinkedIn",
    sequence: 2,
    mandatory: true
  },
  {
    id: 3,
    name: "Email",
    description: "Email communication",
    sequence: 3,
    mandatory: true
  },
  {
    id: 4,
    name: "Phone Call",
    description: "Direct phone communication",
    sequence: 4,
    mandatory: false
  },
  {
    id: 5,
    name: "Other",
    description: "Other forms of communication",
    sequence: 5,
    mandatory: false
  }
];

function App() {
  const [companies, setCompanies] = useState(initialCompanies);
  const [communicationMethods, setCommunicationMethods] = useState(initialCommunicationMethods);

  return (
    <Router>
      <div className="min-h-screen relative">
        <BackgroundDesign />
        <div className="flex h-screen overflow-hidden">
          
          <div className="w-64 bg-white/80 backdrop-blur-sm shadow-lg relative z-10">
            <Sidebar />
          </div>

          
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-white/80 backdrop-blur-sm relative z-10">
              <Header />
            </div>
            
            <main className="flex-1 overflow-y-auto">
              <div className="max-w-6xl mx-auto px-6 py-8">
                <Routes>
                  <Route 
                    path="/admin/*" 
                    element={
                      <AdminModule 
                        companies={companies} 
                        setCompanies={setCompanies}
                        communicationMethods={communicationMethods}
                        setCommunicationMethods={setCommunicationMethods}
                      />
                    } 
                  />
                  <Route 
                    path="/user/*" 
                    element={
                      <UserModule 
                        companies={companies}
                        setCompanies={setCompanies}
                        communicationMethods={communicationMethods}
                      />
                    } 
                  />
                  <Route 
                    path="/reports/*" 
                    element={
                      <ReportingModule 
                        companies={companies}
                        communicationMethods={communicationMethods}
                      />
                    } 
                  />
                  <Route path="/" element={<Navigate to="/user" replace />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;