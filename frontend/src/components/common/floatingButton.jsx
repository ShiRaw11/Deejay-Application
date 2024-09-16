import React from 'react';

const FloatingButton = () => {
  return (
    <button className="fixed bottom-4 right-4 bg-blue text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-red transition duration-300 ease-in-out flex items-center justify-center h-[50px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9l-4.2 1.1 1.1-4.2a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 0110.5-7.6 8.38 8.38 0 013.8.9l.9.9M17 9l2 2-2 2M13 9l2 2-2 2M9 9l2 2-2 2"
        />
      </svg>
      Book DJ
    </button>
  );
};

export default FloatingButton;
