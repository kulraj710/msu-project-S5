// MenuStylesContext.js
'use client'
import React, { createContext, useState } from 'react';

export const MenuStyles = createContext(null)

function MenuStylesContext({ children }) {
    const [menuStyles, setMenuStyles] = useState(false)

    return (
        <MenuStyles.Provider value={{ menuStyles, setMenuStyles }}>
            {children}
        </MenuStyles.Provider>
    );
}

export default MenuStylesContext