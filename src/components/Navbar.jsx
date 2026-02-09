import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center flex-wrap gap-3">
    <div className="font-bold text-xl text-blue-600">GreyCells</div>
    <div className="flex flex-wrap items-center gap-4 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
      <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/industries" className="text-gray-700 hover:text-blue-600">Industries</Link>
      <Link to="/casestudies" className="text-gray-700 hover:text-blue-600">Case Studies</Link>
      <Link to="/process" className="text-gray-700 hover:text-blue-600">Process</Link>

      <div className="relative group">
        <button className="text-gray-700 hover:text-blue-600 inline-flex items-center gap-1">
          Services
          <span className="text-xs">▼</span>
        </button>
        <div className="absolute left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition">
          <div className="py-2">
            <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">All Services</Link>
          </div>
        </div>
      </div>

      <div className="relative group">
        <button className="text-gray-700 hover:text-blue-600 inline-flex items-center gap-1">
          Company
          <span className="text-xs">▼</span>
        </button>
        <div className="absolute left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition">
          <div className="py-2">
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">About</Link>
            <Link to="/careers" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Careers</Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      </div>

      <div className="relative group">
        <button className="text-gray-700 hover:text-blue-600 inline-flex items-center gap-1">
          Resources
          <span className="text-xs">▼</span>
        </button>
        <div className="absolute left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition">
          <div className="py-2">
            <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Blog</Link>
            <Link to="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Resources</Link>
            <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">FAQ</Link>
          </div>
        </div>
      </div>

      <div className="relative group">
        <button className="text-gray-700 hover:text-blue-600 inline-flex items-center gap-1">
          Legal
          <span className="text-xs">▼</span>
        </button>
        <div className="absolute left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition">
          <div className="py-2">
            <Link to="/privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Privacy</Link>
            <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
