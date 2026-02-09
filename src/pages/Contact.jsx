import ContactForm from '../components/ContactForm';

const Contact = () => (
  <main className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600">Tell us about your project and we’ll get back within 24 hours.</p>
    </div>
    <ContactForm />
  </main>
);

export default Contact;
