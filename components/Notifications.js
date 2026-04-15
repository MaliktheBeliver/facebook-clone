import styles from "./Feed.module.css";
import Image from "next/image";

export default function Notifications() {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.createPost}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2>Notifications</h2>
          <span style={{ color: 'var(--fb-blue)', cursor: 'pointer', fontSize: '14px' }}>Mark all as read</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 8px', borderRadius: '8px', cursor: 'pointer', backgroundColor: i <= 2 ? '#e7f3ff' : 'transparent' }}>
              <div style={{ position: 'relative' }}>
                <Image 
                  src={`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&q=80&sig=${i+30}`} 
                  alt="Friend" 
                  width={56} 
                  height={56} 
                  style={{ borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', backgroundColor: 'var(--fb-blue)', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '12px', border: '2px solid #fff' }}>
                  👍
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong>Friend {i}</strong> and <strong>3 others</strong> liked your photo.
                </p>
                <p style={{ fontSize: '13px', color: i <= 2 ? 'var(--fb-blue)' : 'var(--fb-text-secondary)', margin: '4px 0 0 0', fontWeight: i <= 2 ? 'bold' : 'normal' }}>
                  {i * 10} minutes ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}