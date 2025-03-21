import { Alexandria } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Providers } from '@/components/Provider/Providers'
import { ProviderState } from '@/components/ProviderState/ProviderState'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/navBar/NavBar'
import FloatingWhatsAppBtn from '@/components/FloatingWhatsApp/FloatingWhatsAppBtn';


const alexandria = Alexandria({ subsets: ['arabic'], weight: ['100', '200'] })

export const metadata = {
  title: 'موقع الجامعات الخاصة',
  description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="google-site-verification" content="FAb62nnQ0FioK9c_xRCZl2Rmv8sjfdZAErl5Bt3Iqhs" />
        {/* set favIcone */}
        <link rel="icon" type="image/png" href="favicon.ico"></link>

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7798355403314252"
          crossorigin="anonymous"></script>
      </head>
      <body className={`${alexandria.className} bg-default transition-all duration-600 p-0 m-0 `} >


        <ProviderState>{/* global stateMangment start */}
          <Providers>{/* sweitch theme start */}

            <NavBar />
            {children}
            <Analytics />
            <FloatingWhatsAppBtn />
            <Footer />


          </Providers>{/* end of sweitch theme */}
        </ProviderState>{/* end of global stateMangment  */}


      </body>
    </html>
  )
}