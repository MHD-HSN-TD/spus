import Image from "next/image"

export const metadata = {
    title: 'حــول',
    description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
}
const about = () => {
    const whoISUs = `نحن نؤمن بأن التعليم هو مفتاح النجاح وباب الفرص المستقبلية. في موقعنا الالكتروني، نسعى لتسهيل وتبسيط عملية التسجيل في الجامعات للطلاب. نحن فريق متخصص من المستشارين التعليميين ومطوري الويب الذين يعملون بجد لتوفير مصادر وأدوات قوية لمساعدتكم في هذه الرحلة الهامة.`
    return (
        <section className=" bg">
            {/* -------------Header------------- */}
            <div className="flex lg:flex-row flex-col-reverse   justify-center items-center  px-32 ">
                <p className="text-2xl font-medium leading-loose text-justify">{whoISUs}</p>
                <Image
                    src={'/images/about.png'}
                    width={400}
                    height={400}
                    alt="about us"
                />
            </div>
            {/* -------------Header ends------------- */}

            {/* -------------Meet our teams------------- */}
            <div className="">
                <p className=""></p>

            </div>
        </section>
    )
}

export default about
