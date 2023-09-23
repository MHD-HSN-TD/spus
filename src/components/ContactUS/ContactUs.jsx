import Image from "next/image"

const ContactUs = ({ src, title, caption, Email, Phone1, Phone2, address }) => {
    return (
        <div className="lg:p-10 p-5">
            <div className=" text-center ">
                <Image className='my-3 rounded-3xl mx-auto' src={src} width={200} height={200}></Image>
                <h2 className=" text-xl capitalize font-semibold text-warning">{title}</h2>
                {Email && <div className="grid gap-1">
                    <a href={`mailto:${Email}`}>{Email}</a>
                    <a href={`mailto:${caption}`}>{caption}</a>
                </div>}
                {Phone1 && <a href={`tel:${Phone1}`} target='_blank'><p className="mb-2" dir="ltr">{Phone1}</p></a>}
                {Phone2 && <a href={`tel:${Phone2}`} target='_blank'><p className="" dir="ltr">{Phone2}</p></a>}
                {address && < p className="">{address}</p>}
            </div>
        </div >
    )
}

export default ContactUs
