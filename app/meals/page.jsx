import Link from "next/link";
import Styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={Styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={Styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your faviourite recipe and cook it yourself.It is easy and fun!
        </p>
        <p className={Styles.cta}>
          <Link href="/meals/share">Share your favourite Recipe</Link>
        </p>
      </header>
      <main className={Styles.main}>
        <Suspense
          fallback={<h2 className={Styles.loading}>Fetching Meals...</h2>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
