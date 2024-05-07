"use client"
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'



const FloatingWhatsAppBtn = () => {
    const pathName = usePathname()
    // console.log(pathName)
    const pageName = pathName === "/consulting" && true
    return (
        <div
            className={` ${clsx(pageName && ' hidden')} float animate-bounce animate-infinite fixed w-20 h-w-20 md:bottom-16
            md:right-8 bottom-10 right-6`} >
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
