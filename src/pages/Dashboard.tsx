import Reminders from "../components/Reminders";
import Spotify from "../components/Spotify";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Reminders />
      <Spotify />
    </div>
  );
};

export default Dashboard;
