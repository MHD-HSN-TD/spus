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
const Card = ({
  id,
  name,
  address,
  phoneA,
  phoneB,
  image,
  years,
  hours,
  vertical,
}) => {
  // console.log(image);
  const cardSide = (
    <div className={`card md:card-side bg-secondary shadow-xl w-auto `}>
      {/* <figure className="max-w-xs max-h-80 m-1"> */}
      <div className="flex justify-center items-center">
        <div className="w-40 h-40 m-1 flex justify-center items-center	">
          <Image
            src={image}
            alt={name}
            height={140}
            width={140}
            className=" "
          />
        </div>
      </div>
      {/* <div className="card-body justify-center lg:mr-10 "> */}
      <div className="justify-center lg:mr-10 ">
        <h2 className="card-title">{name} </h2>
        <div className="lg:py-6 ">
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
      </div>
    </div>
  );
  const cardVertical = (
    <div className={`card  bg-secondary shadow-xl w-auto `}>
      <figure className="max-w-xs max-h-80 m-1">
        <Image src={image} alt="Movie" height={140} width={140} />
      </figure>
      <div className="text-center px-2 ">
        <h2 className="font-semibold text-lg">{name} </h2>
        <div className="py-6 lg:text-right">
          <p className="py-1">
            <span className="font-semibold mx-2"> العنوان :</span>
            <span> {address}</span>
          </p>
          {phoneA && (
            <p className="py-1">
              الهاتف : <span dir="ltr"> {phoneA}</span>
            </p>
          )}
          {years && (
            <div>
              <p className="py-1 font-medium">
                <span className="font-semibold mx-2 ">
                  {" "}
                  عدد سنين الدراسة :{" "}
                </span>
                <span dir="ltr"> {years}</span>
              </p>
              <p className="py-1 font-medium">
                <span className="font-semibold mx-2">عدد الساعات :</span>

                <span dir="ltr"> {hours}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  return vertical ? cardVertical : cardSide;
};

export default Card;
