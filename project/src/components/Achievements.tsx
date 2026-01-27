import { motion } from 'framer-motion';
import {FaCode} from 'react-icons/fa';
export default function Achievements() {
  const achievements = [
    {
      title: 'Naukri Campus Aptitude Test',
      description:
        'Placed in the top 10 percentile with a rank of 40000 among 400,000+ participants nationwide.',
      emoji: '🏆',
    },
    {
      title: 'Software Development and Programming',
      description:
        'Achieved certification in C++ from Lets Upgrade and Software Development Fundamentals by LinkedIn and Microsoft.',
      emoji: <FaCode/>,
    },
    {
      title: 'Hackathons',
      description:
        'Got in the top 10% in AlgoUtsav (NIT Rourkela) and Flipkart GRID improving algorithm efficiency and problem-solving skills.',
      emoji: '🥇',
    },
    {
      title: 'Data Structures & Algorithms',
      description:
        'Solved a comprehensive set of 250+ problems on LeetCode and GeeksforGeeks to enhance coding proficiency.',
      emoji: '💻',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* <p className="text-pink-400 text-sm font-semibold tracking-wider uppercase mb-2">
            MILESTONES
          </p> */}
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 hover:underline underline-offset-4 decoration-pink-500/30 ">
            My Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            Recognitions and accomplishments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {achievement.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
