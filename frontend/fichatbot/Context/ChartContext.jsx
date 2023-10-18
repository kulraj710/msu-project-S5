// ChartContext.js
'use client'
import React, { createContext, useState } from 'react';

export const ChartCon = createContext(null)

function ChartContext({ children }) {

    const [showChart, setShowChart] = useState(false)

    return (
        <ChartCon.Provider value={{ showChart, setShowChart }}>
            {children}
        </ChartCon.Provider>
    );
}

export default ChartContext