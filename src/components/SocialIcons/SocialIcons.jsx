import Image from 'next/image'
import { social } from '../Footer/socail'

const SocialIcons = ({ person }) => {

    //! Note : this order is required
    /**
     * 1.facebook
     * 2.telegram
     * 3.linkedin
     * 4.github
     * 
     * 
     */


    const linksHSN = [
        "https://www.facebook.com/mhammad.tadmori/",
        "https://t.me/HasnTD",
        "https://www.linkedin.com/in/mhd-hasan-tadmori/",
        "https://github.com/MHD-HSN-TD",
    ]
    const linksYEH = [
        "https://www.facebook.com/profile.php?id=100026186868626",
        "https://t.me/yahyasbini",
        "https://www.linkedin.com/in/yahya-sbini-a2b10a213/",
        "#",
    ]



    return (
        <>

            {person == 'hsn' ? social.map((item, index) => {
                return (<a href={linksHSN[index]} target='_blank'><Image
                    key={item.id}
                    src={item.src}
                    width={40}
                    height={40}
                    alt={item.name}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
                ></Image></a>)
            }
            ) : social.map((item, index) =>
                <a href={linksYEH[index]} target='_blank'><Image
                    key={item.id}
                    src={item.src}
                    width={40}
                    height={40}
                    alt={item.name}
                    className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
                ></Image></a>)}
            { }
        </ >
    )
}

export default SocialIcons
