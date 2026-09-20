import Calendar from "../components/Calendar";
import Reminders from "../components/Reminders";
import Spotify from "../components/Spotify";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.tasks}>
        <Calendar />
        <Reminders />
      </div>
      <div>
        <Spotify />
      </div>
    </div>
  );
};

export default Dashboard;
