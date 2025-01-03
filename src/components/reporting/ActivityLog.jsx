import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';


const mockActivityLogs = [
  { id: 1, timestamp: '2024-12-29 10:00', activity: 'Sent Email to ENTNT' },
  { id: 2, timestamp: '2024-12-29 10:05', activity: 'LinkedIn Message sent to GOOGLE' },

];


const getPatternColor = (index) => {
  const colors = [
    'rgba(135, 132, 216, 0.3)', 
    'rgba(130, 202, 157, 0.25)', 
    'rgba(255, 198, 88, 0.3)', 
    'rgba(255, 115, 0, 0.25)', 
    'rgba(170, 51, 106, 0.3)', 
    'rgba(51, 170, 153, 0.25)', 
    'rgba(255, 87, 34, 0.2)', 
    'rgba(33, 150, 243, 0.2)',
    'rgba(76, 175, 80, 0.2)', 
    'rgba(156, 39, 176, 0.2)', 
  ];
  return colors[index % colors.length];
};


const ActivityLog = () => {
  const [logs, setLogs] = useState(mockActivityLogs);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setLogs((prevLogs) => [
        {
          id: prevLogs.length + 1,
          timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
          activity: `New activity ${prevLogs.length + 1}`,
        },
        ...prevLogs,
      ]);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      sx={{
        position: 'relative',
        p: 4,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        border: '2px solid #b78af7',
        overflow: 'hidden',
        maxWidth: 800, 
        height: 600,    
        margin: '40px auto',
      }}
    >
     
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          overflow: 'hidden',
        }}
      >
       
        {[...Array(5)].map((_, index) => (
          <Box
            key={`circle-${index}`}
            sx={{
              position: 'absolute',
              width: 150,
              height: 150,
              bgcolor: getPatternColor(index),
              borderRadius: '50%',
              top: `${10 + index * 15}%`,
              left: `${5 + index * 15}%`,
              opacity: 0.6,
              transform: `rotate(${index * 30}deg)`,
              animation: `rotateAnimation-${index} 20s linear infinite`,
            }}
          />
        ))}

        
        {[...Array(3)].map((_, index) => (
          <Box
            key={`star-${index}`}
            sx={{
              position: 'absolute',
              width: 0,
              height: 0,
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              borderBottom: `40px solid ${getPatternColor(index + 5)}`,
              top: `${60 + index * 10}%`,
              left: `${70 - index * 10}%`,
              transform: `rotate(${index * 45}deg)`,
              opacity: 0.7,
              animation: `starAnimation-${index} 25s ease-in-out infinite`,
            }}
          />
        ))}

        
        {[...Array(2)].map((_, index) => (
          <Box
            key={`pyramid-${index}`}
            sx={{
              position: 'absolute',
              width: 0,
              height: 0,
              borderLeft: '30px solid transparent',
              borderRight: '30px solid transparent',
              borderBottom: `60px solid ${getPatternColor(index + 8)}`,
              top: `${20 + index * 20}%`,
              left: `${30 + index * 10}%`,
              transform: `rotate(${index * 15}deg)`,
              opacity: 0.5,
              animation: `pyramidAnimation-${index} 30s linear infinite`,
            }}
          />
        ))}

       
        {[...Array(2)].map((_, index) => (
          <Box
            key={`hexagon-${index}`}
            sx={{
              position: 'absolute',
              width: 80,
              height: 46.19, 
              bgcolor: getPatternColor(index + 10),
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              top: `${40 + index * 20}%`,
              left: `${10 + index * 20}%`,
              opacity: 0.4,
              transform: `rotate(${index * 60}deg)`,
              animation: `hexagonAnimation-${index} 35s linear infinite`,
            }}
          />
        ))}
      </Box>

      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(255, 255, 255, 0.7)',
          zIndex: -1,
        }}
      />

      
      <Typography variant="h5" gutterBottom sx={{ color: 'blue', position: 'relative', zIndex: 1 }}>
        Real-Time Activity Log
      </Typography>

      
      <List
        sx={{
          maxHeight: 450,
          overflow: 'auto',
          bgcolor: 'background.paper',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {logs.map((log) => (
          <ListItem key={log.id} divider>
            <ListItemText
              primary={log.activity}
              secondary={log.timestamp}
              primaryTypographyProps={{ sx: { color: 'black', fontWeight: 'bold' } }}
              secondaryTypographyProps={{ sx: { color: 'gray' } }}
            />
          </ListItem>
        ))}
      </List>

     
      <style jsx>{`
        @keyframes rotateAnimation-0 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateAnimation-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes rotateAnimation-2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateAnimation-3 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes rotateAnimation-4 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes starAnimation-0 {
          0% { transform: rotate(0deg); opacity: 0.7; }
          50% { transform: rotate(180deg); opacity: 0.9; }
          100% { transform: rotate(360deg); opacity: 0.7; }
        }
        @keyframes starAnimation-1 {
          0% { transform: rotate(0deg); opacity: 0.7; }
          50% { transform: rotate(-180deg); opacity: 0.9; }
          100% { transform: rotate(-360deg); opacity: 0.7; }
        }
        @keyframes starAnimation-2 {
          0% { transform: rotate(0deg); opacity: 0.7; }
          50% { transform: rotate(180deg); opacity: 0.9; }
          100% { transform: rotate(360deg); opacity: 0.7; }
        }

        @keyframes pyramidAnimation-0 {
          0% { transform: rotate(0deg); opacity: 0.5; }
          50% { transform: rotate(180deg); opacity: 0.7; }
          100% { transform: rotate(360deg); opacity: 0.5; }
        }
        @keyframes pyramidAnimation-1 {
          0% { transform: rotate(0deg); opacity: 0.5; }
          50% { transform: rotate(-180deg); opacity: 0.7; }
          100% { transform: rotate(-360deg); opacity: 0.5; }
        }

        @keyframes hexagonAnimation-0 {
          0% { transform: rotate(0deg); opacity: 0.4; }
          50% { transform: rotate(180deg); opacity: 0.6; }
          100% { transform: rotate(360deg); opacity: 0.4; }
        }
        @keyframes hexagonAnimation-1 {
          0% { transform: rotate(0deg); opacity: 0.4; }
          50% { transform: rotate(-180deg); opacity: 0.6; }
          100% { transform: rotate(-360deg); opacity: 0.4; }
        }
      `}</style>
    </Box>
  );
};

export default ActivityLog;
