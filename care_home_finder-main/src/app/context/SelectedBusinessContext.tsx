
"use client"

import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the type for the context value
interface SelectedBusinessContextType {
    selectedBusiness: any[]; // Replace 'any[]' with a more specific type if possible
    setSelectedBusiness: React.Dispatch<React.SetStateAction<any[]>>; // Replace 'any[]' with a more specific type if possible
}

// Create the context with a default value
const SelectedBusinessContext = createContext<SelectedBusinessContextType | undefined>(undefined);

// Create a provider component
export const SelectedBusinessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedBusiness, setSelectedBusiness] = useState<any[]>([]); // Replace 'any[]' with the appropriate type

    return (
        <SelectedBusinessContext.Provider value={{ selectedBusiness, setSelectedBusiness }}>
            {children}
        </SelectedBusinessContext.Provider>
    );
};

// Custom hook to use the SelectedBusinessContext
export const useSelectedBusiness = () => {
    const context = useContext(SelectedBusinessContext);
    if (!context) {
        throw new Error('useSelectedBusiness must be used within a SelectedBusinessProvider');
    }
    return context;
};

