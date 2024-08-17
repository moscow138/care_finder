import React from 'react';
import Link from 'next/link';
const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-lg font-bold">
          About CareFinder:
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
         Welcome to CareFinder, your go-to app for discovering healthcare facilities quickly and efficiently.
         Whether you are searching for a nearby hospital, clinic, pharmacy, or any other healthcare service, 
         CareFinder is designed to make your search seamless and straightforward.
        </p>
        <h1 className="text-lg font-bold">
          Our Mission:
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
         At CareFinder, our mission is to empower users with easy access to healthcare facilities, ensuring that finding the right care is as simple as possible. We understand that in times of need, every second counts
         and our app is built to provide you with the most accurate and up-to-date information.
        </p>
        <h1 className=" text-lg font-bold">
          How it works:
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
         CareFinder leverages the powerful Google Places API to provide you with comprehensive search results. By typing in your desired location or using your current location, the app instantly delivers a list of nearby healthcare facilities,
         complete with details such as addresses, contact information, operating hours, and user reviews.
        </p>
        <h1 className=" text-lg font-bold">
        Why Choose CareFinder?
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
         CareFinder stands out for its reliability, ease of use, and the accuracy of its results. By integrating with the Google Places API, we provide real-time data that is constantly updated,
         so you can trust that the information you receive is both current and relevant.
        </p>
        <h1 className=" text-lg font-bold">
        Our Commitment
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
        We are committed to continuously improving CareFinder by adding new features and expanding our database to include even more healthcare facilities. 
        Your health is our priority, and we strive to be the best resource for finding the care you need.
        </p>
        
        <div className="flex justify-center mt-8">
          <Link target='_blank' href="https://github.com/moscow138/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Github Page
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default About;
