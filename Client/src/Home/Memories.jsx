import React from "react";
// import Image1 from "../Assets/Image1.png";

const Memories = () => {
  return (
    <div>
      <section className="my-5 mb-10 flex justify-center space-x-4">
        <div className="leftImage flex object-cover">
          {/* Apply rounded-t-full and rounded-b-full for capsule effect */}
          <img
            src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618018/IMG-20241115-WA0050_eiy1ps.jpg"
            alt=""
            className="w-[220px] h-[320px]  object-cover rounded-t-full rounded-b-full"
          />
        </div>
        <div className="CentralContent flex flex-col justify-center items-center max-w-[400px] text-center ">
          <h1 className="text-3xl font-semibold">
            Sweet memories <br /> come to life again
          </h1>
          <h2 className=" text-center mt-4">
            Discover the untouched beauty of rural destinations, where authentic
            traditions, culture, and nature blend seamlessly. Immerse yourself
            in local experiences, far from the rush of city life, and embrace
            the simplicity and charm of countryside living.
          </h2>
          <div className="features flex justify-center items-center mt-5 space-x-3">
            <div className="box border border-solid border-black p-2 rounded-xl text-center">
              10 <br /> Years of <br /> Experience
            </div>
            <div className="box border border-solid border-black p-2 rounded-xl text-center">
              10 <br /> Destination <br /> Collaboration
            </div>
            <div className="box border border-solid border-black p-2 rounded-xl text-center">
              10 <br /> Happy <br /> Customers
            </div>
          </div>
        </div>

        <div className="RightImage relative top-12">
          <img
            src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618019/IMG-20241115-WA0053_s09rj4.jpg"
            alt=""
            className="w-[220px] h-[320px] object-cover rounded-t-full rounded-b-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Memories;
