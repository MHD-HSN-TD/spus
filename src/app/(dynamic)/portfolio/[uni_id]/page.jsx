// 'use client'
// import { useRouter } from "next/router"

import { unv } from "@/store/univs"
import Image from "next/image"


const Uni = (props) => {

    const idOfPaga = props.params.uni_id
    console.log(idOfPaga)

    const layoutOfUniv = unv.map(uni => {
        console.log(uni.id === idOfPaga)
        return (uni.id == idOfPaga) && <div
            className=" bg- "
            key={uni.id}
        >
            <div className="">
                <h1>{uni.name}</h1>
            </div>
        </div >
    })

    const title = 'الصفحة الخاصة بكل جامعة '


    return (
        <section className="h-screen">
            <h1> {title}</h1>
            {layoutOfUniv}
        </section>
    )
}

export default Uni
