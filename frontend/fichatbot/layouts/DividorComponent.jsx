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


// import React from 'react'
// import Divider from '@mui/material/Divider';

// interface Props {
//   textAlign?: any,
//   children?: React.ReactNode, 
//   bgColor?: string,
//   orientation?: "horizontal" | "vertical",
//   color?: string
// }
// const DividorComponent: React.FC<Props> = ({ textAlign,children, bgColor, orientation, color}) => {
//   return (
//     <Divider textAlign={textAlign} orientation={orientation} style={{ backgroundColor: bgColor, color : color }} component="li">{children}</Divider>
//   )
// }

// export default DividorComponent