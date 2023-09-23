import Image from 'next/image'
import { social } from '../Footer/socail'

const SocialIcons = ({ name, image, about, person, whatsapp, facebook, telegram, linkedIn, github, email, phone }) => {


    /**
  *TODO  Determine the mobile operating system.
  * TODO This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
  *
//   * @returns {String}
  */
    function getMobileOperatingSystem() {
        // var userAgent = Navigator.userAgent || navigator.vendor || window.opera;

        // // Windows Phone must come first because its UA also contains "Android"
        // if (/windows phone/i.test(userAgent)) {
        //     return "Windows Phone";
        // }

        // if (/android/i.test(userAgent)) {
        //     return "Android";
        // }

        // // iOS detection from: http://stackoverflow.com/a/9039885/177710
        // if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        //     return "iOS";
        // }

        // return "unknown";
    }

    const mobile = getMobileOperatingSystem()
    const icons = {
        facebook: "/images/icons/facebook.png",
        linkedIn: "/images/icons/linkedin.png",
        telegram: "/images/icons/telegram.png",
        github: "/images/icons/github.png",
        whatsapp: "/images/icons/whatsapp.png",
        phone: "/images/icons/phone.png",
    }


    return (
        <>
            {/* facebook */}
            {facebook && <a href={facebook} target='_blank'><Image
                src={icons.facebook}
                width={40}
                height={40}
                alt={facebook}
                className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
            ></Image></a>}

            {/* telegram */}
            {telegram && <a href={telegram} target='_blank'><Image
                src={icons.telegram}
                width={40}
                height={40}
                alt={telegram}
                className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
            ></Image></a>}

            {/*  linedIn*/}
            {linkedIn && <a href={linkedIn} target='_blank'><Image
                src={icons.linkedIn}
                width={40}
                height={40}
                alt={linkedIn}
                className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
            ></Image></a>}

            {/*  whatsApp*/}
            {whatsapp &&
                <a href={`https://wa.me/${whatsapp}`} target='_blank'><Image
                    src={icons.whatsapp}
                    width={40}
                    height={40}
                    alt={whatsapp}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
                ></Image></a>}

            {/*  github*/}
            {github && <a href={github} target='_blank'><Image
                src={icons.github}
                width={40}
                height={40}
                alt={github}
                className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
            ></Image></a>}


            {/*  phone*/}
            {phone && <a href={`tel:${phone}`} target='_blank'><Image
                src={icons.phone}
                width={40}
                height={40}
                alt={phone}
                className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
            ></Image></a>}

        </>
    )
}

export default SocialIcons

