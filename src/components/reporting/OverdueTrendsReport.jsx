import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from '@mui/material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const MOCK_DATA = [
  { date: '2024-01-01', ENTNT: 5, GOOGLE: 3, MICROSOFT: 7 },
  { date: '2024-01-02', ENTNT: 2, GOOGLE: 4, MICROSOFT: 6 },
  { date: '2024-01-03', ENTNT: 3, GOOGLE: 2, MICROSOFT: 5 },
  { date: '2024-01-04', ENTNT: 4, GOOGLE: 5, MICROSOFT: 3 },
  { date: '2024-01-05', ENTNT: 1, GOOGLE: 3, MICROSOFT: 4 },
  { date: '2024-01-06', ENTNT: 6, GOOGLE: 2, MICROSOFT: 5 },
  { date: '2024-01-07', ENTNT: 3, GOOGLE: 4, MICROSOFT: 2 },
 
];


const getColor = (index) => {
  const colors = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff7300',
    '#aa336a',
    '#33aa99',
  ];
  return colors[index % colors.length];
};


const formatDate = (dateString) => {
  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};


const filterData = (data, companyFilter, startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return data
    .filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= start && entryDate <= end;
    })
    .map((entry) => {
      
      if (companyFilter && entry[companyFilter] !== undefined) {
        const filteredEntry = { date: entry.date };
        filteredEntry[companyFilter] = entry[companyFilter];
        return filteredEntry;
      }
      return entry;
    });
};


const OverdueTrendsReport = () => {
  
  const availableCompanies =
    MOCK_DATA.length > 0
      ? Object.keys(MOCK_DATA[0]).filter((key) => key !== 'date')
      : [];

  
  const [companyFilter, setCompanyFilter] = useState('All');
  const [startDate] = useState('2024-01-01');
  const [endDate] = useState('2024-01-07');
  const [filteredData, setFilteredData] = useState([]);

  
  const handleCompanyChange = (event) => {
    setCompanyFilter(event.target.value);
  };

  
  const handleFilter = () => {
    const data = filterData(
      MOCK_DATA,
      companyFilter === 'All' ? null : companyFilter,
      startDate,
      endDate
    );
    setFilteredData(data);
  };

 
  const handleExportCSV = () => {
    if (filteredData.length === 0) {
      alert('No data to export');
      return;
    }
    exportToCSV(filteredData, 'overdue_trends_report.csv');
  };

  
  const handleExportPDF = () => {
    if (filteredData.length === 0) {
      alert('No data to export');
      return;
    }
    const title =
      companyFilter === 'All'
        ? 'All Companies Overdue Communication Trends Report'
        : `${companyFilter} Overdue Communication Trends Report`;
    exportToPDF(title, filteredData);
  };

  
  const exportToCSV = (data, filename) => {
    const csvRows = [];
    
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

   
    data.forEach((row) => {
      const values = headers.map((header) => row[header] || '');
      csvRows.push(values.join(','));
    });

    
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  
  const exportToPDF = (title, data) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(title, 14, 22);

    doc.setFontSize(12);
    const tableColumn = Object.keys(data[0]);
    const tableRows = data.map((row) => Object.values(row));

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save(`${title}.pdf`);
  };

  
  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const companies =
    companyFilter === 'All'
      ? availableCompanies
      : [companyFilter].filter((company) =>
          availableCompanies.includes(company)
        );

  
  const formattedData = filteredData.map((entry) => ({
    date: formatDate(entry.date),
    ...entry,
  }));

  return (
    <Box className="relative p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border-2 border-[#b78af7] overflow-hidden">
     
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
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        ></div>
       
        <div
          className="absolute top-3/4 right-1/4 w-14 h-14 bg-gradient-to-l from-blue-200 via-purple-200 to-blue-200 opacity-20 transform rotate-30"
          style={{
            clipPath:
              'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
          }}
        ></div>

        
        <div
          className="absolute bottom-5 left-5 w-12 h-12 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 opacity-20 transform rotate-12"
          style={{
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        ></div>
        
        <div
          className="absolute bottom-5 right-5 w-16 h-16 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 opacity-15 rounded-full"
        ></div>

       
        <div
          className="absolute bottom-20 left-20 w-0 h-0 border-l-12 border-r-12 border-b-20 border-transparent border-b-green-500 opacity-25"
        ></div>
       
        <div
          className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-r from-pink-400 via-purple-600 to-pink-400 opacity-20 transform rotate-45"
          style={{
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }}
        ></div>
      </div>

     
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

     
      <Box className="flex flex-wrap gap-4 mb-4 relative z-10">
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Company</InputLabel>
          <Select
            value={companyFilter}
            label="Company"
            onChange={handleCompanyChange}
          >
            <MenuItem value="All">All</MenuItem>
            {availableCompanies.map((comp) => (
              <MenuItem key={comp} value={comp}>
                {comp}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={handleFilter}>
          Filter
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="outlined" onClick={handleExportCSV}>
          Export CSV
        </Button>
        <Button variant="outlined" onClick={handleExportPDF}>
          Export PDF
        </Button>
      </Box>

      
      {formattedData.length > 0 ? (
        <ResponsiveContainer width="100%" height={500} className="relative z-10">
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              allowDecimals={false}
              label={{
                value: 'Overdue Count',
                angle: -90,
                position: 'insideLeft',
                offset: 10,
              }}
            />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            {companies.map((company, index) => (
              <Line
                key={company}
                type="monotone"
                dataKey={company}
                stroke={getColor(index)}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <Typography variant="body1" align="center" className="relative z-10">
          No overdue communication data available for the selected criteria.
        </Typography>
      )}
    </Box>
  );
};

export default OverdueTrendsReport;



