import { Link } from "react-router-dom";
import Styles from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

const MainNavigation = () => {
  const favouritesCtx = useContext(FavouritesContext);
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
            <Link to="/favourites">
              My Favourites
              <span className={Styles.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
