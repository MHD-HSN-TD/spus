import Filter from "@/components/filter/Filter"
import ShowUnis from "@/components/showUnis/ShowUnis"


export const metadata = {
    title: ' الجامعات',
    description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
}
const Unis = () => {
    // console.log('ss', image)
    return (
        <div className="  ">
            {/* <div className="w-100  bg-accent-focus py-4 px-5 text-2xl"><p>الجامعات الخاصة في سوريا لعام 2023</p></div> */}
            <Filter />
            <ShowUnis></ShowUnis>
        </div>
    )
}

export default Unis
