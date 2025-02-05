import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nikhil Yarram - Software Engineer',
  description: 'Software Engineer specializing in full-stack development, cloud architecture, and identity management solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 