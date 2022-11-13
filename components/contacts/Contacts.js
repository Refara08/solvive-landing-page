import ContactForm from "./ContactForm";
import ContactSocials from "./ContactSocials";

const Contacts = () => {
  return (
    <section id="contacts" className="mb-24 md:mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <ContactForm />
        <ContactSocials />
      </div>
    </section>
  );
};

export default Contacts;
