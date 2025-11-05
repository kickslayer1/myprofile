'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Olivier HABIMANA</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Business IT graduate and data science enthusiast from Rwanda, specializing in data analysis and network administration.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/kickslayer1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/habimana-olivier-40b6521a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:habimanaoliki@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm">
                About
              </Link>
              <Link href="#skills" className="block text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm">
                Skills
              </Link>
              <Link href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm">
                Projects
              </Link>
              <Link href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">Data Analysis</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Business Intelligence</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Network Administration</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">IT Consulting</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
            <div className="space-y-2">
              <Link 
                href="mailto:habimanaoliki@gmail.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm"
              >
                <Mail size={16} />
                <span>habimanaoliki@gmail.com</span>
              </Link>
              <Link 
                href="/Olivier_HABIMANA_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm"
              >
                <ExternalLink size={16} />
                <span>Download CV</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {currentYear} Olivier HABIMANA. Made with</span>
            <Heart size={14} className="text-red-500 mx-1" />
            <span>from Rwanda</span>
          </div>
          <div className="mt-4 md:mt-0 text-gray-600 dark:text-gray-400 text-sm">
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}