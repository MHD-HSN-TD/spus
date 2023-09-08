import CardAbout from "@/components/Card/CardAbout"
import Image from "next/image"
import { team } from "./about"

export const metadata = {
    title: 'حــول',
    description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
}
const about = () => {
    const whoISUs = `نحن نؤمن بأن التعليم هو مفتاح النجاح وباب الفرص المستقبلية. في موقعنا الالكتروني، نسعى لتسهيل وتبسيط عملية التسجيل في الجامعات للطلاب. نحن فريق متخصص من المستشارين التعليميين ومطوري الويب الذين يعملون بجد لتوفير مصادر وأدوات قوية لمساعدتكم في هذه الرحلة الهامة.`
    const memberNames = ['hsn', 'yeh']

    return (
        <section className=" bg">
            {/* -------------Header------------- */}
            <div className="flex lg:flex-row flex-col-reverse   justify-center items-center lg:px-32 px-10  ">
                <div>
                    <h1 className="lg:text-3xl text-lg text-warning my-4 font-semibold ">من<span className=""> نحن </span> :</h1>
                    <p className="lg:text-2xl text-sm font-medium leading-loose text-justify">{whoISUs}</p>
                </div>
                <Image
                    src={'/images/about.png'}
                    width={500}
                    height={500}
                    alt="about us"
                />
            </div>
            {/* -------------Header ends------------- */}

            {/* -------------Meet our teams------------- */}
            <div className="lg:px-32 px-10 text-3xl  my-4">
                <p className="text-warning my-10 lg:text-3xl text-lg font-semibold  ">تعرف على فريقنــــا :</p>
                <div className="flex gap-x-16 justify-around flex-wrap gap-y-5">
                    {team.map((member, index) =>
                        // console.log(member.imageHref)
                        <CardAbout
                            person={`${memberNames[index]}`}
                            key={member.id}
                            image={member.imageHref}
                            about={member.about}
                            name={member.name}
                            vertical />)}
                </div>
            </div>
            {/* -------------Meet our teams ends------------- */}

            {/* -------------It is over ??------------- */}
            <div className="bg-slate-400 lg:px-32 p-10 text-3xl  mt-10 ">
                <h1 className="lg:text-3xl text-lg text-black mb-4 font-semibold">هل هنالك المزيد ام ماذا؟</h1>
                <p>بالطبع لا .... انها فقط البداية ولدنيا الكثيــــــــــــــــر الكثير من المشاريع القادمة</p>
            </div>
            {/* -------------It is over ?? ends------------- */}



        </section>
    )
}

export default about
