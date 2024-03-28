import Nav from "../components/Nav";

const Footer = ({ productsCount }) => {
  return (
    <footer>
      <h2>Web Yazılım öğrenmek çok kolay!</h2>
      <Nav productsCount={productsCount} />
    </footer>
  );
};

export default Footer;
