import { isOverdue, isDueToday, getNextDueDate } from './dateUtils';

export const calculateNotifications = (companies) => {
  const overdueComms = [];
  const todayComms = [];
  const upcomingComms = [];

  if (!Array.isArray(companies)) return { overdueComms, todayComms, upcomingComms };

  companies.forEach(company => {
    const communications = company.communications || [];
    const lastComm = communications[0];
    
    if (lastComm) {
      if (isOverdue(lastComm.date, company.communicationPeriodicity)) {
        overdueComms.push({
          company,
          lastComm,
          daysOverdue: Math.floor(
            (new Date() - getNextDueDate(lastComm.date, company.communicationPeriodicity)) / 
            (1000 * 60 * 60 * 24)
          )
        });
      } else if (isDueToday(lastComm.date, company.communicationPeriodicity)) {
        todayComms.push({
          company,
          lastComm
        });
      } else {
        const nextDue = getNextDueDate(lastComm.date, company.communicationPeriodicity);
        const daysUntilDue = Math.floor((nextDue - new Date()) / (1000 * 60 * 60 * 24));
        
        if (daysUntilDue <= 7) {
          upcomingComms.push({
            company,
            lastComm,
            daysUntilDue
          });
        }
      }
    }
  });

  return {
    overdueComms: overdueComms.sort((a, b) => b.daysOverdue - a.daysOverdue),
    todayComms,
    upcomingComms: upcomingComms.sort((a, b) => a.daysUntilDue - b.daysUntilDue)
  };
};

export const getNotificationMessage = (notification) => {
  if (notification.daysOverdue) {
    return `${notification.company.name} is ${notification.daysOverdue} day(s) overdue for communication`;
  }
  if (notification.daysUntilDue === 0) {
    return `Communication with ${notification.company.name} is due today`;
  }
  if (notification.daysUntilDue) {
    return `Communication with ${notification.company.name} is due in ${notification.daysUntilDue} day(s)`;
  }
  return '';
};

export const getNotificationSeverity = (notification) => {
  if (notification.daysOverdue) return 'error';
  if (notification.daysUntilDue === 0) return 'warning';
  return 'info';
};

export const groupNotificationsByCompany = (notifications) => {
  return notifications.reduce((grouped, notification) => {
    const companyId = notification.company.id;
    if (!grouped[companyId]) {
      grouped[companyId] = [];
    }
    grouped[companyId].push(notification);
    return grouped;
  }, {});
};