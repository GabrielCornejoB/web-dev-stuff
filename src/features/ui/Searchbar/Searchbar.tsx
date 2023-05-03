import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { GoPaintcan } from "react-icons/go";
import s from "./Searchbar.module.scss";
import { useState } from "react";

const themes = [
  "purpleTheme",
  "redTheme",
  "greenTheme",
  "blueTheme",
  "pinkTheme",
  "orangeTheme",
];

function Searchbar() {
  const [themeIndex, setThemeIndex] = useState(0);
  document.getElementsByTagName("body")[0].className = themes[themeIndex];
  const handleClick = () => {
    setThemeIndex(themeIndex + 1 == themes.length ? 0 : themeIndex + 1);
  };
  return (
    <div className={s.searchbar}>
      <IconContext.Provider value={{ size: "25px" }}>
        <div className={s.searchInput}>
          <BiSearch className={s.searchIcon} />
          <input />
        </div>
        <div className={s.toggleTheme} onClick={handleClick}>
          <GoPaintcan />
          <span>Toggle Theme</span>
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default Searchbar;
