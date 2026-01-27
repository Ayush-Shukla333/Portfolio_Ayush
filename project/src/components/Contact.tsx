import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaFileAlt, FaHandshake } from 'react-icons/fa';

export default function Contact() {
  const contactButtons = [
    {
      label: 'Email Me',
      icon: HiMail,
      gradient: 'from-pink-500 to-orange-500',
      href: 'mailto:ayushshukla1126@gmail.com',
      external: false, // mailto doesn't need target="_blank"
    },
    {
      label: 'LinkedIn',
      icon: SiLinkedin,
      gradient: 'from-blue-500 to-blue-600',
      href: 'https://www.linkedin.com/in/ayush-shukla-68239931a/',
      external: true,
    },
    {
      label: 'GitHub',
      icon: SiGithub,
      gradient: 'from-gray-600 to-gray-700',
      href: 'https://github.com/Ayush-Shukla333',
      external: true,
    },
    {
      label: 'Download Resume',
      icon: FaFileAlt,
      gradient: 'from-green-500 to-emerald-600',
      href: '/resume.pdf',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-3 flex items-center justify-center gap-7">
            Get In Touch
            <FaHandshake className="text-purple-400 text-6xl mt-3" />
          </h2>
          <p className="text-gray-400 text-md sm:text-lg">
            Always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="space-y-4">
          {contactButtons.map((button, index) => (
            <motion.a
              key={button.label}
              href={button.href}
              target={button.external ? '_blank' : undefined}
              rel={button.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r ${button.gradient} text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <button.icon className="text-2xl relative z-10" />
              <span className="relative z-10">{button.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}