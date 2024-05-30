"use client"
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'



const FloatingWhatsAppBtn = () => {
    const pathName = usePathname()
    // console.log(pathName)

    // to make sure if the page is the 'consulting' and if it is so return TRUE 
    const isConsulte = pathName === "/consulting" && true

    return (
        <div
            //to control the className conditinaly
            className={` ${clsx(isConsulte && ' hidden')} float
            animate-pulse duration-[2000ms] ease-in     
            fixed bg-warning rounded
            md:w-20  md:bottom-10 md:left-8
            bottom-10 left-3 w-16
            `} >
            <Link href="/consulting" className='text-center'>
                <h3 className='text-black font-semibold text-sm lg:text-lg p-2'>إحصل على أستشارتك الان !</h3>
                {/* <Image class=" m-2"
                    src={'/images/icons/whatsapp.png'}
                    alt='whatsApp icon'
                    width={`${40}`}
                    height={`${40}`}
                ></Image> */}
            </Link>
        </div >
    )
}

export default FloatingWhatsAppBtn
