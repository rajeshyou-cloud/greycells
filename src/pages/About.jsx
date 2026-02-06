import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About(){
  return (
    <>
      <Helmet>
        <title>About | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold">About (Placeholder)</h2>
      </div>
    </>
  );
}
