import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Olivier HABIMANA - Business IT & Data Science',
  description: 'Business Information Technology graduate from Rwanda, specializing in data analysis and network administration. Currently pursuing Data Science at Carnegie Mellon University.',
  keywords: ['data science', 'business IT', 'data analysis', 'rwanda', 'carnegie mellon', 'power bi', 'python'],
  authors: [{ name: 'Olivier HABIMANA' }],
  creator: 'Olivier HABIMANA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://olivierhabimana.vercel.app',
    title: 'Olivier HABIMANA - Business IT & Data Science',
    description: 'Business Information Technology graduate specializing in data analysis and network administration.',
    siteName: 'Olivier HABIMANA Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Olivier HABIMANA - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olivier HABIMANA - Business IT & Data Science',
    description: 'Business Information Technology graduate specializing in data analysis and network administration.',
    images: ['/og-image.jpg'],
    creator: '@olivier_habimana',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}