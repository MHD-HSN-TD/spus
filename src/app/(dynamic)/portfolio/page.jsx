import Card from "@/components/Card/Card"


const Portfolio = () => {
    return (
        <div className="  ">
            <div className="w-100  bg-accent py-6 px-5 text-lg">الجامعات الخاصة في سوريا لعام 2023</div>
            <div className="grid gap-4 lg:grid-cols-2 py-10 m-3">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}

export default Portfolio
