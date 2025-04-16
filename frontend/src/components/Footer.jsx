import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2 text-white-300">MySite</h2>
          <p className="text-white-100 text-sm max-w-xs">
            Bringing quality and style together.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-white-300">
            <a href="#"><FaFacebookF className="hover:text-black text-xl" /></a>
            <a href="#"><FaInstagram className="hover:text-black text-xl" /></a>
            <a href="#"><FaTwitter className="hover:text-black text-xl" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-black text-xl" /></a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row gap-6 text-center">
          <div>
            <h3 className="font-semibold mb-2 text-white-200">Company</h3>
            <ul className="space-y-1 text-sm text-white-100">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-white-200">Support</h3>
            <ul className="space-y-1 text-sm text-white-100">
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-white-200">Legal</h3>
            <ul className="space-y-1 text-sm text-white-100">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-white-100 border-t border-black-800 pt-4">
        © {new Date().getFullYear()} EasyHomes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
