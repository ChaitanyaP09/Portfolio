import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>
        
        {/* Social Links Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/chaitanya-puranik-27994b356/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-gray-300 hover:text-[#0077b5] transition-colors duration-300 text-lg font-medium"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/ChaitanyaP09" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>

          {/* Gmail */}
          <a 
            href="mailto:chaitanyapuranik9@gmail.com" 
            className="flex items-center gap-2 text-gray-300 hover:text-[#EA4335] transition-colors duration-300 text-lg font-medium"
          >
            <SiGmail size={24} />
            <span>Gmail</span>
          </a>
        
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Chaitanya Puranik. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;