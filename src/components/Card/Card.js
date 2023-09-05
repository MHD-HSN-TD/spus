import Image from "next/image";

const Card = () => {
  return (
    <div className="card card-side bg-secondary shadow-xl">
      <figure className="max-w-xs max-h-80 m-1">
        <Image src="/images/unii.png" alt="Movie" height={140} width={140} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">جامعة اليرموك الخاصة</h2>
        <p>
          العنوان :<span> درعا غباغب اخر الشارع</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-accent  ">
            <span className="text-white text">معلومات اضافية.</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
