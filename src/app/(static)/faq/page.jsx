//TODO: edit the data 
export const metadata = {
    title: ' الاسئلة الشائعة',
    description: 'فيما يلي بعض الاسئلة الشائعة والتي قد ترادوكم  ',
}
const content = ` فيما يلي بعض الاسئلة الشائعة والتي قد ترادوكم `;


// the Questions content
const Ques = [
    {
        id: 1,
        ques: "ما هي أهم العوامل التي يجب مراعاتها عند اختيار تخصص جامعي",
        answer: "قريبـــــــــــاً"
    }
    , {
        id: 2,
        ques: "كيف يمكنني معرفة ما هي ميولي واهتماماتي",
        answer: "قريبـــــــــــاً ♥"
    }
    , {
        id: 3,
        ques: "ما هي فرص العمل المتاحة في مختلف التخصصات",
        answer: "قريبـــــــــــاً ♥"
    }
    , {
        id: 4,
        ques: "ما هي شروط القبول في مختلف التخصصات",
        answer: "قريبـــــــــــاً ♥"
    }
    , {
        id: 5,
        ques: "هل يمكنني تغيير تخصصي بعد التسجيل في الجامعة",
        answer: "قريبـــــــــــاً ♥"
    }
    , {
        id: 6,
        ques: "ما هي المعلومات التي يقدمها هذا الموقع",
        answer: "قريبـــــــــــاً ♥"
    }
]


const FAQ = () => {
    return (
        <section className=" bg">


            {/* -------------Header------------- */}
            <div className="lg:px-28 lg:py-14 p-10  ">
                <div>
                    <h1 className="lg:text-2xl text-lg text-warning my-4 font-semibold ">الإسئلة الشائعة :</h1>
                    <h3 className="lg:text-2xl text-sm font-medium leading-loose text-justify">{content}</h3>
                </div>
            </div>

            {/* -------------Header ends------------- */}




            <div className=" lg:p-28 p-10  ">
                {Ques.map(ques => <div
                    className="collapse bg-secondary lg:my-5 my-2"
                    key={ques.id}>
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium ">
                        {`${ques.id}.  ${ques.ques} ؟`}
                    </div>
                    <div className="collapse-content">
                        <p className="text-warning">{ques.answer}</p>
                    </div>
                </div>)}

            </div>





        </section>
    )
}

export default FAQ
