import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({
  children,
  onClick,
  variant,
  size,
  fullWidth,
  id,
  className,
  disableTouchRipple,
  disableFocusRipple,
  bgColor,
  textColor,
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      id={id}
      className={className}
      disableFocusRipple={disableFocusRipple}
      disableTouchRipple={disableTouchRipple}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;


// import React from "react";
// import Button from "@mui/material/Button";

// interface Props {
//   children: React.ReactNode;
//   onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
//   variant: "contained" | "outlined" | "text";
//   size?: "small" | "medium" | "large";
//   fullWidth?: boolean;
//   id?: string;
//   className?: string;
//   disableTouchRipple?: boolean;
//   disableFocusRipple?: boolean;
//   bgColor?: string,
//   textColor?: string,
// }

// const ButtonComponent: React.FC<Props> = ({
//   children,
//   onClick,
//   variant,
//   size,
//   fullWidth,
//   id,
//   className,
//   disableTouchRipple,
//   disableFocusRipple,
//   bgColor,
//   textColor
// }) => {
//   return (


//     <Button
//       size={size}
//       variant={variant}
//       onClick={onClick}
//       fullWidth={fullWidth}
//       id={id}
//       className={className}
//       disableFocusRipple={disableFocusRipple}
//       disableTouchRipple={disableTouchRipple}

//       style={{
//         backgroundColor: bgColor,
//         color: textColor
//       }}
//     >
//       {children}
//     </Button>

//   );
// };

// export default ButtonComponent;
