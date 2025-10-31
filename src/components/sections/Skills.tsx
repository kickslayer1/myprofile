'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Data Analysis',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'R', level: 80, icon: '�' },
        { name: 'Power BI', level: 90, icon: '�' },
        { name: 'Tableau', level: 85, icon: '📉' },
        { name: 'SQL', level: 88, icon: '�️' },
        { name: 'Excel', level: 95, icon: '�' },
      ],
    },
    {
      title: 'Business IT',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Strategic Planning', level: 85, icon: '🎯' },
        { name: 'DMS Systems', level: 90, icon: '�' },
        { name: 'Inventory Control', level: 92, icon: '�' },
        { name: 'Business Analysis', level: 88, icon: '💼' },
        { name: 'Process Optimization', level: 85, icon: '⚡' },
        { name: 'Project Management', level: 80, icon: '📋' },
      ],
    },
    {
      title: 'Networking & IT',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'LAN Setup', level: 85, icon: '🌐' },
        { name: 'CCTV Systems', level: 80, icon: '�' },
        { name: 'PBX Telephony', level: 75, icon: '☎️' },
        { name: 'Access Control', level: 78, icon: '🔐' },
        { name: 'Network Security', level: 82, icon: '🔒' },
        { name: 'System Administration', level: 80, icon: '💻' },
      ],
    },
  ]

  const otherSkills = [
    'Data-driven Decision Making',
    'Statistical Analysis',
    'Business Intelligence',
    'Database Design',
    'Network Configuration',
    'Client-Server Architecture',
    'Inventory Management',
    'System Integration',
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                <span className="text-white font-bold text-lg">{category.title[0]}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-800 dark:hover:to-primary-700 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Currently Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm always expanding my skill set and staying up-to-date with the latest technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Machine Learning', 'Advanced Analytics', 'Cloud Computing', 'Big Data', 'AI/ML', 'Data Engineering'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}