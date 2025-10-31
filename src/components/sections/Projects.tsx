'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play } from 'lucide-react'
import Link from 'next/link'

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'Inventory Control System',
      description: 'A comprehensive inventory management system built for Duhozanye LTD to track stock levels, manage orders, and generate reports. Features real-time updates and user authentication.',
      image: '/project-1.jpg',
      technologies: ['Python', 'SQL', 'Power BI', 'Business Intelligence'],
      liveUrl: '#',
      githubUrl: 'https://github.com/olivierhabimana/inventory-system',
      category: 'Data Analysis',
      featured: true,
    },
    {
      id: 2,
      title: 'Network Infrastructure Setup',
      description: 'Complete network infrastructure design and implementation at Saltel Training Center including LAN setup, CCTV systems, and PBX telephony configuration.',
      image: '/project-2.jpg',
      technologies: ['Network Administration', 'CCTV Systems', 'PBX Telephony', 'LAN Setup'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Network Admin',
      featured: true,
    },
    {
      id: 3,
      title: 'Data Analysis Dashboard',
      description: 'Interactive business intelligence dashboard created using Power BI and Tableau to visualize key performance indicators and business metrics.',
      image: '/project-3.jpg',
      technologies: ['Power BI', 'Tableau', 'Data Visualization', 'Business Intelligence'],
      liveUrl: '#',
      githubUrl: 'https://github.com/olivierhabimana/bi-dashboard',
      category: 'Data Analysis',
      featured: false,
    },
    {
      id: 4,
      title: 'Python Data Processing Scripts',
      description: 'Collection of Python scripts for data cleaning, processing, and analysis. Includes automation tools for repetitive data tasks and statistical analysis.',
      image: '/project-4.jpg',
      technologies: ['Python', 'Pandas', 'NumPy', 'Data Processing'],
      liveUrl: '#',
      githubUrl: 'https://github.com/olivierhabimana/python-data-scripts',
      category: 'Data Analysis',
      featured: false,
    },
    {
      id: 5,
      title: 'Business IT Portfolio',
      description: 'Modern, responsive portfolio website showcasing my journey from Business IT to Data Science. Built with Next.js and featuring dark mode and smooth animations.',
      image: '/project-5.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://olivier-habimana.vercel.app',
      githubUrl: 'https://github.com/olivierhabimana/portfolio',
      category: 'Web Development',
      featured: false,
    },
    {
      id: 6,
      title: 'R Statistical Analysis',
      description: 'Statistical analysis projects using R for data exploration, hypothesis testing, and predictive modeling. Includes various datasets and research findings.',
      image: '/project-6.jpg',
      technologies: ['R', 'Statistical Analysis', 'Data Modeling', 'Research'],
      liveUrl: '#',
      githubUrl: 'https://github.com/olivierhabimana/r-analysis',
      category: 'Data Analysis',
      featured: false,
    },
  ]

  const categories = ['All', 'Data Analysis', 'Network Admin', 'Web Development']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my data analysis, network administration, and business intelligence projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-200 dark:bg-gray-800 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              className={`group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-200 transform hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Github size={20} />
                  </Link>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-primary-500 bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
                  >
                    <Play size={16} />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <Link
            href="https://github.com/olivierhabimana"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}