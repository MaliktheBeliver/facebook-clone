import styles from "./Feed.module.css";
import Image from "next/image";

export default function Messages({ userImage }) {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.createPost}>
        <h2>Chats</h2>
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.2s' }}>
              <Image 
                src={`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&q=80&sig=${i+20}`} 
                alt="Friend" 
                width={50} 
                height={50} 
                style={{ borderRadius: '50%', objectFit: 'cover' }} 
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>Friend {i}</h3>
                <p style={{ fontSize: '13px', color: 'var(--fb-text-secondary)' }}>You: That sounds great! · {i}h</p>
              </div>
              <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--fb-blue)', borderRadius: '50%', display: i === 1 ? 'block' : 'none' }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}