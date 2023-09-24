"use client"

import { allTablesData } from "./tablesData"

const Table = ({ acronym }) => {

    return (
        <div className="overflow-x-auto  ">
            <table className=" lg:table-lg table-md table-zebra mx-auto ">
                {/* head */}
                <thead className="lg:text-lg">
                    <tr>
                        {/* <th></th> */}

                        <th className="p-1">اسم الكلية</th>
                        <th>عدد الساعات</th>
                        <th>ثمن الساعة شهادة سورية</th>
                        <th>ثمن الساعة شهادة غير سورية</th>
                        {/* <th>متوسط تكلفة الدراسة سنويا</th> */}
                    </tr>
                </thead>
                <tbody className="text-xl">
                    {
                        allTablesData.map((uni, index) => {
                            if (acronym == uni.name) {
                                return uni.tableInfo.map(row => {
                                    return <tr className="text-lg">
                                        {/* <td ></td> */}
                                        {/* <th >{index + 1}</th> */}
                                        <th >{row.name}</th>
                                        <td >{row.hours}</td>
                                        <td >{row.hourPrice}</td>
                                        <td >{row.hourPriceForForeign}</td>
                                        {/* <td > {row.hours * row.hourPrice}</td> */}
                                    </tr>
                                })
                            }
                        }

                        )

                    }


                </tbody>
            </table>
        </div>
    )
}

export default Table
