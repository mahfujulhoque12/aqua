const LoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
       <p className="text-base font-bold text-green-500"> please wait...</p>
        <div
          className="w-12 h-12 border-4 border-green-500 border-solid rounded-full animate-spin border-t-transparent"
          role="status"
          aria-label="Loading"
        ></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  