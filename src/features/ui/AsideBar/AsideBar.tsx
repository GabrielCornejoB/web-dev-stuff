import { ReactNode } from "react";
import { IconContext } from "react-icons";

import { FaIcons, FaToolbox, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { BsVectorPen } from "react-icons/bs";
import { ImFont } from "react-icons/im";
import {
  MdGradient,
  MdColorLens,
  MdOutlineWeb,
  MdLibraryAdd,
} from "react-icons/md";

import s from "./AsideBar.module.scss";

interface AsideItemProps {
  children: ReactNode;
  category: string;
}

function AsideItem({ children, category }: AsideItemProps) {
  return (
    <li className={s.asideItem}>
      {children} <span>{category}</span>
    </li>
  );
}

function AsideBar() {
  return (
    <aside className={s.aside}>
      <IconContext.Provider value={{ size: "30px" }}>
        <ul>
          <AsideItem category="Icons">
            <FaIcons />
          </AsideItem>
          <AsideItem category="CSS Generators">
            <DiCss3 />
          </AsideItem>
          <AsideItem category="Illustrations">
            <BsVectorPen />
          </AsideItem>
          <AsideItem category="Fonts">
            <ImFont />
          </AsideItem>
          <AsideItem category="Color Gradients">
            <MdGradient />
          </AsideItem>
          <AsideItem category="Color Palettes">
            <MdColorLens />
          </AsideItem>
          <AsideItem category="Sections">
            <MdOutlineWeb />
          </AsideItem>
          <AsideItem category="Libraries">
            <MdLibraryAdd />
          </AsideItem>
          <AsideItem category="React Libraries">
            <FaReact />
          </AsideItem>
          <AsideItem category="Other Tools">
            <FaToolbox />
          </AsideItem>
        </ul>
      </IconContext.Provider>
    </aside>
  );
}
export default AsideBar;
