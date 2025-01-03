# Communication_Web_Application 🗓️

A comprehensive Web Application for tracking and managing company communications efficiently.
It features an Admin Module for managing companies and communication methods, a User Module with a dashboard for viewing and logging interactions, notifications for overdue or due communications, and a calendar view for scheduling. An optional Reporting and Analytics Module provides insights on communication frequency and effectiveness. The app prioritizes usability, clarity, and efficient data handling to ensure timely and consistent follow-ups.

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
    The Admin Module serves as the central control system for the Communication Calendar Application, focusing on Company 
    Management and Communication Method Management.

### Admin Module Usage
a. **Access Admin Panel**
   - Navigate to `/admin`
   - Access company management dashboard

b. **Company Management**
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

1. **Company Management**
     Company Management enables administrators to handle company profiles efficiently. They can add new companies, update existing information,
     and track communication schedules for each business relationship.
<img width="1468" alt="image" src="https://github.com/user-attachments/assets/0225ab84-5447-4ce3-865e-1d6b6838f609" />

     The system maintains detailed company records, including names, locations,and contact details. LinkedIn profiles and communication preferences
     are stored to ensure consistent professional engagement
   - Add, edit, and delete company profiles
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/927d315a-f881-4542-8d3f-e2f5d1ca297a" />
   - Manage company details (name, location, contact info)
   - Set communication periodicities
   - Track LinkedIn profiles and contact information

3. **Communication Method Management**
   Communication Method Management organizes interactions through a structured sequence. It starts with LinkedIn Posts, progresses to Messages,
   then moves to Emails, and concludes with Phone Calls.
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/6571abf1-2b6f-4974-8bdc-a59fb4f2426a" />
   Administrators can customize how they interact with each company. They can set mandatory
   steps, adjust communication frequencies, and modify the sequence based on specific company needs.
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
    The User Module is designed for daily communication management, featuring four key components: Dashboard Features, Communication Management, Calendar View,
    and Notification System.

    ### User Module Usage
a. **Dashboard Navigation**
   - View company grid
   - Check communication status
   - Access quick actions

b. **Communication Logging**
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
1. **Dashboard Features**
   The Dashboard provides a comprehensive grid view of all companies. Users can instantly see their last five communications
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/3a1c5774-12c2-438c-8631-80193e7a31a5" />
   and upcoming scheduled interactions at a glance. Interactive tooltips reveal detailed information.
   - Grid view of companies
   - Last 5 communications summary
   - Next scheduled communication display
   - Color-coded status indicators:
     - Red: Overdue communications
     - Yellow: Due today
   - Interactive tooltips for communication details

3. **Communication Management**
     Communication Management streamlines interaction tracking. Users can log new communications with timestamps, select multiple companies for batch updates, and maintain
     detailed notes.The system preserves a complete communication history. Each entry includes dates, methods used, and outcomes. Users can track patterns and maintain
     consistent engagement records.
   - Log new communications with timestamp
 <img width="1470" alt="image" src="https://github.com/user-attachments/assets/81a1136d-ad2a-44eb-95c7-86630cfe15d0" />
   - Multi-company selection support
   - Date tracking system
   - Notes and comments documentation
   - Communication history tracking

5. **Calendar View**
     The Calendar View offers flexible time management. Users can review past communications, plan future interactions, and easily adjust schedules through
     drag-and-drop functionality.Multiple calendar views accommodate different planning needs.
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/47c3b2e9-b349-41ab-815c-211bdab17a93" />
     Users can switch between month, week, and day views to focus on
     immediate tasks or plan long-term strategies.
   - Past communication records
   - Future communication planning
   - Interactive calendar interface
   - Drag-and-drop scheduling
   - Month/week/day views

7. **Notification System**
     The Notification System ensures timely engagement. Real-time alerts notify users of due communications and overdue tasks, while email reminders provide
     additional backup.Color-coding makes status tracking intuitive.
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/9c7b0f2a-41e9-4f58-a651-874652d4b176" />
    Red highlights indicate overdue communications, while yellow marks tasks due today.
     Interactive tooltips reveal detailed information.
   - Real-time alerts for due communications
   - Overdue task notifications
   - Email reminders
   - Custom notification settings
   - Priority-based alert system

