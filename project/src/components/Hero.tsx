import { motion } from 'framer-motion';
// import { SiGithub, SiLinkedin } from 'react-icons/si';
// import { FaCode } from 'react-icons/fa';

export default function Hero() {
  // const socialLinks = [
  //   { icon: FaCode, label: 'Code', url: 'https://www.geeksforgeeks.org/profile/ayushshuekch' },
  //   { icon: SiGithub, label: 'GitHub', url: 'https://github.com/Ayush-Shukla333' },
  //   { icon: SiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayush-shukla-68239931a/' },
  // ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl w-full">
        {/* Name and Designation - Centered at Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ayush Shukla
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-300"
          >
            Full Stack Developer
          </motion.h2>
        </motion.div>

        {/* Photo and Description - Side by Side */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Photo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center md:justify-start relative md:left-6 lg:left-10"

          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-2xl opacity-50 animate-pulse" />

              {/* Image Circle */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img
                    src="/profile2.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 space-y-5"
            >
              <span className="block">
                I’m a Full Stack Developer and coder specializing in the <span className="text-gray-300 font-medium">
                  MERN stack (MongoDB, Express.js, React, Node.js)</span>, with a strong focus on building scalable, high-performance,
                and user-centric web applications. I enjoy translating real-world problems into clean, efficient,
                and maintainable code across both frontend and backend systems.
              </span>

              <span className="block">
                Alongside full-stack development, I’m actively learning and experimenting with
                <span className="text-gray-300 font-medium"> Artificial Intelligence and Machine Learning</span>,
                and my goal is to integrate AI/ML capabilities into full-stack products to create smarter,
                more impactful digital solutions
              </span>

              <span className="block">
                Driven by curiosity and continuous learning,
                I consistently explore new technologies, frameworks, and best practices to grow
                as a developer while building solutions that deliver real value.
              </span>
            </motion.p>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-fit"
            >
              View Resume
            </motion.a>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}