import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const Hero = () => (
  <section className="bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">GreyCells Technologies</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          Product Development, Digital Marketing, and AI Automations
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We help teams build modern products, streamline operations, and grow with data-driven marketing.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#landing" className="bg-blue-600 text-white px-5 py-2.5 rounded hover:bg-blue-700">
            Book a Call
          </a>
          <Link to="/services" className="border border-gray-300 text-gray-800 px-5 py-2.5 rounded hover:border-gray-400">
            View Services
          </Link>
        </div>
      </div>
      <div className="max-w-sm mx-auto w-full">
        <Logo className="w-full h-auto" />
      </div>
    </div>
  </section>
);

export default Hero;
