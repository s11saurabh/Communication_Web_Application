export const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  export const formatDateTime = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };
  
  export const getNextDueDate = (lastCommDate, periodicity) => {
    if (!lastCommDate || !periodicity) return null;
    const date = new Date(lastCommDate);
    date.setDate(date.getDate() + periodicity);
    return date;
  };
  
  export const isOverdue = (lastCommDate, periodicity) => {
    if (!lastCommDate || !periodicity) return false;
    const nextDue = getNextDueDate(lastCommDate, periodicity);
    return nextDue < new Date();
  };
  
  export const isDueToday = (lastCommDate, periodicity) => {
    if (!lastCommDate || !periodicity) return false;
    const nextDue = getNextDueDate(lastCommDate, periodicity);
    const today = new Date();
    return (
      nextDue.getDate() === today.getDate() &&
      nextDue.getMonth() === today.getMonth() &&
      nextDue.getFullYear() === today.getFullYear()
    );
  };
  
  export const getDaysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  };
  
  export const getDateRangeArray = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
  
    while (currentDate <= new Date(endDate)) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  };