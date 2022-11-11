import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

const Contacts = () => {
  return (
    <section id="contacts" className="mb-24">
      <h3 className="text-xl font-bold mb-6 flex flex-col">
        <span>Hire Us &</span>
        <span>Get Your Needs Ready</span>
      </h3>

      <ContactForm />
      <ContactSocials />
    </section>
  );
};

export default Contacts;
