const Nav = ({ productsData }) => {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">Products [{productsData.length}]</a>
    </nav>
  );
};

export default Nav;
