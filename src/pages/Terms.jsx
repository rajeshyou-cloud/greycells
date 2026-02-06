import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Terms(){
  return (
    <>
      <Helmet>
        <title>Terms of Service | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Terms of Service (Placeholder)</h2>
        <p className="text-gray-700">This is a placeholder terms of service. Replace with real content.</p>
      </div>
    </>
  );
}
