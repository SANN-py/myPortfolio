import { useState } from "react";

const Navbar = ({ navs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav
        className="flex justify-between items-center p-6  top-0 z-50 
                  bg-blue-900 backdrop-blur-xl border-b border-white/10 shadow-2xl fixed w-full"
      >
        {/* Logo with a subtle glow */}
        <div className="text-xl font-bold text-white tracking-tight">
          My<span className="text-blue-400">Portfolio</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-slate-300 font-medium">
          {navs.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.href}
                className="hover:text-white transition-colors duration-300"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Call to Action Button in Nav */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu icon (Hamberger) placeholder */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </nav>
      <div
        className={`md:hidden fixed top-18 left-0 w-full bg-blue-900 text-white overflow-hidden transition-[max-height] duration-300 z-40 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-6 space-y-4">
          {navs.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
