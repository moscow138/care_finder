import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-white-500 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">JOHN OGHENEOCHUKO</h2>
            <p className="text-sm">
              © 2024 All rights reserved.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <ul className="flex justify-center space-x-6">
              <li>
                <a href="/" className="text-gray-500 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-500 hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h10.46v-8.34H9.41v-3.28h2.82v-2.51c0-2.81 1.72-4.35 4.22-4.35 1.2 0 2.23.09 2.53.13v2.93h-1.74c-1.37 0-1.63.65-1.63 1.6v2.1h3.26l-.43 3.28h-2.83V24h5.55A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z" />
                </svg>
              </a>
              <a target=" _blank" href="https://github.com/moscow138" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.56 9.56 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.56 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A9.998 9.998 0 0022 12.04c0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.92 4.92 0 002.15-2.71c-.95.57-2 .97-3.12 1.2a4.92 4.92 0 00-8.39 4.48c-4.09-.2-7.72-2.16-10.15-5.14a4.82 4.82 0 00-.66 2.48 4.92 4.92 0 002.19 4.1 4.92 4.92 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.82 4.92 4.92 0 01-2.22.08 4.92 4.92 0 004.6 3.42A9.86 9.86 0 010 21.54a13.92 13.92 0 007.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.04 10.04 0 0024 4.56z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
