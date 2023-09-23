import Image from "next/image"
import NavBarLinks from "../navBar/NavBarLinks"
import { social } from "./socail"
import SocialIcons from "../SocialIcons/SocialIcons"

const Footer = () => {
    const socialMediaData = {
        id: 3,
        nameENG: "SPUS",
        name: "موقع الجامعات السورية الخاصة",
        about: "",
        imageHref: "",
        phone: "+963997391745",
        email: "info@spus.sy",
        facebook: "https://www.facebook.com/mhammad.tadomori",
        linkedIn: false,
        telegram: "https://t.me/yahyasbini",
        github: false,
        whatsapp: "963997391745",
    };


    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <Image src="/images/footer_img.png" alt="hsn photo" width={126} height={126} className="w-auto h-auto" />
                <p className="">كل الحقوق محفوظة    2023 <span> ©</span> </p>
                <div className="flex gap-3">
                    <p> لمزيد من التفاصيل : </p>
                    <p className=""><a className="text-gray-50 " href="https://github.com/MHD-HSN-TD" target="_blank"> MHD Hasn AL-Khalil Tadmori </a></p>
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
                <div className="grid  gap-10 grid-cols-3">
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
