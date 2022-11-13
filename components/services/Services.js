import Card from "../ui/Card";

const Services = () => {
  const servicesCopy = [
    {
      num: "",
      text: "Website Services",
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
      num: "",
      text: "Mobile App Services",
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
      num: "",
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
    <section id="services" className="mb-24">
      <div className="mb-8">
        <h2 className="heading">Our Services</h2>
        <p className="text-sm font-light">
          We are accelerating your digital needs
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {servicesCopy.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
