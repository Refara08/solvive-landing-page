import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="grid grid-cols-6 lg:grid-cols-5 xl:grid-cols-2 pt-12 mb-24"
    >
      <div className="col-span-4 lg:col-span-3 xl:col-span-1 md:w-[80%] lg:w-[75%] xl:w-full">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl  font-montserrat font-extrabold mb-4">
            We Provide Digital Creativity Solutions
          </h1>
          <p className="text-sm lg:text-base xl:text-lg w-[85%]">
            With us, you can build a mobile app and a website for all your needs
            and at your convenience
          </p>
        </div>
        <Link href="/#contacts" legacyBehavior>
          <a className="inline-block bg-orange-sol py-3 px-5 rounded-lg text-lg hover:scale-105 origin-bottom-left transition duration-300 font-bold">
            Hire us!!
          </a>
        </Link>
      </div>
      <div className="relative col-span-2 xl:col-span-1">
        <div className="absolute -top-8 md:top-0 -left-16 lg:left-0 xl:-top-32 xl:left-12 -z-10">
          <Image
            src="/images/saly-mobile.png"
            alt="girl riding rocket"
            width="1000"
            height="1000"
            className="origin-top-left scale-110 md:origin-bottom-right md:scale-125 xl:origin-top-left xl:scale-100 xl:-translate-x-28"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
