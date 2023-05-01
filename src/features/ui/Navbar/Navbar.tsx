import { ReactNode } from "react";
import { IconContext } from "react-icons";

import { FaIcons, FaToolbox, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { BsVectorPen } from "react-icons/bs";
import { ImFont } from "react-icons/im";
import { MdGradient, MdColorLens, MdOutlineWeb } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";

import s from "./Navbar.module.scss";

interface NavItemProps {
  children: ReactNode;
  category: string;
}

function NavItem({ children, category }: NavItemProps) {
  return (
    <li className={s.navItem}>
      {children} <span>{category}</span>
    </li>
  );
}

function Navbar() {
  return (
    <nav className={s.nav}>
      <IconContext.Provider value={{ size: "30px" }}>
        <ul>
          <NavItem category="Icons">
            <FaIcons />
          </NavItem>
          <NavItem category="CSS Generators">
            <DiCss3 />
          </NavItem>
          <NavItem category="Illustrations">
            <BsVectorPen />
          </NavItem>
          <NavItem category="Fonts">
            <ImFont />
          </NavItem>
          <NavItem category="Color Gradients">
            <MdGradient />
          </NavItem>
          <NavItem category="Color Palettes">
            <MdColorLens />
          </NavItem>
          <NavItem category="Sections">
            <MdOutlineWeb />
          </NavItem>
          <NavItem category="JS Libraries">
            <IoLogoJavascript />
          </NavItem>
          <NavItem category="React Tools">
            <FaReact />
          </NavItem>
          <NavItem category="Other Tools">
            <FaToolbox />
          </NavItem>
        </ul>
      </IconContext.Provider>
    </nav>
  );
}
export default Navbar;
