import React from "react";

const LoadingHardPage = ({ children, loading }) => {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="animate-load animate-ping duration-2000 infinite transform transition-transform w-16 h-16">
            <img
              src="/loading.svg"
              alt="loading"
              className="w-full h-full object-contain"
            />
            <h1 className="text-red-600 text-2xl text-center">Loading</h1>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default LoadingHardPage;
