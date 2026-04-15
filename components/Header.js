import Image from "next/image";
import {
  Search,
  Home as HomeIcon,
  MonitorPlay,
  Store,
  Users,
  Gamepad2,
  Menu,
  MessageCircle,
  Bell,
} from "lucide-react";
import styles from "./Header.module.css";

export default function Header({ userImage, activeTab, setActiveTab }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <svg className={styles.logo} viewBox="0 0 36 36" fill="currentColor">
          <path
            d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
            fill="#1877F2"
          />
          <path
            d="M25 12h-5v-3c0-1.4.9-2 2-2h3V2h-3c-2.8 0-5 2.2-5 5v5h-3v5h3v14h5V17h4l1-5z"
            fill="#fff"
          />
        </svg>
        <div className={styles.searchBox}>
          <Search size={20} />
          <input
            type="text"
            placeholder="Search Facebook"
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.headerMiddle}>
        <div
          className={`${styles.navIcon} ${activeTab === "home" ? styles.navIconActive : ""}`}
          onClick={() => setActiveTab("home")}
        >
          <HomeIcon size={28} />
        </div>
        <div
          className={`${styles.navIcon} ${activeTab === "video" ? styles.navIconActive : ""}`}
          onClick={() => setActiveTab("video")}
        >
          <MonitorPlay size={28} />
        </div>
        <div
          className={`${styles.navIcon} ${activeTab === "marketplace" ? styles.navIconActive : ""}`}
          onClick={() => setActiveTab("marketplace")}
        >
          <Store size={28} />
        </div>
        <div
          className={`${styles.navIcon} ${activeTab === "groups" ? styles.navIconActive : ""}`}
          onClick={() => setActiveTab("groups")}
        >
          <Users size={28} />
        </div>
        <div
          className={`${styles.navIcon} ${activeTab === "gaming" ? styles.navIconActive : ""}`}
          onClick={() => setActiveTab("gaming")}
        >
          <Gamepad2 size={28} />
        </div>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.iconBtn}>
          <Menu size={20} />
        </div>
        <div className={styles.iconBtn}>
          <MessageCircle size={20} />
        </div>
        <div className={styles.iconBtn}>
          <Bell size={20} />
        </div>
        <Image
          src={userImage}
          alt="Profile"
          width={40}
          height={40}
          className={styles.profilePic}
        />
      </div>
    </header>
  );
}
