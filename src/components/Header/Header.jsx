import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <section className='header'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Add Data</Link>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
