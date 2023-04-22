import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Budgter</Link>
        </li>
        <li>
          <Link to="/transactions/new">
            <button>New Transaction</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
