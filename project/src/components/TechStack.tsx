import { motion } from 'framer-motion';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTensorflow,
  SiScikitlearn,
  SiVercel,
  SiNetlify,
  SiRender,
} from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';

export default function TechStack() {
  const techCategories = [
    {
      category: 'Languages',
      technologies: [
        { name: 'C', icon: SiC, color: 'text-blue-500' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'SQL', icon: TbSql, color: 'text-orange-400' },
      ],
    },
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'React', icon: SiReact, color: 'text-cyan-400' },
        { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
      ],
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
        // { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
      ],
    },
    {
      category: 'Machine Learning',
      technologies: [
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
        { name: 'scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' },
        { name: 'spaCy', icon: FaBrain, color: 'text-cyan-400' },
        { name: 'Deep Learning', icon: FaBrain, color: 'text-purple-400' },
        // { name: 'Neural Networks', icon: FaBrain, color: 'text-pink-400' },
      ],
    },
    {
      category: 'Cloud & Deployment',
      technologies: [
        { name: 'Render', icon: SiRender, color: 'text-orange-400' },
        { name: 'Vercel', icon: SiVercel, color: 'text-white' },
        { name: 'Netlify', icon: SiNetlify, color: 'text-cyan-400' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl sm:text-6xl font-bold text-white mb-4 hover:underline underline-offset-4 decoration-purple-500/30 ">
            My Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + techIndex * 0.1,
                    }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <tech.icon
                      className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}