'use client'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { ParticleBackground } from '@/components/effects/ParticleBackground'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Contact Section */}
      <Contact />
    </div>
  )
}