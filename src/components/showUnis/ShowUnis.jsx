'use client'
import { unv } from "@/store/univs"
import { univFields } from "@/store/uniFields"
import Link from "next/link"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
import { universities } from "@/store/universities"



const ShowUnis = () => {
    const setFilter = useSelector(state => state.filters)
    console.log(setFilter)


    return (
        <div className="grid gap-x-24 gap-y-10 lg:grid-cols-2 py-10 m-10 0">

            {
                universities.map(el => {
                    // console.log(el.fieldsForFilter);
                    // if (el.fields.includes(setFilter.chosenField)) {
                    if (el.fieldsForFilter.includes(setFilter.chosenField) || setFilter.chosenField == '') {
                        return (
                            <Link href={`/unis/${el.id}`} id={el.id}>
                                <Card
                                    id={el.id}
                                    name={el.name}
                                    address={el.address}
                                    phoneA={el.phoneA}
                                    phoneB={el.phoneB}
                                    phoneC={el.phoneC}
                                    website={el.website}
                                // image={el.image} //TODO : add image here
                                />
                            </Link>
                        )
                    }

                })
            }
        </div>
    )
}

export default ShowUnis
