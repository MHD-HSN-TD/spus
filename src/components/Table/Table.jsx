
const Table = () => {


    const tableInfo = [{
        id: 1,
        name: "هندسة المعلوماتية",
        hours: 200,
        hourPrice: 65000,
        annualPrice: 200 * 65000
    },
    {
        id: 1,
        name: "طب الاسنان",
        hours: 198,
        hourPrice: 13000,
        annualPrice: 0
    },
    {
        id: 2,
        name: "الصيدلة",
        hours: 199,
        hourPrice: 100000,
        annualPrice: 0
    },
    {
        id: 3,
        name: "هندسة العمارة",
        hours: 175,
        hourPrice: 75000,
        annualPrice: 0
    },
    ]

    const allTablesData = [
        {
            id: 1, //id of the university
            name: "AIU", //name of the university
            tableInfo: [{
                id: 1,
                name: "هندسة المعلوماتية",
                hours: 200,
                hourPrice: 65000,
                annualPrice: 200 * 65000
            },
            {
                id: 1,
                name: "طب الاسنان",
                hours: 198,
                hourPrice: 13000,
                annualPrice: 0
            },
            {
                id: 2,
                name: "الصيدلة",
                hours: 199,
                hourPrice: 100000,
                annualPrice: 0
            },
            {
                id: 3,
                name: "هندسة العمارة",
                hours: 175,
                hourPrice: 75000,
                annualPrice: 0
            },
            ]
        },
        {
            id: 2, //id of the university
            name: "SPU", //name of the university
            tableInfo: [{
                id: 1,
                name: "هندسة المعلوماتية",
                hours: 200,
                hourPrice: 65000,
                annualPrice: 200 * 65000
            },
            {
                id: 1,
                name: "طب الاسنان",
                hours: 198,
                hourPrice: 13000,
                annualPrice: 0
            },
            {
                id: 2,
                name: "الصيدلة",
                hours: 199,
                hourPrice: 100000,
                annualPrice: 0
            },
            {
                id: 3,
                name: "هندسة العمارة",
                hours: 175,
                hourPrice: 75000,
                annualPrice: 0
            },
            ]
        }]
    return (
        <div className="overflow-x-auto  ">
            <table className=" lg:table-lg table-xs table-zebra mx-auto ">
                {/* head */}
                <thead className="text-lg">
                    <tr>
                        <th></th>
                        <th className="">اسم الكلية</th>
                        <th>عدد الساعات</th>
                        <th>ثمن الساعة</th>
                        <th>متوسط تكلفة الدراسة سنويا</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {tableInfo.map((row, index) => <tr className="">
                        <td ></td>
                        {/* <th >{index + 1}</th> */}
                        <th >{row.name}</th>
                        <td >{row.hours}</td>
                        <td >{row.hourPrice}</td>
                        <td > {row.hours * row.hourPrice}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default Table
