import styles from "./App.module.scss";
import Navbar from "./features/ui/Navbar/Navbar";
import Searchbar from "./features/ui/Searchbar/Searchbar";

function App() {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>
        <h1>WebDevStuff</h1>
      </div>
      <Navbar />
      <Searchbar />
      <main>main</main>
    </div>
  );
}

export default App;
