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
  disabled,
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
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;


