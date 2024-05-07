"use client"
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'



const FloatingWhatsAppBtn = () => {
    const pathName = usePathname()
    // console.log(pathName)

    // to make sure if the page is the 'consulting' and if it is so return TRUE 
    const pageName = pathName === "/consulting" && true

    return (
        <div
            //to control the className conditinaly
            className={` ${clsx(pageName && ' hidden')} float animate-bounce animate-infinite fixed w-20 h-20
            md:bottom-16
            md:left-8 bottom-16 left-3`} >
            <Link href="/consulting" className='text-center'>
                <h3 className='text-warning'>إحصل على أستشارتك الان !</h3>
                <Image class="fa fa-whatsapp mt-4"
                    src={'/images/icons/whatsapp.png'}
                    alt='whatsApp icon'
                    width={60}
                    height={60}
                ></Image>
            </Link>
        </div >
    )
}

export default FloatingWhatsAppBtn
