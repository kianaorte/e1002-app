import styles from "./App.module.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles.einkScreen}>
      <Navbar />
    </div>
  );
}

export default App;
