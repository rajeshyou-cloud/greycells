import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GreyCells Technologies | Coming Soon</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">GreyCells Technologies</h1>
          <p className="text-xl text-gray-300">Coming Soon</p>
        </div>
      </div>
    </>
  );
}
