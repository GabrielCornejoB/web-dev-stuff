import useQueryStore from "../../../store";
import s from "./Title.module.scss";

function Title() {
  const resetQuery = useQueryStore((s) => s.resetQuery);

  return (
    <div className={s.title}>
      <h1 onClick={resetQuery}>Web Dev Stuff</h1>
    </div>
  );
}
export default Title;
