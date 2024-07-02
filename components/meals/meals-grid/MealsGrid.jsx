import MealItem from "@/components/meals/meal-items/MealItem";
import Styles from "./MealsGrid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={Styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
