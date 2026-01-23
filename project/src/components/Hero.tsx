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
          className="text-center mb-12 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Inter', 'Poppins', 'Outfit', sans-serif" }}
          >
            <span className="block sm:inline">Hi, I'm </span>
            <span className="block sm:inline bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ayush Shukla
            </span>
          </motion.h1>

          {/* Redesigned Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {/* Decorative line */}
            <div className="hidden sm:block w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-purple-500"></div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium tracking-wide inline-flex items-center gap-2">
              <span className="text-purple-400">{'<'}</span>
              Full Stack Developer
              <span className="text-purple-400">{'/>'}</span>
            </h2>
            
            {/* Decorative line */}
            <div className="hidden sm:block w-12 h-px bg-gradient-to-l from-transparent via-purple-500 to-purple-500"></div>
          </motion.div>

          {/* Optional: Add tech stack tags below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 justify-center mt-4"
          >
            <span className="px-3 py-1 text-xs sm:text-sm bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
              MERN Stack
            </span>
            <span className="px-3 py-1 text-xs sm:text-sm bg-pink-500/10 text-pink-300 rounded-full border border-pink-500/20">
              AI/ML Enthusiast
            </span>
            <span className="px-3 py-1 text-xs sm:text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
              Problem Solver
            </span>
          </motion.div>
        </motion.div>

        {/* Photo and Description - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Profile Photo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center md:justify-start md:relative md:left-6 lg:left-10"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-2xl opacity-50 animate-pulse" />

              {/* Image Circle - Responsive sizes */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
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
            className="flex flex-col justify-center px-4 md:px-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 space-y-4 sm:space-y-5"
            >
              <p className="block">
                I'm a Full Stack Developer and coder specializing in the{' '}
                <span className="text-gray-300 font-medium">
                  MERN stack (MongoDB, Express.js, React, Node.js)
                </span>
                , with a strong focus on building scalable, high-performance,
                and user-centric web applications. I enjoy translating real-world problems into clean, efficient,
                and maintainable code across both frontend and backend systems.
              </p>

              <p className="block">
                Alongside full-stack development, I'm actively learning and experimenting with{' '}
                <span className="text-gray-300 font-medium">Artificial Intelligence and Machine Learning</span>,
                and my goal is to integrate AI/ML capabilities into full-stack products to create smarter,
                more impactful digital solutions.
              </p>

              <p className="block">
                Driven by curiosity and continuous learning,
                I consistently explore new technologies, frameworks, and best practices to grow
                as a developer while building solutions that deliver real value.
              </p>
            </motion.div>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-fit text-center"
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}