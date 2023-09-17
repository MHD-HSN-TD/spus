

import Card from "@/components/Card/Card"
import { universities } from "@/store/universities"
import { unv } from "@/store/univs"
import Image from "next/image"
import Link from "next/link"


export async function generateMetadata({ params, searchParams }) {
    // read route params and detecate the id url
    const id = params.uni_id

    //#  map over the {umn} arr and find the the name from the page's id a
    const title = unv.map(el => (el.id == id) && el.name)

    //#  for over the {title} arr and return the name where index in "title" arr === page id
    for (let index = 0; index < title.length; index++) {
        if (title[index]) {
            return {
                title: title[index]
            }
        }
    }
}

const Uni = (props) => {


    const idOfPage = props.params.uni_id
    const overView = `
أحدثت جَامعة المَنارة بموجب المرسوم رقم/ 108/ في 31 آذار 2016، وتمت الموافقة على افتتاحها بموجب قرار مجلس التعليم العالي رقم /266/ في 17 تموز 2016، وقرار السيد وزير التعليم العالي رقم / 114/ في 6 تشرين الثاني 2016. في المبنى المؤقت في مدينة اللاذقية – المشروع العاشر وبدأت بتنفيذ برامجها الأكاديمية في 6 تشرين الثاني 2016.`

    const layoutOfUniv = universities.map(uni => (uni.id == idOfPage) && <div className="  " key={uni.id} >
        <div className=" ">
            {/* the header and the bach button */}
            <div>
                <h1 className=" bg-accent-focus lg:text-4xl text-xl p-3 ">{uni.name}</h1>
                <Link href={'/unis'} className=" btn bg-neutral m-4" >
                    <Image src={'/images/back.png'} width={30} height={30} />
                    <div className=""> العودة لصفحة الجامعات</div>
                </Link>
            </div>

            {/* the img and the  overView */}
            <section className="  m-10">
                <Image src={'/images/uni-1.jpg'} width={1000} height={1000} className="mx-auto " />
                {/* uni info */}
                <div className=" lg:mx-10 px-3 lg:text-xl py-3 lg:px-2 rounded-md my-3 bg-accent font-medium text-black  ">
                    <h2 className="text-3xl font-bold">{uni.name} </h2>
                    <div className="pt-6 pb-1 ">
                        <p className="py-2"><span className="font-semibold  ml-2">العنوان : </span><span> {uni.address}</span></p>
                        <p className="py-2"><span className="font-semibold ml-2"> الهاتف 1:</span><span dir="ltr"> {uni.phoneA}</span></p>
                        {uni.phoneB && (<p className="py-2"><span className="font-semibold ml-2"> الهاتف 2:</span><span dir="ltr"> {uni.phoneB}</span></p>)}
                        <div className="py-2">
                            <span className="font-semibold ml-2">الموقع الالكتروني :</span>
                            <span> <a href={uni.website} className="text-xs lg:text-base" target="_blank">{uni.website}</a></span>
                        </div>
                        <div className="py-2 w-">
                            <span className="font-semibold ml-2">حساب الفيسبوك :</span><span> <a href={uni.facebook} className=" text-xs lg:text-base  " target="_blank">{uni.facebook}</a></span>
                        </div>
                    </div>
                </div>

                {/* uni about */}
                <div className=" lg:mx-10 lg:text-2xl py-3 ">
                    <h2 className="font-bold">لمحة سريعة :</h2>
                    <p className="text-base  tracking-wide text-justify">{overView}</p>
                </div>
            </section>

        </div>
    </div >
    )



    return (
        <section className="">
            {layoutOfUniv}
            < div className="my-10">
                <h1 className="font-bold text-2xl m-10 mx-20"> الاختصاصات الموجودة  <span></span> </h1>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:m-10 m-2">
                    {/*//? map over the fields  */}
                    {universities.map(uni => {
                        if (idOfPage == uni.id) {
                            return (uni.fieldsForCards.map(field => {
                                // console.log(field)
                                return (<div>
                                    <Card id={field.id}
                                        name={field.name}
                                        address={field.address}
                                        phone={field.phone}
                                        website={field.website}
                                        // image={field.icon}
                                        image={field.icon}
                                        hours={field.hours}
                                        years={field.years}
                                        width={10} vertical />
                                </div>
                                )
                            })
                            )
                        }
                    })}

                </div>

            </div>
        </section >
    )
}

export default Uni
