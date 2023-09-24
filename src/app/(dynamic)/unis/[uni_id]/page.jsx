

import Card from "@/components/Card/Card"
import Table from "@/components/Table/Table"
import { universities } from "@/store/universities"
import Image from "next/image"
import Link from "next/link"
import Loading from "../loading"
import About from "@/components/About/About"



export async function generateMetadata({ params, searchParams }) {
    // read route params and detecate the id url
    const id = params.uni_id

    //#  map over the {umn} arr and find the the name from the page's id a
    const title = universities.map(el => (el.id == id) && el.name)

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

    const layoutOfUniv = universities.map(uni => (uni.id == idOfPage) && <div className="  " key={uni.id} >
        <div className=" ">
            {/* the header and the bach button */}
            <div>
                <h1 className=" bg-accent-focus lg:text-4xl text-xl p-3 ">{uni.name} <span className="text-white font-medium">{uni.acronym}</span></h1>
                <Link href={'/unis'} className=" btn bg-neutral m-4" >
                    <Image src={'/images/back.png'} width={30} height={30} />
                    <div className=""> العودة لصفحة الجامعات</div>
                </Link>
            </div>

            {/* the img and the  overView */}
            <section className="  m-10">
                <Image src={uni.image} width={1000} height={1000} className="mx-auto " alt={uni.name} loading={"eager"} />
                {/* uni info */}
                <div className=" lg:mx-10 px-3 lg:text-xl py-3 lg:px-2 rounded-md my-3 bg-accent font-medium text-black  ">
                    <h1 className="text-3xl font-bold">{uni.name} <span className='font-extrabold text-3xl'>{` " ${uni.acronym} "`}</span></h1>
                    <div className="pt-6 pb-1 ">
                        <h2 className="py-2"><span className="font-semibold  ml-2">العنوان : </span><span> {uni.address}</span></h2>
                        <h2 className="py-2"><span className="font-semibold ml-2"> الهاتف 1:</span><span dir="ltr"> {uni.phoneA}</span></h2>
                        {uni.phoneB && (<p className="py-2"><span className="font-semibold ml-2"> الهاتف 2:</span><span dir="ltr"> {uni.phoneB}</span></p>)}
                        <div className="py-2">
                            <span className="font-semibold ml-2">الموقع الالكتروني :</span>
                            <span> <a href={uni.website} className="text-xs lg:text-base" target="_blank">{uni.website}</a></span>
                        </div>
                        <div className="py-2 w-">
                            <h2 className="font-semibold ml-2">حساب الفيسبوك :</h2><span> <a href={uni.facebook} className=" text-xs lg:text-base  " target="_blank">{uni.facebook}</a></span>
                        </div>
                    </div>
                </div>

                {/* uni about */}
                <About id={uni.id}></About>
            </section>

        </div>
    </div >
    )



    return (
        <section className="">
            {layoutOfUniv}
            < div className="my-10">
                <h1 className="font-bold  m-10 lg:mx-20 lg:text-2xl py-3 ">  الاختصاصات الموجودة   :   <span></span> </h1>

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
            {/*  table start */}
            <div>
                {/* table info display */}
                <div className="py-3 m-10 lg:mx-20  ">
                    <div className="font-bold lg:text-2xl lg:my-2 my-1 "> وفي ما يلي  :</div>
                    <span className="">   تلخيص سريع يعرض اسعار كل الكليات الموجودة داخل الكلية مع عدد الساعات الموافق لكل فرع   </span>
                    {/*  //TODO alert */}
                    <div className="alert alert-warning mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span className="font-medium">المعلومات الخاصة بأسعار الساعات لم تصدر لجميع الكليات حيث يتم تحديث المعلومات يومياً</span>
                        <p className="font-medium">اخر  تحديث تم بتاريخ : <span>24/9/2023</span></p>
                    </div>
                </div>
                {/* table display */}
                <div className="lg:text-lg  p-4 ">
                    <div className="text-center">
                        <Table id={idOfPage}></Table>

                    </div>

                </div>
            </div>

        </section >
    )
}

export default Uni
