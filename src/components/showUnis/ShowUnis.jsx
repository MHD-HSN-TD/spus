'use client'
import { unv } from "@/store/univs"
import { univFields } from "@/store/uniFields"
import Link from "next/link"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
import { universities } from "@/store/universities"
import { motion } from "framer-motion"



const ShowUnis = () => {
    const setFilter = useSelector(state => state.filters)
    // console.log(setFilter)



    return (
        <motion.div
            className="grid gap-x-24 gap-y-10 lg:grid-cols-2 py-10 m-10 0"

        >
            {
                universities.map(el => {
                    // console.log(el.fieldsForFilter);
                    // if (el.fields.includes(setFilter.chosenField)) {
                    if (el.fieldsForFilter.includes(setFilter.chosenField) || setFilter.chosenField == '') {
                        return (
                            <motion.div
                                id={el.id}
                                key={el.id}
                                initial={{ opacity: 0, x: -3, y: 0 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                transition={{ ease: "circInOut", duration: 0.5 }} >
                                whileHover={{
                                    scale: 1.03, transition: { duration: 0.5 },
                                }}

                                <Link href={`/unis/${el.id}`} id={el.id} key={el.id}>
                                    <Card
                                        id={el.id}
                                        key={el.id}
                                        name={el.name}
                                        acronym={el.acronym}
                                        address={el.address}
                                        phoneA={el.phoneA}
                                        phoneB={el.phoneB}
                                        phoneC={el.phoneC}
                                        website={el.website}
                                        image={el.mainImage}
                                    />
                                </Link>
                            </motion.div>
                        )
                    }

                })
            }
        </motion.div>
    )
}

export default ShowUnis
