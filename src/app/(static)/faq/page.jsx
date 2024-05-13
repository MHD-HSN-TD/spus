
export const metadata = {
    title: ' الاستشارات',
    description: 'الموقع الأول في سورية للجامعات السورية الخاصة الذي يقدم استشارات حول التسجيل ',
}
const whoISUs = ` فيما يلي بعض الاسئلة الشائعة والتي قد ترادوكم `;


// the Questions content
const Ques = [
    {
        id: 1,
        ques: "هل يحيى يحب حسن",
        answer: "ممكن (:"
    }
    , {
        id: 2,
        ques: "هل حسن يحب يحيى",
        answer: "بالتأكيــــــــــــد ♥"
    }
    , {
        id: 3,
        ques: "هل حسن يحب يحيى",
        answer: "بالتأكيــــــــــــد ♥"
    }
    , {
        id: 4,
        ques: "هل حسن يحب يحيى",
        answer: "بالتأكيــــــــــــد ♥"
    }
]


const FAQ = () => {
    return (
        <section className=" bg">


            {/* -------------Header------------- */}
            <div className="lg:px-28 lg:py-20 p-10  ">
                <div>
                    <h1 className="lg:text-2xl text-lg text-warning my-4 font-semibold ">الإسئلة الشائعة :</h1>
                    <h3 className="lg:text-2xl text-sm font-medium leading-loose text-justify">{whoISUs}</h3>
                </div>
            </div>

            {/* -------------Header ends------------- */}




            <div className="   ">
                <div className=" lg:p-28 p-10  ">
                    {Ques.map(ques => <div
                        className="collapse bg-secondary lg:my-5 my-2"
                        key={ques.id}>
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            {`${ques.id}.  ${ques.ques} ؟`}
                        </div>
                        <div className="collapse-content">
                            <p>{ques.answer}</p>
                        </div>
                    </div>)}
                    <div className="collapse bg-base-200 lg:my-5 my-2">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            هل يحيى يحب حسن ؟
                        </div>
                        <div className="collapse-content">
                            <p>ممكن :)</p>
                        </div>
                    </div>
                </div>
            </div>





        </section>
    )
}

export default FAQ
