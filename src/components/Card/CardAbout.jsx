import Image from 'next/image'
import { social } from '../Footer/socail'
import SocialIcons from '../SocialIcons/SocialIcons'
import { team } from '@/app/(static)/about/about'

const CardAbout = ({ name, image, about, person }) => {

    return (
        <div>
            <div className={`card  bg-secondary shadow-sm w-auto justify-start items-center	py-1 `}>
                <figure className="max-w-xs max-h-80 m-1 justify-center">
                    <Image src={image} alt={name} height={200} width={200} className='' />
                </figure>
                <div className="card-body justify-center items-center text-center px-4 text-lg">
                    <h2 className="card-title">{name} </h2>
                    <h2 className="my-1">{about} </h2>

                    <div className="ps-6 flex gap-5 flex-wrap justify-center   ">
                        {

                        }
                        <SocialIcons person={person}></SocialIcons>

                    </div>

                    {/* Type one */}
                    {/* <div className="ps-6 ">
                        <p className="py-1">
                            الهاتف : <span dir="ltr"> {phone}</span>
                        </p>
                        <p className="py-1">
                            Email : <a > {email}</a>
                        </p>
                        <p className="py-1">
                            FaceBook : <span > {facebook}</span>
                        </p>
                        <p className="py-1">
                            LinkedIn : <a > {linkedIn}</a>
                        </p>
                        <p className="py-1">
                            Telegram : <span > {telegram}</span>
                        </p>
                        <p className="py-1">
                            Github : <a > {github}</a>
                        </p>
                    </div> */}

                </div>
            </div>
        </div >
    )
}

export default CardAbout
