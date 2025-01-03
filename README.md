# Communication_Web_Application 🗓️

A comprehensive React-based Application for tracking and managing company communications efficiently.

## 🌐 Live Demo
- **Deployed Link**: [Communication Calendar App](https://saurabhentnt-git-main-saurabhs-projects-d236dc8e.vercel.app/user)
- **GitHub Repository**: [Source Code](https://github.com/s11saurabh/Communication_Web_Application)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Modules](#modules)
- [Usage](#usage)
- [Testing](#testing)
- [Performance Optimization](#performance-optimization)

## 🎯 Overview

The Communication Calendar Application is designed to help organizations maintain strong professional relationships by tracking and managing communications with other companies. The system provides a centralized platform for logging interactions, planning future communications, and analyzing engagement patterns.

### Key Objectives:
- Maintain accurate records of company interactions
- Enable efficient communication tracking
- Ensure timely follow-ups
- Provide analytical insights for better engagement

## 🚀 Features

### Admin Module
1. **Company Management**
   - Add, edit, and delete company profiles
   - Manage company details (name, location, contact info)
   - Set communication periodicities
   - Track LinkedIn profiles and contact information

2. **Communication Method Management**
   - Configure communication methods
   - Set sequence priorities
   - Define mandatory communication steps
   - Default methods include:
     - LinkedIn Post
     - LinkedIn Message
     - Email
     - Phone Call
     - Other

### User Module
1. **Dashboard Features**
   - Grid view of companies
   - Last 5 communications summary
   - Next scheduled communication display
   - Color-coded status indicators:
     - Red: Overdue communications
     - Yellow: Due today
   - Interactive tooltips for communication details

2. **Communication Management**
   - Log new communications with timestamp
   - Multi-company selection support
   - Date tracking system
   - Notes and comments documentation
   - Communication history tracking

3. **Calendar View**
   - Past communication records
   - Future communication planning
   - Interactive calendar interface
   - Drag-and-drop scheduling
   - Month/week/day views

4. **Notification System**
   - Real-time alerts for due communications
   - Overdue task notifications
   - Email reminders
   - Custom notification settings
   - Priority-based alert system

### Reporting Module
1. **Analytics Dashboard**
   - Communication frequency analysis
   - Engagement effectiveness metrics
   - Overdue communication tracking
   - Exportable reports (PDF/CSV)
   - Real-time activity logging
   - Custom date range analysis
   - Company-specific reporting
   - Trend visualization

## 📁 Project Structure

```
SAURABH_ENTNT/
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   ├── AdminModule.js
│   │   │   ├── CommunicationMethodFormModal.js
│   │   │   ├── CommunicationMethodManagement.js
│   │   │   ├── CompanyFormModal.js
│   │   │   └── CompanyManagement.js
│   │   ├── common/
│   │   │   ├── BackgroundDesign.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── TabButton.jsx
│   │   ├── reporting/
│   │   │   ├── utils/
│   │   │   │   └── exportUtils.js
│   │   │   ├── ActivityLog.jsx
│   │   │   ├── CommunicationFrequencyReport.jsx
│   │   │   ├── EngagementEffectivenessReport.jsx
│   │   │   ├── OverdueTrendsReport.jsx
│   │   │   └── ReportingModule.jsx
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── calendar.jsx
│   │   │   ├── checkbox.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── popover.jsx
│   │   │   ├── select.jsx
│   │   │   └── tooltip.jsx
│   │   └── user/
│   │       ├── CalendarView.jsx
│   │       ├── communicationModal.jsx
│   │       ├── Dashboard.jsx
│   │       ├── NotificationsView.jsx
│   │       └── UserModule.jsx
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Technology Stack

### Frontend Development
- **Framework**: React.js 18.x
- **Styling**: 
  - Tailwind CSS 3.x for utility-first styling
  - Custom CSS modules for component-specific styles
- **State Management**: 
  - Redux Toolkit for global state
  - React Context for theme/auth state
- **UI Components**: 
  - Custom components
  - shadcn/ui for enhanced UI elements
  - Responsive design implementation

### Development Tools
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm/yarn
- **Version Control**: Git
- **Code Quality**:
  - ESLint for code linting
  - Prettier for code formatting
  - Husky for pre-commit hooks

### Additional Libraries
- **Calendar**: FullCalendar for advanced calendar features
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Yup validation
- **Date Management**: date-fns for date manipulation
- **Testing**: Jest + React Testing Library

### Deployment
- **Platform**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Vercel Analytics

## ⚙️ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/s11saurabh/Communication_Web_Application.git
```

2. **Navigate to project directory:**
```bash
cd Communication_Web_Application
```

3. **Install dependencies:**
```bash
npm install
```

4. **Start development server:**
```bash
npm start
```
## 📚 Modules

### Admin Module Usage
1. **Access Admin Panel**
   - Navigate to `/admin`
   - Access company management dashboard

2. **Company Management**
   ```javascript
   // Example company structure
   const company = {
     name: "Entnt",
     location: "Abu dhabi",
     linkedinProfile: "https://linkedin.com/company/entnt",
     emails: ["hr@entnt.in"],
     phoneNumbers: ["+1-234-567-8900"],
     communicationPeriodicity: 14 // days
   };
   ```

3. **Communication Methods**
   - Configure through admin interface
   - Set priority levels
   - Define mandatory steps
   - Customize sequence flow

### User Module Usage
1. **Dashboard Navigation**
   - View company grid
   - Check communication status
   - Access quick actions

2. **Communication Logging**
   ```javascript
   // Example communication log
   const communicationLog = {
     companyId: "123",
     type: "EMAIL",
     date: "2025-01-03",
     notes: "Discussed Q1 plans",
     status: "COMPLETED"
   };
   ```

3. **Calendar Operations**
   - Browse by month/week/day
   - Schedule future communications
   - Review past interactions

### Reporting Module Usage
1. **Generate Reports**
   - Access analytics dashboard
   - Select date ranges
   - Choose report types

2. **Export Data**
   ```javascript
   // Example export configuration
   const exportConfig = {
     format: "PDF",
     dateRange: { start: "2025-01-01", end: "2025-01-31" },
     companies: ["all"],
     metrics: ["frequency", "effectiveness"]
   };
   ```

## 🧪 Testing
### Test Structure
```javascript
// Example test structure
describe('CompanyManagement Component', () => {
  it('should render company list', () => {
    // Test implementation
  });

  it('should handle company creation', () => {
    // Test implementation
  });
});
```

### Testing Scenarios
1. **Unit Tests**
   - Component rendering
   - State management
   - User interactions
   - Form validations

2. **Integration Tests**
   - Module interactions
   - Data flow
   - API integration

3. **End-to-End Tests**
   - User journeys
   - Critical paths
   - Error scenarios

## 🔧 Performance Optimization

### Code Optimization
1. **Code Splitting**
   ```javascript
   // Example of lazy loading
   const ReportingModule = React.lazy(() => import('./components/reporting/ReportingModule'));
   ```

2. **State Management**
   - Efficient Redux store design
   - Memoization with useMemo and useCallback
   - Local state optimization

3. **Resource Loading**
   - Image optimization
   - Lazy loading of assets
   - Bundle size optimization

### Monitoring and Analytics
1. **Performance Metrics**
   - Load time monitoring
   - Resource usage tracking
   - User interaction metrics

2. **Error Tracking**
   - Error boundary implementation
   - Logger service
   - Performance monitoring

## 🤝 Contributing

1. **Fork the repository**
   ```bash
   # Clone your fork
   git clone https://github.com/your-username/Communication_Web_Application.git
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and commit**
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

4. **Push to branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open Pull Request**
   - Provide clear description
   - Reference related issues
   - Add necessary labels

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

For questions or support, please contact:
- **GitHub**: [@s11saurabh](https://github.com/s11saurabh)
- **Project Issues**: [GitHub Issues](https://github.com/s11saurabh/Communication_Web_Application/issues)

## 📊 Project Status

- **Current Version**: 1.0.0
- **Last Updated**: January 03, 2025
- **Status**: Active Development

---

Made with ❤️ by SAURABH for Communication_Web_Application
