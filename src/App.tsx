import styles from "./App.module.scss";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className={styles.einkScreen}>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
