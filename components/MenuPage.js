import styles from "./Feed.module.css";
import { MonitorPlay, Store, Users, Gamepad2, Flag, Bookmark, Calendar, Briefcase } from "lucide-react";

export default function MenuPage() {
  const menuItems = [
    { icon: <Users size={24} color="var(--fb-blue)" />, label: "Friends", desc: "Search for friends or people you may know" },
    { icon: <MonitorPlay size={24} color="#E53935" />, label: "Video", desc: "A video destination personalized to your interests" },
    { icon: <Store size={24} color="#43A047" />, label: "Marketplace", desc: "Buy and sell in your community" },
    { icon: <Gamepad2 size={24} color="#1E88E5" />, label: "Gaming", desc: "Play your favorite games" },
    { icon: <Flag size={24} color="#FF9800" />, label: "Pages", desc: "Discover and connect with businesses" },
    { icon: <Bookmark size={24} color="#9C27B0" />, label: "Saved", desc: "Find posts, photos and videos that you saved for later" },
    { icon: <Calendar size={24} color="#E91E63" />, label: "Events", desc: "Organize or find events and other things to do" },
    { icon: <Briefcase size={24} color="#795548" />, label: "Jobs", desc: "Find a job that's right for you" },
  ];

  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.createPost}>
        <h2>Menu</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginTop: '20px' }}>
          {menuItems.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'var(--fb-bg)', transition: 'background-color 0.2s' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--fb-white)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>{item.label}</h3>
                <p style={{ fontSize: '12px', color: 'var(--fb-text-secondary)', lineHeight: '1.2' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}