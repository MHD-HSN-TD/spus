import Image from 'next/image'
import { social } from '../Footer/socail'
import SocialIcons from '../SocialIcons/SocialIcons'
import { team } from '@/app/(static)/about/about'

const CardAbout = ({ name, image, about, facebook, telegram, linkedIn, whatsapp, github, email, phone }) => {

    return (
        <div>
            <div className={`card  bg-secondary shadow-sm w-auto justify-start items-center	py-1 `}>
                <figure className="max-w-xs max-h-80 m-1 justify-center">
                    <Image src={image} alt={name} height={150} width={150} className='' />
                </figure>
                <div className="card-body justify-center items-center text-center px-4 text-lg">
                    <h2 className="card-title">{name} </h2>
                    <h2 className="my-1">{about} </h2>

                    <div className="ps-6 flex gap-5 flex-wrap justify-center items-center   ">

                        <SocialIcons
                            facebook={facebook}
                            telegram={telegram}
                            linkedIn={linkedIn}
                            whatsapp={whatsapp}
                            github={github}
                            email={email}
                            phone={phone}
                        ></SocialIcons>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default CardAbout
