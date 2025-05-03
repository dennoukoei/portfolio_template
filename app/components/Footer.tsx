"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
          </div>
          
          <div className="mt-8 md:mt-0 text-center md:text-right">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} unknown. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}