import ContactForm from '../components/ContactForm';

export const LandingSection = () => (
  <section id="landing" className="py-6 px-4 bg-gray-50 scroll-mt-24 min-h-screen">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Welcome to GreyCells Technologies</h1>
      <p className="mb-4 text-lg">Empowering businesses with digital solutions.</p>
    </div>
    <div className="mt-6">
      <ContactForm compact />
    </div>
  </section>
);

const Landing = () => (
  <div className="min-h-screen bg-gray-50">
    <LandingSection />
  </div>
);

export default Landing;
