import { MdPostAdd, MdMessage } from "react-icons/md";
import Styles from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={Styles.header}>
      <h1 className={Styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="create-post" className={Styles.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
