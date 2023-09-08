// 'use client'
// import { useRouter } from "next/router"

import Card from "@/components/Card/Card"
import { unv } from "@/store/univs"
import Image from "next/image"
import Link from "next/link"


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
            {/* the header and the bach button */}
            <div>
                <h1 className=" bg-accent-focus text-4xl p-3 ">{uni.name}</h1>
                <Link href={'/unis'} className=" btn bg-neutral m-4" >
                    <Image src={'/images/back.png'} width={30} height={30} />
                    <div className=""> العودة لصفحة الجامعات</div>
                </Link>
            </div>

            {/* the img and the  overView */}
            <section className="  m-10">
                <Image src={'/images/uni-1.jpg'} width={1000} height={1000} className="mx-auto " />
                <div className=" mx-10 text-2xl py-3 ">
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

                <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 m-10">
                    {/*//? map over the fields  */}
                    {unv.map(uni =>
                        <Card id={uni.id}
                            name={uni.name}
                            address={uni.address}
                            phone={uni.phone}
                            website={uni.website}
                            image="/images/unii.png"
                            width={10}
                        />)}
                </div>

            </div>
        </section >
    )
}

export default Uni
