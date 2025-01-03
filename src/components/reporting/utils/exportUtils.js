import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';

export const exportToCSV = (data, filename) => {
  if (!data || !data.length) {
    alert('No data available to export.');
    return;
  }

  const csvRows = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));

  data.forEach((row) => {
    const values = headers.map((header) => {
      const escaped = ('' + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(','));
  });

  const csvData = new Blob([csvRows.join('\n')], { type: 'text/csv' });
  saveAs(csvData, filename);
};

export const exportToPDF = (title, data) => {
  if (!data || !data.length) {
    alert('No data available to export.');
    return;
  }

  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  
  const headers = Object.keys(data[0]).map((key) => key.toUpperCase());
  const rows = data.map((row) => Object.values(row));

  doc.autoTable({
    startY: 30,
    head: [headers],
    body: rows,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [22, 160, 133] },
  });

  doc.save(`${title.replace(/\s+/g, '_').toLowerCase()}.pdf`);
};
