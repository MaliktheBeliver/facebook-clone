import styles from "./Feed.module.css";

export default function Groups() {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.createPost}>
        <h2>Your Groups</h2>
        <p style={{ color: 'var(--fb-text-secondary)', marginTop: '8px' }}>
          Discover and join groups that share your interests.
        </p>

        <div style={{ marginTop: '20px' }}>
          {["React Developers", "Next.js Enthusiasts", "Web Design Masters", "Local Community Board"].map((group, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--fb-border)' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--fb-blue)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
                {group.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{group}</h3>
                <p style={{ fontSize: '13px', color: 'var(--fb-text-secondary)' }}>{idx * 12 + 5}k members</p>
              </div>
              <button style={{ backgroundColor: 'var(--fb-blue)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}