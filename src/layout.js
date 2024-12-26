
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/client-layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CRIC - Contacto',
  description: 'Contacta con el Club Robótica e Informática Churriana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout/>
        {children}
      </body>
    </html>
  )
}