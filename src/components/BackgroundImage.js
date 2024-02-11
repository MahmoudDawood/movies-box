import React from 'react';
import { Box } from '@mui/material';
import { NavBar } from './NavBar';

// Component
const BackgroundImage = ({ setSearchQuery }) => {
  return (
        <Box
            sx={{
            height: '100vh', 
            width: '100%', 
            backgroundImage: `url(https://3.bp.blogspot.com/-WsNSf6jZvS0/XM3YV3O4ZDI/AAAAAAAACJ8/A7K0sxMcw_gb82SO9p7JYoAW9tPIIWxRQCKgBGAs/w2560-h1080-c/john-wick-3-keanu-reeves-uhdpaper.com-4K-23.jpg)`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center', 
        }}
        >
        <Box
          sx={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay with 50% opacity
          }}
        ></Box>
        <NavBar setSearchQuery={setSearchQuery}/>
      </Box>
  );
};

export { BackgroundImage }
