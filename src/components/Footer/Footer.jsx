import Image from "next/image"
import NavBarLinks from "../navBar/NavBarLinks"
import { social } from "./socail"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <Image src="/images/hsn.png" alt="hsn photo" width={126} height={126} className="w-auto h-auto" />
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
                <div className="grid  gap-10 grid-cols-2">
                    {social.map(item =>
                        <Image
                            key={item.id}
                            src={item.src}
                            width={40}
                            height={40}
                            alt={item.name}
                            className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
                        ></Image>)}

                </div>
            </div>
            {/* //?-----social ends------- */}
        </footer >
    )
}

export default Footer
