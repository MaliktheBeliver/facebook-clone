import styles from "./Feed.module.css";

export default function Video() {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.postUserInfo}>
            <span className={styles.postUserName}>Facebook Watch</span>
            <span className={styles.postTime}>Trending Videos</span>
          </div>
        </div>
        <div className={styles.postContent}>
          <p>Discover the latest videos tailored just for you. This is a placeholder for the Video tab.</p>
        </div>
        <div style={{ backgroundColor: '#000', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px' }}>
          ▶ Play Video
        </div>
      </div>
    </section>
  );
}