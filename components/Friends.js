import Image from "next/image";
import styles from "./Feed.module.css";

export default function Friends({ userImage }) {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.createPost}>
        <h2>Friend Requests</h2>
        <p style={{ color: 'var(--fb-text-secondary)', marginTop: '8px' }}>
          People who want to be your friend.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{ border: '1px solid var(--fb-border)', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '200px', position: 'relative' }}>
                <Image 
                  src={`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&q=80&sig=${i+10}`} 
                  alt="Friend Request" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>New Person {i}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button style={{ backgroundColor: 'var(--fb-blue)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
                    Confirm
                  </button>
                  <button style={{ backgroundColor: 'var(--fb-bg)', color: 'var(--fb-text-primary)', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', width: '100%' }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}