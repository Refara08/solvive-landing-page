import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="container-default">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