### Reporting Module
    The Reporting Module provides comprehensive analytics tools for communication performance analysis. Users can track frequency patterns, measure engagement effectiveness, and monitor 
    overdue communications through a dynamic dashboard. The system generates exportable reports in PDF or CSV formats, enabling detailed analysis across custom date ranges. Real-time 
    activity logging and company-specific reporting help identify trends and areas for improvement. Visual representations of communication patterns and effectiveness metrics make it easy 
    to understand and present data to stakeholders. The module turns communication data into actionable insights, helping organizations optimize their engagement strategies and maintain 
    strong business relationships.
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
 **Analytics Dashboard**
   - Communication frequency analysis
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/b855f678-dbe5-4f3e-8b70-ac05f35b4b4e" />
   - Engagement effectiveness metrics
 <img width="1470" alt="image" src="https://github.com/user-attachments/assets/ade936d6-af40-4a74-b296-5f3bb460e916" />
   - Overdue communication tracking
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/179f1cd4-efa8-465a-a2e0-a33941c7409b" />
   - Exportable reports (PDF/CSV)
   - Real-time activity logging
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/103198d9-4f3d-400b-81d5-b60ec5d204f4" />
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
    Our application leverages React.js 18.x for dynamic UI rendering, enhanced by Tailwind CSS for efficient styling and custom CSS modules for specifics.
    Redux Toolkit handles global state management while React Context manages theme and authentication states, ensuring smooth data flow across components.
    Custom UI components work alongside shadcn/ui elements to create a responsive, user-friendly interface that adapts to all screen sizes.
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
    Vite powers our development environment, providing fast builds and optimal performance through modern bundling techniques.
    Code quality is maintained through ESLint, Prettier, and Husky, ensuring consistent formatting and preventing problematic commits.
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm/yarn
- **Version Control**: Git
- **Code Quality**:
  - ESLint for code linting
  - Prettier for code formatting
  - Husky for pre-commit hooks

### Additional Libraries
    FullCalendar enables advanced scheduling features, while Recharts handles data visualization needs with elegant, interactive charts.
    Form handling is streamlined using React Hook Form with Yup validation, and date-fns provides robust date manipulation capabilities.
    Testing is comprehensive with Jest and React Testing Library ensuring reliable component behavior and user interactions.
- **Calendar**: FullCalendar for advanced calendar features
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Yup validation
- **Date Management**: date-fns for date manipulation
- **Testing**: Jest + React Testing Library

### Deployment
     Vercel hosts our application with automated deployments through GitHub Actions, while Vercel Analytics monitors performance metrics.
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
## 🧪 Testing
    Our testing strategy ensures robust application functionality through comprehensive testing layers, from unit tests to end-to-end scenarios.
### Test Structure
    Tests are organized in a hierarchical structure, using describe blocks for features and it blocks for specific test cases with clear naming.
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
   Unit tests verify individual components in isolation. We test renders, state changes, user interactions, and form validations for each component.
   - Component rendering
   - State management
   - User interactions
   - Form validations

2. **Integration Tests**
    Integration testing examines how modules work together. We verify data flow between components and ensure API interactions function correctly.
   - Module interactions
   - Data flow
   - API integration

4. **End-to-End Tests**
    E2E tests simulate real user journeys. We validate complete workflows, critical user paths, and proper error handling across the entire application.
   - User journeys
   - Critical paths
   - Error scenarios

## 🔧 Performance Optimization
      Our application implements strategic performance optimizations to ensure fast loading times and smooth user experience while maintaining code quality.

### Code Optimization
1. **Code Splitting**
     We utilize React's lazy loading to split our application into smaller chunks. This approach loads modules on demand, reducing initial bundle size and
     improving page load times.
   ```javascript
   // Example of lazy loading
   const ReportingModule = React.lazy(() => import('./components/reporting/ReportingModule'));
   ```

3. **State Management**
    Redux store is carefully structured with efficient selectors. We use memoization techniques like useMemo and useCallback to prevent unnecessary
    rerenders and optimize component updates.
   - Efficient Redux store design
   - Memoization with useMemo and useCallback
   - Local state optimization

5. **Resource Loading**
    Assets are optimized through image compression and lazy loading techniques. Bundle sizes are kept minimal by implementing tree shaking and
    code splitting strategies.
   - Image optimization
   - Lazy loading of assets
   - Bundle size optimization

### Monitoring and Analytics
1. **Performance Metrics**
     We track crucial metrics including page load times, resource usage, and user interactions. This data helps identify bottlenecks and areas
     needing optimization in real-time.
   - Load time monitoring
   - Resource usage tracking
   - User interaction metrics

3. **Error Tracking**
    Error boundaries catch and handle React component errors gracefully. Our logging service tracks issues, while performance monitoring ensures
    consistent application responsiveness.
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
Communication_Web_Application Made with ❤️ by SAURABH 
