import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import Markers from './Markers';


const GoogleMapView: React.FC = ({businessList}) => {
  const mapContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '50vh',
  };

  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

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
        console.error(error);
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

  // Callback to handle the map load event
  const onLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}>
        {userLocation ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={userLocation}
            zoom={12}
            onLoad={onLoad}
          >
            {/* Additional map features/components can go here */}
            {mapLoaded && (
              <MarkerF
                position={userLocation}
                icon={{
                  url: "/user-location.png", // Replace with the path to your custom icon
                  scaledSize: new window.google.maps.Size(50, 50), // Adjust the size of the icon
                }}
              />
            )}
             {businessList && businessList.length > 0 && businessList.map((item, index) =>
              index <= 7 && <Markers business={item} key={index} />
             )}

          </GoogleMap>
        ) : (
          <div>Loading map...</div> // Display a loading message while the location is being determined
        )}
      </LoadScript>
    </div>
  );
};

export default GoogleMapView;
