import { Link } from "react-router-dom";

const Nav = ({ productsCount }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products [{productsCount}]</Link>
      <Link to="/counter">Counter</Link>
    </nav>
  );
};

export default Nav;
