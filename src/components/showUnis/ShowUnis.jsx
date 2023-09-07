'use client'
import { unv } from "@/store/univs"
import Link from "next/link"
import Card from "../Card/Card"


const ShowUnis = () => {
    return (
        <div className="grid gap-x-24 gap-y-10 lg:grid-cols-2 py-10 m-10 0">
            {
                unv.map(el => {
                    return (
                        <Link href={`/unis/${el.id}`} id={el.id}>
                            <Card
                                id={el.id}
                                name={el.name}
                                address={el.address}
                                phone={el.phone}
                                website={el.website}
                                image="/images/unii.png"
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ShowUnis
