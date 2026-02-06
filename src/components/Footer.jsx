import React from 'react';
import { company } from '../data/content.js';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="bg-primary text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-2">{company.name}</h3>
          <p>{company.address}</p>
          <p className="mt-2">{company.email} • {company.phone}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-400">© {company.year} {company.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
