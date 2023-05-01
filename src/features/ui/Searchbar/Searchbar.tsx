import { useState } from "react";
import { IconContext } from "react-icons";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import s from "./Searchbar.module.scss";

function Searchbar() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={s.searchbar}>
      <IconContext.Provider value={{ size: "25px" }}>
        <div className={s.searchInput}>
          <BiSearch className={s.searchIcon} />
          <input />
        </div>

        <div
          className={s.toggleTheme}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
          <span>{isDarkMode ? "Dark Theme" : "Light Theme"}</span>
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default Searchbar;
