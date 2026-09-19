import Reminders from "../components/Reminders";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Reminders />
    </div>
  );
};

export default Dashboard;
