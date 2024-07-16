import Link from "next/link";
import NavLink from "@/components/nav-links/NavLink";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">News-Show</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
