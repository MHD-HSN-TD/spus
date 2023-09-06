import Image from "next/image";

const Card = ({ id, name, address, phone, website, image }) => {
  // console.log(image);
  return (
    <div className="card card-side bg-secondary shadow-xl">
      <figure className="max-w-xs max-h-80 m-1">
        <Image src={image} alt="Movie" height={140} width={140} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name} </h2>
        <h2 className="card-title">{id}</h2>
        <div className="py-6 ">
          <p className="py-1">
            العنوان :<span> {address}</span>
          </p>
          <p className="py-1">
            الهاتف :<span> {phone}</span>
          </p>
          <p className="py-1">
            {/* الموقع الالكتروني :<span> <a href="https://spus.vercel.app/" className="btn btn-ghost">{website}</a></span> */}
          </p>
        </div>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-accent  ">
            <span className="text-white text">معلومات اضافية.</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
