import Navigation from "../navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="container-default">{children}</main>
    </>
  );
};

export default Layout;
