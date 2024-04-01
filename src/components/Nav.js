import { Link } from "./Link";

const Nav = ({ productsCount }) => {
  return (
    <nav>
      <Link href="#">Home</Link>
      <a href="#">Products [{productsCount}]</a>
    </nav>
  );
};

export default Nav;
