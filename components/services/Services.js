import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesCopy = [
    {
      text: "Landing Page Website",
      desktop: {
        img: "/images/service1-desktop.png",
        width: "477",
        height: "450",
      },
      mobile: {
        img: "/images/service1-mobile.png",
        width: "474",
        height: "300",
      },
    },
    {
      text: "Android-iOS Mobile App",
      desktop: {
        img: "/images/service2-desktop.png",
        width: "384",
        height: "384",
      },
      mobile: {
        img: "/images/service2-mobile.png",
        width: "351",
        height: "300",
      },
    },
    {
      text: "UI-UX Design Services",
      desktop: {
        img: "/images/service3-desktop.png",
        width: "453",
        height: "450",
      },
      mobile: {
        img: "/images/service3-mobile.png",
        width: "441",
        height: "300",
      },
    },
  ];

  return (
    <section id="services">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Our Services</h2>
        <p className="text-sm font-light">
          We are accelerating your digital needs
        </p>
      </div>
      {servicesCopy.map((item, index) => (
        <ServiceCard item={item} key={index} />
      ))}
    </section>
  );
};

export default Services;
