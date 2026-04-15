import Image from "next/image";
import styles from "./RightSidebar.module.css";

export default function RightSidebar({ userImage }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.contactsTitle}>Contacts</div>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div key={i} className={styles.sidebarItem}>
          <Image
            src={userImage}
            alt="Friend"
            width={32}
            height={32}
            className={styles.profilePic}
          />
          <span>Friend {i}</span>
        </div>
      ))}
    </aside>
  );
}