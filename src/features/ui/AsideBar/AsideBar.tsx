import useCategories from "./useCategories";
import useQueryStore from "../../../store";

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
import AsideItem from "../AsideItem/AsideItem";
import s from "./AsideBar.module.scss";

const icons = [
  <FaIcons />,
  <DiCss3 />,
  <BsVectorPen />,
  <MdGradient />,
  <MdColorLens />,
  <MdOutlineWeb />,
  <MdLibraryAdd />,
  <FaReact />,
  <FaToolbox />,
];

function AsideBar() {
  const setCategoryId = useQueryStore((s) => s.setCategoryId);
  const selectedCategory = useQueryStore((s) => s.linkQuery.categoryId);
  const { data, error } = useCategories();

  const handleClick = (categoryId: number) => {
    setCategoryId(categoryId);
  };

  if (error) return <p>error</p>;
  return (
    <aside className={s.aside}>
      <IconContext.Provider value={{ size: "30px" }}>
        {data?.map((category, index) => (
          <AsideItem
            key={category.id}
            category={category}
            isActive={selectedCategory == category.id}
            handleClick={() => handleClick(category.id)}
          >
            {icons[index]}
          </AsideItem>
        ))}
      </IconContext.Provider>
    </aside>
  );
}
export default AsideBar;
