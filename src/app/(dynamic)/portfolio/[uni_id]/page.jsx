// 'use client'
// import { useRouter } from "next/router"

import Card from "@/components/Card/Card"
import { unv } from "@/store/univs"
import Image from "next/image"


export async function generateMetadata({ params, searchParams }) {
    // read route params and detecate the id url
    const id = params.uni_id

    //#  map over the {umn} arr and fined the the name from the page's id a
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

    const idOfPaga = props.params.uni_id
    const overView = `
أحدثت جَامعة المَنارة بموجب المرسوم رقم/ 108/ في 31 آذار 2016، وتمت الموافقة على افتتاحها بموجب قرار مجلس التعليم العالي رقم /266/ في 17 تموز 2016، وقرار السيد وزير التعليم العالي رقم / 114/ في 6 تشرين الثاني 2016. في المبنى المؤقت في مدينة اللاذقية – المشروع العاشر وبدأت بتنفيذ برامجها الأكاديمية في 6 تشرين الثاني 2016.`

    const layoutOfUniv = unv.map(uni => (uni.id == idOfPaga) && <div className="  " key={uni.id} >
        <div className=" ">
            <h1 className=" bg-accent-focus text-4xl p-3 ">{uni.name}</h1>
            <section className="  m-10">
                <Image
                    src={'/images/uni-1.jpg'} width={1000} height={1000} className="mx-auto " />

                <div className=" mx-10 text-2xl py-3 ">
                    <h2 className="font-bold">لمحة سريعة :</h2>
                    <p className="text-base  tracking-wide">{overView}</p>
                </div>

            </section>
        </div>
    </div >
    )

    const title = 'الصفحة الخاصة بكل جامعة '


    return (
        <section className="">
            {/* <h1> {title}</h1> */}
            {layoutOfUniv}
            < div className="my-10">
                {/* <h1 className="font-bold text-2xl m-10"> الاختصاصات الموجودة في <span>{uni.name}</span> </h1> */}
                <h1 className="font-bold text-2xl m-10"> الاختصاصات الموجودة في <span></span> </h1>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 m-10">
                    {
                        unv.map(uni =>
                            <Card id={uni.id}
                                name={uni.name}
                                address={uni.address}
                                phone={uni.phone}
                                website={uni.website}
                                image="/images/unii.png" />

                        )

                    }
                </div>
            </div>
        </section >
    )
}

export default Uni
