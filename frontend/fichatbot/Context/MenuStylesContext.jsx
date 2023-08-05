// MenuStylesContext.js
'use client'
import React, { createContext, useState } from 'react';
import { useMediaQuery } from '@mui/material';

export const MenuStyles = createContext(null)

function MenuStylesContext({ children }) {

    const width768 = useMediaQuery("(min-width: 768px)")
    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <MenuStyles.Provider value={{ showSidebar, setShowSidebar, width768 }}>
            {children}
        </MenuStyles.Provider>
    );
}

export default MenuStylesContext