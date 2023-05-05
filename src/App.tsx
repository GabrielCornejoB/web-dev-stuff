import styles from "./App.module.scss";
import { CardGrid, AsideBar, Searchbar } from "./features";

function App() {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>
        <h1>Web Dev Stuff</h1>
      </div>
      <AsideBar />
      <Searchbar />
      <CardGrid />
    </div>
  );
}

export default App;
