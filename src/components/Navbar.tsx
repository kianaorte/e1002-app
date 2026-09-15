import { LayoutDashboard, Calendar, Music } from "lucide-react";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navContainer}>
      <button>
        <LayoutDashboard size={30} />
      </button>
      <button>
        <Calendar size={30} />
      </button>
      <button>
        <Music size={30} />
      </button>
      {/* //Dashboard - git commits, days til holidays etc
        //Calendar
        //Spotify
        // */}
    </div>
  );
};

export default Navbar;
