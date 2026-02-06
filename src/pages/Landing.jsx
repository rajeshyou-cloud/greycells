import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Landing(){
  return (
    <>
      <Helmet>
        <title>Landing | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold">Landing Page (Placeholder)</h2>
      </div>
    </>
  );
}
