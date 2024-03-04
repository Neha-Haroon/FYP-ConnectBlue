import NavbarNew from "../components/Layout/NavbarNew";
import Footer from "../components/Layout/Footer";
import ContactForm from "../components/Contact/Contact";
const Contact = () => {
  
  return (
    <div>
      <NavbarNew activeHeading={3} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
