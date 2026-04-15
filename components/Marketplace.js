import styles from "./Feed.module.css";

export default function Marketplace() {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.createPost}>
        <h2>Marketplace</h2>
        <p style={{ color: 'var(--fb-text-secondary)', marginTop: '8px' }}>
          Buy and sell items locally or shipped.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ border: '1px solid var(--fb-border)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ height: '150px', backgroundColor: 'var(--fb-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Item Image
              </div>
              <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '4px' }}>Item {i}</h3>
                <p style={{ fontWeight: 'bold' }}>$2{i}.00</p>
                <p style={{ fontSize: '12px', color: 'var(--fb-text-secondary)' }}>San Francisco, CA</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}