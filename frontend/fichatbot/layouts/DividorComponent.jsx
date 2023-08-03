import React from 'react';
import Divider from '@mui/material/Divider';

const DividorComponent = ({ textAlign, children, bgColor, orientation, color }) => {
  return (
    <Divider textAlign={textAlign} orientation={orientation} style={{ backgroundColor: bgColor, color: color }} component="li">
      {children}
    </Divider>
  );
};

export default DividorComponent;


