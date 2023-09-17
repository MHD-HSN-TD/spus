import Image from "next/image";
// const obj = {
//   email,
//   facebook,
//   instagram,
//   telegram,
//   linkedIn,
//   github,
//   children,
// };
const Card = ({ id, name, address, phoneA, phoneB, image, vertical }) => {
  // console.log(image);
  const cardSide = (
    <div className={`card md:card-side bg-secondary shadow-xl w-auto `}>
      <figure className="max-w-xs max-h-80 m-1">
        <Image src={image} alt={name} height={140} width={140} />
      </figure>
      <div className="card-body justify-center mr-10 ">
        <h2 className="card-title">{name} </h2>
        <div className="py-6 ">
          <p className="py-1">
            العنوان : <span> {address}</span>
          </p>
          <p className="py-1">
            الهاتف 1: <span dir="ltr"> {phoneA}</span>
          </p>
          {phoneB && (
            <p className="py-1">
              الهاتف 2: <span dir="ltr"> {phoneB}</span>
            </p>
          )}
          <div className="py-1">
            {/* الموقع الالكتروني :<span> <a href="https://spus.vercel.app/" className="btn btn-ghost">{website}</a></span> */}
          </div>
        </div>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-accent  ">
            <span className="text-white text">معلومات اضافية.</span>
          </button>
        </div> */}
      </div>
    </div>
  );
  const cardVertical = (
    <div className={`card  bg-secondary shadow-xl w-auto `}>
      <figure className="max-w-xs max-h-80 m-1">
        <Image src={image} alt="Movie" height={140} width={140} />
      </figure>
      <div className="card-body justify-center items-center text-center">
        <h2 className="card-title">{name} </h2>
        <h2 className="card-title">{id}</h2>
        <div className="py-6 ">
          <p className="py-1">
            العنوان :<span> {address}</span>
          </p>
          <p className="py-1">
            الهاتف : <span dir="ltr"> {phoneA}</span>
          </p>
          {/* <p className="py-1">
            الموقع الالكتروني :
            <span>
              <a href="https://spus.vercel.app/" className="btn btn-ghost">
                {website}
              </a>
            </span>
          </p> */}
        </div>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-accent  ">
            <span className="text-white text">معلومات اضافية.</span>
          </button>
        </div> */}
      </div>
    </div>
  );
  return vertical ? cardVertical : cardSide;
};

export default Card;
