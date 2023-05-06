import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { GoPaintcan } from "react-icons/go";
import s from "./Searchbar.module.scss";
import { useRef, useState } from "react";
import useQueryStore from "../../../store";

const themes = [
  "purpleTheme",
  "redTheme",
  "greenTheme",
  "blueTheme",
  "pinkTheme",
  "orangeTheme",
];

function Searchbar() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useQueryStore((s) => s.setSearchtext);

  const [themeIndex, setThemeIndex] = useState(0);
  document.getElementsByTagName("body")[0].className = themes[themeIndex];
  const handleClick = () => {
    setThemeIndex(themeIndex + 1 == themes.length ? 0 : themeIndex + 1);
  };

  return (
    <div className={s.searchbar}>
      <IconContext.Provider value={{ size: "25px" }}>
        <form
          className={s.searchInput}
          onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
              setSearchText(ref.current.value);
            }
          }}
        >
          <BiSearch className={s.searchIcon} />
          <input ref={ref} placeholder="Search page by name" />
        </form>

        <div className={s.toggleTheme} onClick={handleClick}>
          <GoPaintcan />
          <span>Toggle Theme</span>
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default Searchbar;
