import Nav from "../components/Nav";

const Footer = ({ productsData }) => {
  return (
    <footer>
      <h2>Web Yazılım öğrenmek çok kolay!</h2>
      <Nav productsData={productsData} />
    </footer>
  );
};

export default Footer;
