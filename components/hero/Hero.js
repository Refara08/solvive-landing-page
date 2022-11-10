import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="grid grid-cols-6 pt-12 mb-24">
      <div className="col-span-4">
        <div className="mb-8">
          <h1 className="text-2xl  font-montserrat font-extrabold mb-4">
            We Provide Digital Creativity Solutions
          </h1>
          <p className="text-sm w-[85%]">
            With us, you can build a mobile app and a website for all your needs
            and at your convenience
          </p>
        </div>
        <a
          href=""
          className="inline-block bg-orange-sol py-3 px-5 rounded-lg text-lg hover:scale-105 origin-bottom-left transition duration-300 font-bold"
        >
          Hire us!!
        </a>
      </div>
      <div className="relative col-span-2">
        <div className="absolute -top-8 -left-16 ">
          <Image
            src="/images/saly-mobile.png"
            alt="girl riding rocket"
            width="250"
            height="250"
            className="origin-top-left scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
