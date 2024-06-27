import Card from "../ui/Card";
import Styles from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  return (
    <li className={Styles.item}>
      <Card>
        <div className={Styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={Styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={Styles.actions}>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
