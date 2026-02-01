import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ navs }) => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Name */}
          <div className="text-2xl font-bold mb-4 md:mb-0">KimSann</div>

          {/* Quick Links */}
          <ul className="flex space-x-6 mb-4 md:mb-0">
            {navs.map((nav, index) => (
              <li key={index}>
                <a href={nav.href} className="hover:text-blue-400 transition">
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-6 text-sm">
          &copy; {new Date().getFullYear()} KimSann. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
