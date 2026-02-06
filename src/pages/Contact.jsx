import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm.jsx';

export default function Contact(){
  return (
    <>
      <Helmet>
        <title>Contact | GreyCells Technologies</title>
      </Helmet>
      <ContactForm />
    </>
  );
}
