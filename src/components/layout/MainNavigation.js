import { Link } from "react-router-dom";
import Styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
