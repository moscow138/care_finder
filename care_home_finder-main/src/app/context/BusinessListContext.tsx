"use client"

import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';


interface BusinessListContextType {
    businessList: any[];
    setBusinessList: React.Dispatch<React.SetStateAction<any[]>>;
}

export const BusinessListContext = createContext<BusinessListContextType | undefined>(undefined);

export const BusinessListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [businessList, setBusinessList] = useState<any[]>([]);

    return (
        <BusinessListContext.Provider value={{ businessList, setBusinessList }}>
            {children}
        </BusinessListContext.Provider>
    );
};
// Custom hook to use the UserLocationContext
export const useBusinessList = (): BusinessListContextType => {
    const context = useContext(BusinessListContext);
    if (!context) {
      throw new Error('useUserLocation must be used within a UserLocationProvider');
    }
    return context;
  };