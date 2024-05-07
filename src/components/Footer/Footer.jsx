import Image from "next/image"
import NavBarLinks from "../navBar/NavBarLinks"
import { social } from "./socail"
import SocialIcons from "../SocialIcons/SocialIcons"
import Link from "next/link"

const Footer = () => {
    const socialMediaData = {
        nameENG: "SPUS",
        name: "موقع الجامعات السورية الخاصة",
        about: "",
        imageHref: "",
        phone: "+963967586966",
        email: "info@spus.sy",
        facebook: "https://www.facebook.com/mhammad.tadomori",
        linkedIn: false,
        telegram: "https://t.me/HasnTD",
        github: false,
        whatsapp: "963967586966",
    };


    return (
        <footer className="footer lg:p-5 p-4 bg-neutral text-neutral-content">
            <div>
                <Link href={'/'}>
                    <Image src="/images/footer_img 1.png" alt="logo" width={180} height={180} className="w-auto h-auto py-5" />
                </Link>
                <p className="font-bold">كل الحقوق محفوظة    2024 <span> ©</span> </p>
                <div className="flex gap-3">
                    <p className="font-bold"> لمزيد من التفاصيل : </p>
                    <p className=""><a className="text-gray-50 " href={`https://wa.me/963967586966`} target='_blank'> MHD Hasn AL-Khalil Tadmori </a></p>
                </div>
            </div>
            {/* //#-----links start------- */}
            <div>
                <span className="footer-title">Links</span>
                <div className="grid  gap-4 auto-cols-auto	">
                    <NavBarLinks />
                </div>
            </div>
            {/* //#-----links end------- */}
            {/* //?-----social start------- */}
            <div>
                <span className="footer-title">Social</span>
                <div className="flex  gap-4">
                    <SocialIcons
                        facebook={socialMediaData.facebook}
                        whatsapp={socialMediaData.whatsapp}
                        phone={socialMediaData.phone}
                        telegram={socialMediaData.telegram}
                    ></SocialIcons>
                </div>
            </div>
            {/* //?-----social ends------- */}
        </footer >
    )
}

export default Footer
