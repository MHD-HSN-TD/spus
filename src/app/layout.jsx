import { Alexandria, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'

import { Providers } from '@/components/Provider/Provider'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/navBar/NavBar'


// const ciaro = Cairo({ subsets: ['arabic'], weight: ['400'] })
const alexandria = Alexandria({ subsets: ['arabic'], weight: ['200'] })

export const metadata = {
  title: 'موقع الجامعات الخاصة',
  description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${alexandria.className} bg-default transition-all duration-600 p-0 m-0  `}>
        <Providers>
          <NavBar />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
