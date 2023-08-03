import React from 'react';
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress';


function Loader({variant="indeterminate", size=40, thickness=4, value=100, position="relative"}) {
  return (
    <Box sx={{ position: position }}>
      <CircularProgress
        variant={variant}
        size={size}
        thickness={thickness}
        value={value}
        disableShrink
      />

    </Box>
  );
}

export default Loader