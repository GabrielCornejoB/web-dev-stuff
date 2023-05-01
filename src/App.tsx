import styles from "./App.module.scss";
import { CardGrid, Navbar, Searchbar } from "./features";

function App() {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>
        <h1>WebDevStuff</h1>
      </div>
      <Navbar />
      <Searchbar />
      <CardGrid />
    </div>
  );
}

export default App;
