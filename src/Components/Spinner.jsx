import React, { useState, useEffect } from 'react';

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-80 transition-opacity ${showSpinner ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="border-4 border-solid border-blue-500 border-t-4 border-b-0 border-r-0 border-l-0 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Spinner;
