import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/content.js';

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-light">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-lg">GreyCells</div>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({isActive}) => isActive ? 'text-secondary font-semibold' : 'text-white hover:text-secondary'}
                end
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(prev => !prev)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-primary/95 border-t border-white/10">
          <ul className="flex flex-col gap-3 px-4 py-4">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({isActive}) => isActive ? 'text-secondary font-semibold block' : 'text-white hover:text-secondary block'}
                  end
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
