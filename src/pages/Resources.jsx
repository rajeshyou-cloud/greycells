import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Resources(){
  return (
    <>
      <Helmet>
        <title>Resources | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Resources (Placeholder)</h2>
        <p className="text-gray-700">Documentation and downloads will be available here.</p>
      </div>
    </>
  );
}
