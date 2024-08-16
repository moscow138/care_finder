"use client";

import ChooseCategoryComponent from "@/components/home/CategoryList";
import RangeSelect from "@/components/home/RangeSelect";
import SelectRating from "@/components/home/SelectRating";
import GoogleMapView from "@/components/home/GoogleMapView";
import GlobalApi from "../../shared/GlobalApi";
import { useEffect, useState } from "react";
import { useUserLocation } from "./context/UserLocationContext";
import BusinessList from "@/components/home/BusinessList";
import SkeltonLoading from "@/components/home/SkeltonLoading";

// Define types for business data
interface Business {
  // Replace 'any' with actual properties of a business if known
  [key: string]: any;
}

const Home: React.FC = () => {
  const [category, setCategory] = useState<string | undefined>();
  const [radius, setRadius] = useState<number>(500);
  const [businessList, setBusinessList] = useState<Business[] | undefined>();
  const { userLocation, error } = useUserLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = async () => {
    if (category && userLocation) {
      setLoading(true);
      try {
        const resp = await GlobalApi.getGooglePlace(
          category,
          radius,
          userLocation.lat,
          userLocation.lng
        );
        setBusinessList(resp.data.product.results);
      } catch (err) {
        console.error("Failed to fetch Google Places:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="p-3 mt-9 text-center">
        <ChooseCategoryComponent
          onCategoryChange={(value: string) => setCategory(value)}
        />
        <RangeSelect onRadiusChange={(value: number) => setRadius(value)} />
        <SelectRating />
      </div>
      <div className="col-span-3 mt-14">
        <GoogleMapView businessList={businessList} />
        <div
          className="md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-20"
        >
          {!loading ? (
            <BusinessList businessList={businessList} />
          ) : (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SkeltonLoading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
