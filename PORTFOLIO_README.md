# Modern Portfolio Website 🚀

A stunning, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations, dark mode, responsive design, and exceptional performance.

![Portfolio Preview](./public/og-image.jpg)

## ✨ Features

- **Modern Design**: Clean, professional design with beautiful animations
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Responsive**: Perfect on all devices - mobile, tablet, and desktop
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Built with accessibility best practices
- **Type Safe**: Written in TypeScript for better development experience
- **Interactive**: Smooth animations with Framer Motion
- **Contact Form**: Working contact form with validation
- **GitHub Integration**: Live GitHub stats and repository data

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kickslayer1/myprofile.git
   cd myprofile
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
myprofile/
├── public/                 # Static assets
│   ├── images/            # Images and media
│   └── resume.pdf         # Your resume
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── effects/       # Visual effects
│   │   ├── layout/        # Layout components
│   │   ├── providers/     # Context providers
│   │   └── sections/      # Page sections
│   ├── lib/               # Utility functions
│   ├── styles/            # Global styles
│   └── types/             # TypeScript types
├── .github/               # GitHub workflows
└── docs/                  # Documentation
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Personal Details** (`src/components/sections/Hero.tsx`)
   ```tsx
   // Update name, title, and description
   const name = "Your Name"
   const title = "Your Title"
   ```

2. **Contact Information** (`src/components/sections/Contact.tsx`)
   ```tsx
   // Update email, phone, location
   const contactInfo = {
     email: "your.email@example.com",
     phone: "+1 (555) 123-4567",
     location: "Your City, Country"
   }
   ```

3. **Social Links** (Multiple files)
   ```tsx
   // Update GitHub, LinkedIn, Twitter handles
   const socialLinks = {
     github: "https://github.com/yourusername",
     linkedin: "https://linkedin.com/in/yourprofile",
     twitter: "https://twitter.com/yourhandle"
   }
   ```

### Content

1. **About Section** (`src/components/sections/About.tsx`)
   - Update bio and personal story
   - Replace placeholder image
   - Update stats and achievements

2. **Skills Section** (`src/components/sections/Skills.tsx`)
   - Add/remove technologies
   - Update skill levels
   - Customize categories

3. **Projects Section** (`src/components/sections/Projects.tsx`)
   - Add your projects
   - Update descriptions and technologies
   - Add project images and links

4. **Experience Section** (`src/components/sections/Experience.tsx`)
   - Update work experience
   - Add education details
   - Include certifications

### Styling

1. **Colors** (`tailwind.config.js`)
   ```js
   // Customize your color palette
   colors: {
     primary: { /* your primary colors */ },
     secondary: { /* your secondary colors */ },
   }
   ```

2. **Fonts** (`src/styles/globals.css`)
   ```css
   /* Update font imports and families */
   @import url('https://fonts.googleapis.com/css2?family=YourFont');
   ```

### Images

Replace placeholder images in the `public/` directory:

- `placeholder-avatar.jpg` → Your profile photo
- `placeholder-about.jpg` → About section image  
- `project-*.jpg` → Your project screenshots
- `og-image.jpg` → Social media preview image

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure domain (optional)
   - Deploy!

### Other Platforms

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` branch
- **Railway**: Connect GitHub and deploy

## 📊 Performance

This portfolio is optimized for:

- **Speed**: Lighthouse score 95+
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant
- **Core Web Vitals**: Excellent scores

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Deployment
npm run export       # Export static site
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Inspiration

Inspired by modern portfolio designs and built to showcase the latest web technologies.

## 📞 Support

If you have any questions or need help customizing the portfolio:

- 📧 Email: your.email@example.com
- 💬 GitHub Issues: [Create an issue](https://github.com/kickslayer1/myprofile/issues)
- 🌟 Give it a star if you like it!

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/kickslayer1">Your Name</a></p>
  <p>
    <a href="https://nextjs.org">
      <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    </a>
    <a href="https://www.typescriptlang.org">
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://tailwindcss.com">
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    </a>
  </p>
</div>