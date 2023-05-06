import { ReactNode } from "react";
import { IconContext } from "react-icons";

import { FaIcons, FaToolbox, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { BsVectorPen } from "react-icons/bs";
import {
  MdGradient,
  MdColorLens,
  MdOutlineWeb,
  MdLibraryAdd,
} from "react-icons/md";

import s from "./AsideBar.module.scss";
import useQueryStore from "../../../store";

interface AsideItemProps {
  children: ReactNode;
  category: string;
  categoryId: number;
  handleClick: (id: number) => void;
}

function AsideItem({
  children,
  category,
  categoryId,
  handleClick,
}: AsideItemProps) {
  return (
    <li className={s.asideItem} onClick={() => handleClick(categoryId)}>
      {children} <span>{category}</span>
    </li>
  );
}

function AsideBar() {
  const setCategoryId = useQueryStore((s) => s.setCategoryId);

  const handleClick = (categoryId: number) => {
    setCategoryId(categoryId);
  };

  return (
    <aside className={s.aside}>
      <IconContext.Provider value={{ size: "30px" }}>
        <ul>
          <AsideItem category="Icons" categoryId={1} handleClick={handleClick}>
            <FaIcons />
          </AsideItem>
          <AsideItem
            category="CSS Generators"
            categoryId={2}
            handleClick={handleClick}
          >
            <DiCss3 />
          </AsideItem>
          <AsideItem
            category="Illustrations"
            categoryId={3}
            handleClick={handleClick}
          >
            <BsVectorPen />
          </AsideItem>
          <AsideItem
            category="Color Gradients"
            categoryId={5}
            handleClick={handleClick}
          >
            <MdGradient />
          </AsideItem>
          <AsideItem
            category="Color Palettes"
            categoryId={6}
            handleClick={handleClick}
          >
            <MdColorLens />
          </AsideItem>
          <AsideItem
            category="Sections"
            categoryId={7}
            handleClick={handleClick}
          >
            <MdOutlineWeb />
          </AsideItem>
          <AsideItem
            category="Libraries"
            categoryId={8}
            handleClick={handleClick}
          >
            <MdLibraryAdd />
          </AsideItem>
          <AsideItem
            category="React Libraries"
            categoryId={9}
            handleClick={handleClick}
          >
            <FaReact />
          </AsideItem>
          <AsideItem
            category="Other Tools"
            categoryId={10}
            handleClick={handleClick}
          >
            <FaToolbox />
          </AsideItem>
        </ul>
      </IconContext.Provider>
    </aside>
  );
}
export default AsideBar;
