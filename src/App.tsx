import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.panel}>
      <div className={styles.title}>
        <h1>WebDevStuff</h1>
      </div>
      <nav>nav</nav>
      <div className={styles.searchbar}>search</div>
      <main>main</main>
    </div>
  );
}

export default App;
