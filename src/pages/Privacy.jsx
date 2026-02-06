import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Privacy(){
  return (
    <>
      <Helmet>
        <title>Privacy Policy | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy (Placeholder)</h2>
        <p className="text-gray-700">This is a placeholder privacy policy. Replace with real content.</p>
      </div>
    </>
  );
}
