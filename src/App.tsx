import styles from "./App.module.scss";
import { CardGrid, AsideBar, Searchbar, Title } from "./features";

function App() {
  return (
    <div className={styles.panel}>
      <Title />
      <AsideBar />
      <Searchbar />
      <CardGrid />
    </div>
  );
}

export default App;
