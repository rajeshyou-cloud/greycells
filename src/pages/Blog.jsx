import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Blog(){
  return (
    <>
      <Helmet>
        <title>Blog | GreyCells Technologies</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold">Blog (Placeholder)</h2>
      </div>
    </>
  );
}
