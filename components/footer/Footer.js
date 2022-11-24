import Image from "next/image";

const Footer = () => {
  return (
    <section
      id="footer"
      className="bg-scnd-blue px-4 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="w-full lg:px-20 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto grid grid-cols-2">
        <div className="flex flex-col gap-4 py-12">
          <h3 className="text-2xl lg:text-3xl font-bold">
            Anything we can help with?
          </h3>
          <p className="xl:text-lg">
            We are available to assist you through Whatsapp if you have any
            questions about our services
          </p>
          <a
            href="https://wa.me/6285156874278"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-sol py-2 px-5 rounded-md text-lg font-bold max-w-fit hover:scale-105 transition duration-300 origin-top"
          >
            Contact us!!
          </a>
        </div>
        <div className="relative">
          <Image
            src="/images/footer-saly.png"
            alt="grumpy guy holding laptop"
            width={"687"}
            height={"636"}
            className="absolute bottom-0 right-0 scale-125 sm:scale-105 md:scale-90 lg:scale-[65%] xl:scale-[45%] origin-bottom"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
