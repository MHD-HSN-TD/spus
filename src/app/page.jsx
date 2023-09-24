import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  // const SubTitle = 'الجامعات الخاصة في سوريا عبر موقعما ، يهتم الطلاب في سوريا بالبحث عن أفضل جامعة خاصة في سوريا للعام القادم 2023 بهدف التعرف على كافة الجامعات المسموح لهم بالتقدم إليها ومن ثم القدرة على الاختيار بينهما ما يتوافق مع متطلباتهم ومؤهلهم العلمي وهو ما سوف نتعرف عليه فيما يلي بالتفصيل:';
  const SubTitle = ` أهلا وسهلا بك في SPUS
مصدرك النهائي للمعلومات حول الجامعات الخاصة في سوريا! نحن فريق من رواد الأعمال ملتزمون بتمكين الطلاب بالمعرفة التي يحتاجونها لاتخاذ قرارات مستنيرة حول تعليمهم العالي. في منظرة التعليمية المتطورة بسرعة، يمكن أن يكون العثور على الجامعة المناسبة مهمة مربكة. هذا هو المكان الذي نأتي من أجله.`; const title = 'الموقع الأول في سورية للجامعات السورية الخاصة'
  return (
    // <div className="container lg:mx-auto hero lg:min-h-screen text-center ">
    <div className="  hero lg:min-h-screen text-center lg:text-start  ">
      <div className="hero-content flex-col lg:flex-row gap-8 w-11/12">
        <div className=''>
          <h1 className=" font-bold uppercase  text-transparent text-3xl text-warning  leading-snug ">{title}</h1>

          <p className="py-10  text-xl">{SubTitle}</p>
          <div className='flex align-middle justify-center lg:block '>
            <Link href={'/unis'}>
              <button className="btn btn-warning sm:mx-auto" >ابدأ  من هنا </button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/unii.png"
          className="max-w-sm rounded-lg  w-3/4 lg:mr-10"
          alt='hero section'
          width={380}
          height={380} />
      </div>
    </div>
  )
}
