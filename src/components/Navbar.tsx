import {
  LayoutDashboard,
  Calendar,
  Music,
  CloudSun,
  BookImage,
} from "lucide-react";
import styles from "./Navbar.module.scss";
import Spotify from "./Spotify";

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
        <Music onClick={Spotify} />
      </button>
      <button>
        <CloudSun size={30} />
      </button>
      <button>
        <BookImage size={30} />
      </button>
      {/* //Dashboard - git commits, days til holidays, Reminders etc
        //Calendar
        //Spotify
        //Photo Album
        // */}
    </div>
  );
};

export default Navbar;
