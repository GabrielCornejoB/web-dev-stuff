import useQueryStore from "../../../store";
import s from "./Title.module.scss";

function Title() {
  const setCategoryId = useQueryStore((s) => s.setCategoryId);

  return (
    <div className={s.title}>
      <h1 onClick={() => setCategoryId(undefined)}>Web Dev Stuff</h1>
    </div>
  );
}
export default Title;
