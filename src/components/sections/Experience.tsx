'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react'

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Graduate Bridge Program Graduate',
      company: 'Carnegie Mellon University',
      location: 'Kigali, Rwanda',
      period: 'February 2025 - April 2025',
      type: 'Graduate Program',
      description: [
        'Completed advanced preparation for Master\'s degree in Data Science',
        'Developed expertise in advanced analytics and machine learning',
        'Collaborated on international projects and research initiatives',
        'Built foundation for data-driven solutions in Africa and globally',
      ],
      technologies: ['Python', 'R', 'Machine Learning', 'Statistics', 'Data Analysis'],
      achievements: [
        'Successfully completed prestigious Carnegie Mellon program',
        'Specialized in African data science applications',
        'Prepared for advanced graduate studies and career advancement',
      ],
    },
    {
      title: 'Network Administrator Intern',
      company: 'Saltel Training and Innovation Center',
      location: 'Kigali, Rwanda',
      period: 'April 2024 - June 2024',
      type: 'Internship',
      description: [
        'Learned and worked on Local Area Network (LAN) deployment and optimization',
        'Configured Closed-Circuit Television (CCTV) system integration',
        'Installed and fine-tuned Private Branch Exchange (PBX) telephony systems',
        'Implemented access control systems and established access points',
      ],
      technologies: ['LAN', 'CCTV', 'PBX', 'Access Control', 'Networking', 'System Administration'],
      achievements: [
        'Gained practical networking experience',
        'Mastered client-server architecture interactions',
        'Completed professional networking certification',
      ],
    },
    {
      title: 'Data Clerk',
      company: 'Duhozanye LTD',
      location: 'Gisagara, Rwanda',
      period: 'March 2021 - July 2023',
      type: 'Full-time',
      description: [
        'Developed the company\'s inventory control system',
        'Maintained accuracy in stock levels and ensured timely restocking',
        'Utilized Distribution Management System (DMS) for comprehensive operations',
        'Coordinated with logistics for seamless delivery optimization',
      ],
      technologies: ['DMS', 'Excel', 'Inventory Management', 'Data Analysis', 'Logistics'],
      achievements: [
        'Built complete inventory control system',
        'Enhanced data accuracy and operational productivity',
        'Maintained strong customer relations through accurate order fulfillment',
      ],
    },
    {
      title: 'Business IT Student',
      company: 'University of Rwanda',
      location: 'Huye, Rwanda',
      period: 'June 2021 - July 2024',
      type: 'Bachelor\'s Degree',
      description: [
        'Studied Business Information Technology with focus on data systems',
        'Completed projects in database management and business analysis',
        'Gained foundation in programming languages and statistical analysis',
        'Developed skills in strategic planning and business development',
      ],
      technologies: ['Python', 'R', 'SQL', 'Business Analysis', 'Database Design'],
      achievements: [
        'Graduated with BSc in Business Information Technology',
        'Strong foundation in data analysis and business systems',
        'Prepared for advanced studies in data science',
      ],
    },
  ]

  const education = [
    {
      degree: 'Graduate Bridge Program',
      school: 'Carnegie Mellon University',
      location: 'Kigali, Rwanda',
      period: 'February 2025 - April 2025',
      description: 'Successfully completed advanced preparation program for Master\'s degree in Data Science, focusing on data-driven solutions for Africa and global applications.',
      achievements: [
        'Successfully completed prestigious international program',
        'Specialized in African data science applications',
        'Advanced preparation for graduate studies completed',
      ],
    },
    {
      degree: 'Bachelor of Science in Business Information Technology',
      school: 'University of Rwanda',
      location: 'Huye, Rwanda',
      period: 'June 2021 - July 2024',
      description: 'Comprehensive program combining business management with information technology, focusing on data analysis and business systems.',
      achievements: [
        'Strong foundation in data analysis',
        'Expertise in business information systems',
        'Programming and database management skills',
      ],
    },
    {
      degree: 'Advanced Level Certificate (BCG)',
      school: 'Group Scolaire Officiel de Butare',
      location: 'Huye, Rwanda',
      period: 'January 2017 - November 2019',
      description: 'Advanced secondary education with focus on sciences, preparing for higher education in technology and business.',
      achievements: [
        'Strong academic foundation',
        'Science and mathematics focus',
        'Prepared for university studies',
      ],
    },
  ]

  const certifications = [
    'Professional Development Skills for Digital Age - ALX Rwanda',
    'Professional Networking and Cabling Program - Saltel Training',
    'Network Administrator Certification',
    'Business Information Technology - University of Rwanda',
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional experience, education, and continuous learning
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <Briefcase className="w-6 h-6 text-primary-500 mr-3" />
            Professional Experience
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                        <p className="text-primary-500 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                        <Award className="w-4 h-4 text-yellow-500 mr-2" />
                        Key Achievements
                      </h5>
                      {exp.achievements.map((achievement, i) => (
                        <p key={i} className="text-xs text-gray-600 dark:text-gray-400 ml-6">
                          • {achievement}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                  <p className="text-primary-500 font-semibold mb-1">{edu.school}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{edu.description}</p>
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <p key={i} className="text-xs text-gray-600 dark:text-gray-400">
                        • {achievement}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                  className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl p-4 border border-primary-200 dark:border-primary-800"
                >
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-primary-500 mr-3" />
                    <span className="font-medium text-gray-900 dark:text-white">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white"
            >
              <h4 className="text-lg font-bold mb-2">Continuous Learning</h4>
              <p className="text-sm opacity-90">
                I believe in lifelong learning and staying updated with the latest technologies. 
                Currently pursuing advanced certifications in cloud computing and AI/ML.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}