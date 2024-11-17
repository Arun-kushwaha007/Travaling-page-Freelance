import React from "react";

const Memories = () => {
  return (
    <div>
      <section className="my-5 mb-10 flex flex-wrap justify-center lg:space-x-4">
        {/* Left Image */}
        <div className="leftImage flex justify-center">
          <img
            src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618018/IMG-20241115-WA0050_eiy1ps.jpg"
            alt="Left Image"
            className="w-[250px] sm:w-[350px] md:w-[350px] lg:w-[430px] h-[350px] sm:h-[450px] md:h-[450px] mb-4 lg:h-[590px] object-cover rounded-t-full rounded-b-full"
          />
        </div>

        {/* Central Content */}
        <div className="CentralContent flex flex-col justify-center items-center text-center px-4 md:px-6 max-w-[650px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Sweet memories <br /> come to life again
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
            Discover the untouched beauty of rural destinations, where authentic
            traditions, culture, and nature blend seamlessly. Immerse yourself
            in local experiences, far from the rush of city life, and embrace
            the simplicity and charm of countryside living.
          </h2>
          <div className="features flex justify-center items-center mt-5 space-x-2 sm:space-x-3">
            <div className="box border border-solid border-black p-2 rounded-xl text-center text-xs sm:text-sm md:text-base lg:text-lg">
              10 <br /> Years of <br /> Experience
            </div>
            <div className="box border border-solid border-black p-2 rounded-xl text-center text-xs sm:text-sm md:text-base lg:text-lg">
              10 <br /> Destination <br /> Collaboration
            </div>
            <div className="box border border-solid border-black p-2 rounded-xl text-center text-xs sm:text-sm md:text-base lg:text-lg">
              10 <br /> Happy <br /> Customers
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="RightImage flex justify-center">
          <img
            src="https://res.cloudinary.com/ddd3v2fgn/image/upload/v1731618019/IMG-20241115-WA0053_s09rj4.jpg"
            alt="Right Image"
            className="w-[250px] sm:w-[350px] md:w-[350px] lg:w-[420px] h-[350px] sm:h-[450px] md:h-[450px] lg:h-[580px] mt-5 object-cover rounded-t-full rounded-b-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Memories;
