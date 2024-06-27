import Styles from "./Card.module.css";
const Card = ({ children }) => {
  return <div className={Styles.card}>{children}</div>;
};

export default Card;
