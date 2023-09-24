import Image from 'next/image'
import { social } from '../Footer/socail'
import SocialIcons from '../SocialIcons/SocialIcons'
import { team } from '@/app/(static)/about/about'

const CardAbout = ({ name, image, about, person, facebook, telegram, linkedIn, whatsapp, github, email, phone }) => {

    return (
        <div>
            <div className={`card  bg-secondary shadow-sm w-auto justify-start items-center	py-1 rounded-lg `}>
                <figure className="max-w-xs max-h-80 m-1 justify-center">
                    <Image src={image} alt={name} height={200} width={200} className='lg:w-52 lg:h-52 w-36 h-36 ' />
                </figure>
                <div className="  text-center lg:px-4 p-1 text-lg">
                    <h2 className=" text-xl font-semibold">{name} </h2>
                    <h2 className="my-2 opacity-60 ">{about} </h2>

                    <div className="py-3 flex gap-5 flex-wrap justify-center items-center   ">

                        <SocialIcons
                            facebook={facebook}
                            telegram={telegram}
                            linkedIn={linkedIn}
                            whatsapp={whatsapp}
                            github={github}
                            email={email}
                            phone={phone}
                            person={person}
                        ></SocialIcons>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default CardAbout
