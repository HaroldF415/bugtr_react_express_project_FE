import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Budgtr</li>
        <li>
          <Link to="/transactions/new">New Transaction</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
