'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Target, Users, Award, Globe, User, Calendar } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '3+', label: 'Years of Study' },
    { number: '10+', label: 'Projects Completed' },
    { number: '4', label: 'Certifications' },
    { number: '3', label: 'Languages Spoken' },
  ]

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: 'Carnegie Mellon Graduate',
      description: 'Completed the prestigious Graduate Bridge Program in Data Science',
    },
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Business IT Expert',
      description: 'Bachelor\'s degree in Business Information Technology from University of Rwanda',
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: 'Data Analysis',
      description: 'Proficient in Python, R, Power BI, Tableau, and SQL for data-driven insights',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From Rwanda to global impact through data science and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur-xl opacity-20"></div>
                <img
                  src="/profile.jpg"
                  alt="Olivier HABIMANA"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <User className="w-5 h-5 text-primary-500" />
                <span>Business IT Graduate & Data Analyst</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span>Tumba, Huye, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span>Carnegie Mellon Graduate Bridge Program Graduate</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Globe className="w-5 h-5 text-primary-500" />
                <span>Kinyarwanda, English, French</span>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hello! I'm Olivier HABIMANA, a detail-oriented and motivated Business Information Technology graduate 
                from the University of Rwanda. I successfully completed the Graduate Bridge Program at Carnegie 
                Mellon University, advancing my expertise in data science and analytics.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I thrive on the challenge of transforming complex datasets into clear, strategic narratives. 
                My expertise lies in applying a solid foundation in data analysis and information systems to 
                uncover crucial patterns and trajectories that inform better business decisions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently growing my skills from an analyst role into a data science capacity, I am actively 
                seeking my next opportunity to apply my skills and make a meaningful contribution to the African 
                community through the power of data.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className="flex justify-center">{highlight.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{highlight.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Education & Experience Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary-500" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Carnegie Mellon University</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Graduate Bridge Program - Data Science (Completed)</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2025</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">University of Rwanda</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor's in Business Information Technology</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2020 - 2024</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2 text-secondary-500" />
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'Power BI', 'Tableau', 'SQL', 'Network Admin', 'Data Analysis', 'Business Intelligence'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-white dark:bg-dark-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}