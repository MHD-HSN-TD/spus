import Card from "@/components/Card/Card"
import { unv } from "@/store/univs"
import Link from "next/link"


const Portfolio = () => {
    console.log(unv)
    return (
        <div className="  ">
            <div className="w-100  bg-accent py-6 px-5 text-lg">الجامعات الخاصة في سوريا لعام 2023</div>
            <div className="grid gap-4 lg:grid-cols-2 py-10 m-3">
                {unv.map(el => {
                    return (
                        <Link href={`/portfolio/${el.id}`} id={el.id}>
                            <Card
                                id={el.id}
                                name={el.name}
                                address={el.address}
                                phone={el.phone}
                                website={el.website}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio
