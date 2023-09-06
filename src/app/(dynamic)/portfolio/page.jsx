import Card from "@/components/Card/Card"
import { unv } from "@/store/univs"
import Link from "next/link"

export const metadata = {
    title: ' الجامعات',
    description: 'الموقع الأول في سورية للجامعات السورية الخاصة',
}
const Portfolio = () => {
    // console.log('ss', image)
    return (
        <div className="  ">
            <div className="w-100  bg-accent-focus py-4 px-5 text-3xl">
                <p>الجامعات الخاصة في سوريا لعام 2023</p>
            </div>
            <div className="grid gap-x-24 gap-y-10 lg:grid-cols-2 py-10 m-10 0">
                {unv.map(el => {
                    return (
                        <Link href={`/portfolio/${el.id}`} id={el.id}>
                            <Card
                                id={el.id}
                                name={el.name}
                                address={el.address}
                                phone={el.phone}
                                website={el.website}
                                image="/images/unii.png"
                            />
                            {/* console.log('ss', image) */}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio
