import React from "react";

const ScrollableApp = () => {
  return (
    <div className="max-w-xs mx-auto flex flex-col justify-center h-full overflow-hidden rounded-lg shadow-lg bg-white p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Gallery</h2>
      <div className="flex overflow-x-auto mb-4">
        {[...Array(5)].map((_, n) => (
          <div
            key={n}
            className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 mx-2"
          ></div>
        ))}
      </div>
      <div className="h-full mt-3 overflow-y-scroll no-scrollbar">
        {[...Array(4)].map((_, n) => (
          <div key={n} className="h-40 bg-gray-200 mb-4"></div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableApp;
