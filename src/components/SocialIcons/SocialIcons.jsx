import Image from 'next/image'
import { social } from '../Footer/socail'
import { links } from '@/app/(static)/about/about'

const SocialIcons = ({ person }) => {
    const linksHSN = [
        "https://www.facebook.com/mhammad.tadmori/",
        "https://t.me/HasnTD",
        "https://www.linkedin.com/in/mhd-hasan-tadmori/",
        "https://github.com/MHD-HSN-TD",
    ]
    const linksYEH = [
        "https://www.facebook.com/laith.obaideh/",
        "https://t.me/HasnTD",
        "https://www.linkedin.com/in/mhd-hasan-tadmori/",
        "https://github.com/MHD-HSN-TD",
    ]

    // const mapIconsAndLinks = (arr) => {
    //     social.map((item, index) => {
    //         // console.log("item", item, `arr[${index}]`, arr[index])
    //         return (<a href={arr[index]} target='_blank'><Image
    //             key={item.id}
    //             src={item.src}
    //             width={40}
    //             height={40}
    //             alt={item.name}
    //             className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
    //         ></Image></a>)
    //     }
    //     )
    // }
    // const testPerson = (person, arr) => {

    //     switch (person, arr) {
    //         case 'hsn':
    //             console.log(person)
    //             // mapIconsAndLinks(linksHSN)
    //             social.map((item, index) => {
    //                 // console.log("item", item, `arr[${index}]`, arr[index])
    //                 return (<a href={arr[index]} target='_blank'><Image
    //                     key={item.id}
    //                     src={item.src}
    //                     width={40}
    //                     height={40}
    //                     alt={item.name}
    //                     className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
    //                 ></Image></a>)
    //             }
    //             )
    //             break;
    //         case 'yeh':
    //             console.log(person)
    //             mapIconsAndLinks(linksYEH)
    //             break;

    //         default:
    //             social.map((item, index) =>
    //                 <a href={linksYEH[index]} target='_blank'><Image
    //                     key={item.id}
    //                     src={item.src}
    //                     width={40}
    //                     height={40}
    //                     alt={item.name}
    //                     className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity  "
    //                 ></Image></a>)
    //             break;
    //     }
    // }

    return (
        <>

            {person == 'hsn' ? social.map((item, index) => {
                // console.log("item", item, `arr[${index}]`, arr[index])
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
