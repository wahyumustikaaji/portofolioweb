import React from 'react';

const BackgroundLines = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 flex justify-between">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={`vline-${index}`} className="h-full w-px bg-gray-100 lg:bg-gray-200"></div>
      ))}
    </div>
  );
};

export default BackgroundLines;