import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'HireHub',
      description:
        'A full-stack MERN based job search portal with search, filters, recruiter dashboard and AI-powered resume analysis & job match scoring.',
      image: '/Hirehub.png',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'ClerkJWT', 'Sentry', 'NLP', 'scikit-learn'],
      github: 'https://github.com/Ayush-Shukla333/HireHub--Job_Findease.git',
      demo: 'https://hirehub-job-findease.vercel.app/',
    },
    {
      title: 'iTask - Todo App',
      description:
        'A responsive React Todo app with local storage access, real-time editing, and smooth UI powered by TailwindCSS.',
      image: '/todo-ui.png',
      tags: ['React.js', 'JavaScript', 'TailwindCSS'],
      github: 'https://github.com/Ayush-Shukla333/iTask-Todo-App-.git',
      // demo: '#',
    },
    {
      title: 'Shield Nature - Sustainable E-Cart',
      description:
        'A Sustainable (frontend focused) e-commerce platform for selling products that are environmentally friendly and promote sustainable practices.',
      image: '/E Cart.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://pratyaksh15.github.io/ShieldNature/',
      demo: 'https://pratyaksh15.github.io/ShieldNature/',
    },
    {
      title: 'QuickStore - Product Listing',
      description: 'Responsive product listing app built with React (Vite) using Fake Store API. Features search, category filtering, and product details with React Router.',
      image: '/quickstore.png',
      tags: ['ReactJS', 'TailwindCSS', 'Axios', 'JavaScript'],
      github: 'https://github.com/Ayush-Shukla333/QuickStore-product-listing.git',
      demo: 'https://quickstore-green.vercel.app/',
    },
    {
      title: 'CodeMeet - Technical Interview Platform',
      description: 'A platform for conducting technical interviews with real-time code editing and collaboration features including video conferencing and chat.',
      image: '/codemeet.png',
      tags: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Stream.io', 'Piston API', 'TailwindCSS'],
      github: 'https://github.com/Ayush-Shukla333/CodeMeet-Technical-Interview-Platform.git',
      demo: 'https://codemeet-technical-interview-platform.onrender.com/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            {/* <span className="text-sm uppercase tracking-widest text-purple-400 font-bold">
              MY WORK
            </span> */}
          </motion.div>
          <h2 className="
  font-bold text-white mb-4
  text-4xl sm:text-6xl
  whitespace-nowrap
  hover:underline underline-offset-4 decoration-purple-500/30
">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills and creativity
          </p>
        </motion.div>

        {/* 3 Cards Per Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex flex-col"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

              {/* Card Content */}
              <div className="relative bg-[#0a0e27] backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
                {/* Image Section - Reduced Height */}
                <div className="relative overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/50 to-transparent" />
                </div>

                {/* Content Section - Auto Height */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Full Description - No line clamp */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags - Auto height, no scroll */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons - Compact - Push to bottom */}
                  <div className="flex gap-2 mt-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-purple-500/50 text-sm flex-1"
                      >
                        <SiGithub className="text-base" />
                        <span className="font-medium">Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm flex-1"
                      >
                        <FiExternalLink className="text-base" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}