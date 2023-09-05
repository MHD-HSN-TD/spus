import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  const SubTitle = 'الجامعات الخاصة في سوريا عبر موقعما ، يهتم الطلاب في سوريا بالبحث عن أفضل جامعة خاصة في سوريا للعام القادم 2023 بهدف التعرف على كافة الجامعات المسموح لهم بالتقدم إليها ومن ثم القدرة على الاختيار بينهما ما يتوافق مع متطلباتهم ومؤهلهم العلمي وهو ما سوف نتعرف عليه فيما يلي بالتفصيل:';
  const title = 'الموقع الأول في سورية للجامعات السورية الخاصة'
  return (
    // <div className="container lg:mx-auto hero lg:min-h-screen text-center ">
    <div className="container  hero lg:min-h-screen text-center lg:text-start ">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className=''>
          <h1 className=" font-bold uppercase  text-transparent text-7xl bg-clip-text bg-gradient-to-b from-success to-white  leading-snug ">{title}</h1>

          <p className="py-10  text-xl">{SubTitle}</p>
          <div className='flex align-middle justify-center lg:block'>
            <Link href={'/portfolio'}>
              <button className="btn btn-success sm:mx-auto" >ابدأ  من هنا </button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/unii.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt='hero section'
          width={400}
          height={400} />
      </div>
    </div>
  )
}
