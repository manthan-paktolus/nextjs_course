import { Link } from "react-router-dom";
import Styles from "./Post.module.css";

const Post = ({ id, author, body }) => {
  return (
    <li className={Styles.post}>
      <Link to={id}>
        <p className={Styles.author}>{author}</p>
        <p className={Styles.text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
