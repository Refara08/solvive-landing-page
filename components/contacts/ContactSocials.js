import Social from "./Social";

const ContactSocials = () => {
  const socials = [
    {
      tag: "Google",
      icon: "/images/icon-google.png",
      info: "solvive@gmail.com",
      link: "mailto:solvive@gmail.com",
    },
    {
      tag: "Whatsapp",
      icon: "/images/icon-whatsapp.png",
      info: "+62 851-5687-4278",
      link: "https://wa.me/6285156874278",
    },
    {
      tag: "Instagram",
      icon: "/images/icon-instagram.png",
      info: "Solvive.id",
      link: "https://www.instagram.com/solvive.id/",
    },
  ];

  return (
    <div className="mb-24">
      <h3 className="font-bold text-xl text-center mb-8">Stay Get In Touch</h3>
      <div className="flex justify-center gap-6">
        {socials.map((item, index) => (
          <Social item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactSocials;
