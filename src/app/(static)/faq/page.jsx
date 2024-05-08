

export const metadata = {
    title: ' الاستشارات',
    description: 'الموقع الأول في سورية للجامعات السورية الخاصة الذي يقدم استشارات حول التسجيل ',
}
const whoISUs = ` نحن فريق مهمتنا تزويدكم بمعلومات شاملة ومحدثة حول جميع الجامعات الخاصة في سوريا. 
نحن نتفهم أن اختيار الجامعة المناسبة هو لحظة حاسمة في حياة كل طالب، ومنصتنا مصممة لتسهيل هذا القرار ، و نقدم رؤى قيمة حول موقع كل جامعة، والكليات المتاحة، والمزيد..`;


const FAQ = () => {
    return (
        <section className=" bg">
            {/* -------------Header------------- */}
            <div className="flex lg:flex-row flex-col-reverse   justify-center items-center lg:p-32 px-10  ">
                <div>
                    <h1 className="lg:text-2xl text-lg text-warning my-4 font-semibold ">إحصل على<span className=""> إستشارة </span> :</h1>
                    <h3 className="lg:text-2xl text-sm font-medium leading-loose text-justify">{whoISUs}</h3>
                </div>
            </div>
            {/* -------------Header ends------------- */}


            <div className="  lg:px-32 p-10 my-8  ">
                <div>
                    <h1 className="lg:text-2xl text-lg text-warning my-4 font-semibold ">تواصل<span className="">   معنـــــــــــــا عبر  </span> :</h1>
                    <div className="lg:text-2xl text-center font-medium leading-loose ">
                        <p>{whoISUs}</p>

                        <a href={`https://wa.me/`} target='_blank'>
                            <button className="btn btn-wide my-8 bg-accent hover:bg-success transition-all duration-700
                            text-white hover:text-black hover:w-72 "
                            >اضغط للإنتقال الى المحادثة</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>




    )
}

export default FAQ
