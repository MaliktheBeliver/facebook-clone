import styles from "./Feed.module.css";

export default function Gaming() {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.createPost}>
        <h2>Facebook Gaming</h2>
        <p style={{ color: 'var(--fb-text-secondary)', marginTop: '8px' }}>
          Play games, watch streams, and connect with gamers.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
          {["FarmVille", "8 Ball Pool", "Texas HoldEm Poker", "Candy Crush"].map((game, idx) => (
            <div key={idx} style={{ backgroundColor: 'var(--fb-bg)', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '60px', height: '60px', backgroundColor: '#333', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  🎮
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>{game}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--fb-text-secondary)' }}>{Math.floor(Math.random() * 50) + 1}M Players</p>
                </div>
              </div>
              <button style={{ backgroundColor: 'var(--fb-blue)', color: '#fff', border: 'none', padding: '8px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}