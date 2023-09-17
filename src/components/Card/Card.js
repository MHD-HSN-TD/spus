import Image from "next/image";

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
  const cardSide = (
    <div className={`card md:card-side bg-secondary shadow-xl w-auto `}>
      <div className="flex justify-center items-center">
        {/* image div */}
        <div className="w-40 h-40 m-1 flex justify-center items-center	">
          <Image
            src={image}
            alt={name}
            height={140}
            width={140}
            className=" "
          />
        </div>
        {/* end of image div */}
      </div>
      {/* card info */}
      <div className="text-center px-2 lg:pt-5">
        <h2 className="font-semibold text-lg">{name} </h2>
        <div className="py-6 lg:text-right">
          <p className="py-1">
            <span className="font-semibold mx-2"> العنوان :</span>
            <span> {address}</span>
          </p>
          {phoneA && (
            <p className="py-1 font-medium">
              <span className="font-semibold mx-2"> الهاتف 1 : </span>
              <span dir="ltr" className="lg:inline-block block">
                {phoneA}
              </span>
            </p>
          )}
          {phoneB && (
            <p className="py-1 font-medium">
              <span className="font-semibold mx-2"> الهاتف 2 : </span>
              <span dir="ltr" className="lg:inline-block block">
                {phoneB}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const cardVertical = (
    <div className={`card  bg-secondary shadow-xl w-auto `}>
      <figure className="max-w-xs max-h-80 m-1 lg:py-1 py-1">
        <Image
          src={image}
          alt="Movie"
          height={100}
          width={100}
          className="lg:w-24 w-1/2"
        />
      </figure>
      <div className="text-center px-2 lg:text-lg text-sm ">
        <h2 className="font-semibold lg:text-lg text-sm">{name} </h2>
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
                <span className="font-semibold mx-2 ">عدد سنين الدراسة:</span>
                <span dir="ltr" className="lg:inline-block block">
                  {years}
                </span>
              </p>
              <p className="py-1 font-medium">
                <span className="font-semibold mx-2">عدد الساعات :</span>
                <span dir="ltr" className="lg:inline-block block">
                  {hours}
                </span>
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
