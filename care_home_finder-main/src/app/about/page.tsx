import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Developer
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          I am a Front end student of AltSchool Africa, dedicated to delivering high-quality and innovative software solutions. With a team of experienced engineers, designers, and developers, we specialize in building scalable and efficient systems tailored to the unique needs of our clients. Our mission is to help businesses leverage technology to achieve their goals and drive success in an ever-changing digital landscape.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our expertise spans across various domains including web development, mobile app development, cloud computing, and AI-driven solutions. We pride ourselves on our commitment to excellence, customer satisfaction, and continuous improvement. At the core of our operations is a focus on collaboration, innovation, and integrity, which allows us to deliver exceptional results for our clients.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you&apos;re a startup looking to build your first product or an established enterprise in need of a technological overhaul, we&apos;re here to help. Let&apos;s work together to bring your vision to life.
        </p>
        <div className="flex justify-center mt-8">
          <a target='_blank' href="https://github.com/moscow138/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Github Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
