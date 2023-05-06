import { ReactNode } from "react";
import { Category } from "../../../supabase/schema";
import s from "./AsideItem.module.scss";

interface AsideItemProps {
  children: ReactNode;
  category: Category;
  isActive: boolean;
  handleClick: (id: number) => void;
}

function AsideItem({
  children,
  category,
  isActive,
  handleClick,
}: AsideItemProps) {
  return (
    <li
      className={`${s.asideItem} ${isActive && s.active}`}
      onClick={() => handleClick(category.id)}
    >
      {children} <span>{category.category}</span>
    </li>
  );
}
export default AsideItem;
