import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NoPageFound = () => {
  return (
    <div>
      <div className="p-4 text-center">
        <DotLottieReact
          src="https://lottie.host/4ba70870-987a-429e-973c-7d69bbcb0b28/PUwWHVaaDc.lottie"
          loop
          autoplay
          style={{ width: '400px', height: '400px', margin: '0 auto' }}
        />
        <h2 className="text-3xl font-bold hover:text-red-500">404 - Page Not Found</h2>
        <p className="mt-2 text-xl">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NoPageFound;
