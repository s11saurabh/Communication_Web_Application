import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { exportToCSV, exportToPDF } from './utils/exportUtils';

const mockData = [
  { company: 'ENTNT', method: 'Email', count: 120 },
  { company: 'ENTNT', method: 'LinkedIn Post', count: 80 },
  { company: 'GOOGLE', method: 'Email', count: 150 },
  { company: 'GOOGLE', method: 'Phone Call', count: 60 },
];

const CommunicationFrequencyReport = () => {
  const [company, setCompany] = useState('');
  const [method, setMethod] = useState('');
  const [dateRange, setDateRange] = useState({ from: '', to: '' });
  const [filteredData, setFilteredData] = useState(mockData);

  const companies = [...new Set(mockData.map((item) => item.company))];
  const methods = [...new Set(mockData.map((item) => item.method))];

  const handleFilter = () => {
    let data = [...mockData];
    if (company) data = data.filter((item) => item.company === company);
    if (method) data = data.filter((item) => item.method === method);
    setFilteredData(data);
  };

  const handleExportCSV = () => {
    exportToCSV(filteredData, 'communication_frequency_report.csv');
  };

  const handleExportPDF = () => {
    exportToPDF('Communication Frequency Report', filteredData);
  };

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
      </div>

      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg -z-5"></div>

      <Box className="flex flex-wrap gap-4 mb-4 relative z-10">
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Company</InputLabel>
          <Select
            value={company}
            label="Company"
            onChange={(e) => setCompany(e.target.value)}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {companies.map((comp) => (
              <MenuItem key={comp} value={comp}>
                {comp}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Communication Method</InputLabel>
          <Select
            value={method}
            label="Communication Method"
            onChange={(e) => setMethod(e.target.value)}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {methods.map((meth) => (
              <MenuItem key={meth} value={meth}>
                {meth}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="From"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dateRange.from}
          onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
        />
        <TextField
          label="To"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dateRange.to}
          onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
        />
        <Button variant="contained" onClick={handleFilter}>
          Filter
        </Button>
      </Box>

      <ResponsiveContainer width="100%" height={400} className="relative z-10">
        <BarChart data={filteredData}>
          <XAxis dataKey="method" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="url(#colorGradient)" name="Communication Count" />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>

      <Box className="flex flex-wrap gap-4 mt-4 relative z-10">
        <Button variant="outlined" onClick={handleExportCSV}>
          Export CSV
        </Button>
        <Button variant="outlined" onClick={handleExportPDF}>
          Export PDF
        </Button>
      </Box>
    </Box>
  );
};

export default CommunicationFrequencyReport;
