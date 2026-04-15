import Image from "next/image";
import { MonitorPlay, Store, Users, Gamepad2 } from "lucide-react";
import styles from "./LeftSidebar.module.css";

export default function LeftSidebar({ userImage, activeTab, setActiveTab }) {
  return (
    <aside className={styles.sidebar}>
      <div 
        className={`${styles.sidebarItem} ${activeTab === 'profile' ? styles.sidebarItemActive : ''}`}
        onClick={() => setActiveTab('profile')}
      >
        <Image
          src={userImage}
          alt="Profile"
          width={40}
          height={40}
          className={styles.profilePic}
        />
        <span>John Doe</span>
      </div>
      <div 
        className={`${styles.sidebarItem} ${activeTab === 'friends' ? styles.sidebarItemActive : ''}`}
        onClick={() => setActiveTab('friends')}
      >
        <Users className={styles.sidebarIcon} size={28} />
        <span>Find friends</span>
      </div>
      <div 
        className={`${styles.sidebarItem} ${activeTab === 'video' ? styles.sidebarItemActive : ''}`}
        onClick={() => setActiveTab('video')}
      >
        <MonitorPlay className={styles.sidebarIcon} size={28} />
        <span>Video</span>
      </div>
      <div 
        className={`${styles.sidebarItem} ${activeTab === 'marketplace' ? styles.sidebarItemActive : ''}`}
        onClick={() => setActiveTab('marketplace')}
      >
        <Store className={styles.sidebarIcon} size={28} />
        <span>Marketplace</span>
      </div>
      <div 
        className={`${styles.sidebarItem} ${activeTab === 'gaming' ? styles.sidebarItemActive : ''}`}
        onClick={() => setActiveTab('gaming')}
      >
        <Gamepad2 className={styles.sidebarIcon} size={28} />
        <span>Gaming</span>
      </div>
    </aside>
  );
}
