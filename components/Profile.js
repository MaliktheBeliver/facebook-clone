import Image from "next/image";
import styles from "./Feed.module.css";
import Feed from "./Feed";

export default function Profile({ userImage, dummyPostImage }) {
  return (
    <section className={styles.feed} style={{ marginTop: '20px' }}>
      <div style={{ backgroundColor: 'var(--fb-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
        {/* Cover Photo */}
        <div style={{ height: '250px', backgroundColor: '#a0b3c6', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: '-40px', left: '32px', border: '4px solid var(--fb-white)', borderRadius: '50%', width: '130px', height: '130px', overflow: 'hidden', backgroundColor: '#fff' }}>
            <Image src={userImage} alt="Profile" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
        
        {/* Profile Info */}
        <div style={{ padding: '60px 32px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--fb-border)' }}>
          <div>
            <h1 style={{ fontSize: '32px', margin: '0' }}>John Doe</h1>
            <p style={{ color: 'var(--fb-text-secondary)', margin: '4px 0 0', fontWeight: 'bold' }}>1.2K Friends</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ backgroundColor: 'var(--fb-blue)', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              + Add to Story
            </button>
            <button style={{ backgroundColor: 'var(--fb-bg)', color: 'var(--fb-text-primary)', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      
      {/* Feed on Profile */}
      <Feed userImage={userImage} dummyPostImage={dummyPostImage} />
    </section>
  );
}