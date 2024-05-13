// "use client"
import Filter from "@/components/filter/Filter"
import ShowUnis from "@/components/showUnis/ShowUnis"
// import { motion } from "framer-motion"


export const metadata = {
    title: ' الجامعات',
    description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
}
const Unis = () => {
    // console.log('ss', image)
    return (
        <div className="  "
        // initial={{ opacity: 0, x: 10 }}
        // whileInView={{ opacity: 1, x: 0 }}
        >
            {/* <div className="w-100  bg-accent-focus py-4 px-5 text-2xl"><p>الجامعات الخاصة في سوريا لعام 2023</p></div> */}
            <Filter />
            <ShowUnis></ShowUnis>
        </div>
    )
}

export default Unis
