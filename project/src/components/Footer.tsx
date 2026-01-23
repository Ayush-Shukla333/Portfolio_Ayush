import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { icon: FaCode, label: 'Code', url: 'https://www.geeksforgeeks.org/profile/ayushshuekch' },
    { icon: SiGithub, label: 'GitHub', url: 'https://github.com/Ayush-Shukla333' },
    { icon: SiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayush-shukla-68239931a/' },
  ];

  return (
    <footer className="relative px-3 sm:px-6 lg:px-8 border-t border-white/10 bg-[#070B1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="min-h-[140px] flex flex-col justify-between py-4"
        >
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left */}
            <p className="text-gray-200 text-xl">
              Developed with <span className="text-red-500">❤️</span> by Ayush Shukla
            </p>

            {/* Right */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}

            </div>
          </div>

          {/* Bottom Copyright */}
          <p className="text-center text-md text-gray-500 mt-2">
            © {new Date().getFullYear()} Ayush Shukla. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
