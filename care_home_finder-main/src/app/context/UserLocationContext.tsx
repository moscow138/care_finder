"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the shape of the context's value
interface UserLocationContextType {
  userLocation: { lat: number; lng: number } | null;
  error: string | null;
}

// Create the context with a default value of null for the location and error
const UserLocationContext = createContext<UserLocationContextType | undefined>(undefined);

// Create a provider component
export const UserLocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to get the user's current location
    function getUserLocation(): Promise<{ lat: number; lng: number }> {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              resolve({ lat, lng });
            },
            (error) => {
              reject(`Error getting location: ${error.message}`);
            }
          );
        } else {
          reject('Geolocation is not supported by this browser.');
        }
      });
    }

    // Fetch the user's location and update the state
    getUserLocation()
      .then((location) => {
        setUserLocation(location);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <UserLocationContext.Provider value={{ userLocation, error }}>
      {children}
    </UserLocationContext.Provider>
  );
};

// Custom hook to use the UserLocationContext
export const useUserLocation = (): UserLocationContextType => {
  const context = useContext(UserLocationContext);
  if (!context) {
    throw new Error('useUserLocation must be used within a UserLocationProvider');
  }
  return context;
};
