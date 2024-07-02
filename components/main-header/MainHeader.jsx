import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Styles from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBackground from "../main-header-background/MainHeaderBackground";
import NavLink from "@/components/nav-links/NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={Styles.header}>
        <Link className={Styles.logo} href="/">
          <Image src={logoImg} alt="logo" priority />
          Food-lovers
        </Link>
        <nav className={Styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
