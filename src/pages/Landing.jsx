import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm.jsx';

export default function Landing(){
  return (
    <>
      <Helmet>
        <title>Get a Free Consultation | GreyCells Technologies</title>
        <meta name="description" content="Limited-time offer: Free consultation on your AI automation & product development project." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-primary to-primary/90 py-12">
        <div className="max-w-4xl mx-auto text-center px-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Project Off to a Flying Start
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Free consultation with our experts. No obligations, just insights tailored to your business.
          </p>
          <div className="bg-secondary/20 border border-secondary rounded-lg p-4 inline-block">
            <p className="text-secondary font-semibold">✓ 30-minute expert consultation</p>
          </div>
        </div>
        
        <ContactForm />
      </div>
    </>
  );
}
