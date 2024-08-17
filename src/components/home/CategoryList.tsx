import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  categoryname: string;
  categoryimage: string;
  createdAt: string;  // Use specific types instead of 'any'
  updateAt: string;   // Use specific types instead of 'any'
}

interface ApiResponse {
  data: User[];
}

interface ChooseCategoryComponentProps {
  onCategoryChange: (categoryName: string) => void; // Define the prop type for onCategoryChange
}

const ChooseCategoryComponent: React.FC<ChooseCategoryComponentProps> = ({ onCategoryChange }) => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const result: ApiResponse = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Data in state:", data); // Check if state updates correctly
  }, [data]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h4 className='mb-3'>Filter category</h4>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((category, index) => (
          <div
            className={`flex flex-col justify-center items-center text-xs bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer border-[1px] ${selectedCategory === index ? 'grayscale-0 border-blue-400' : ''}`}
            key={category.id}
            onClick={() => { 
              setSelectedCategory(index); 
              onCategoryChange(category.categoryname);
            }}
          >
            <Image 
              src='/medical.webp' // Use category image if available
              alt={category.categoryname}
              width={40}
              height={40}
            />
            {category.categoryname || 'Nothing to Display'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCategoryComponent;
