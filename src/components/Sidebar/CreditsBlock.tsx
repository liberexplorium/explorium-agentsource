import styles from './Sidebar.module.css';

const REMAINING = 4_246_113;
const TOTAL = 10_001_010;

export function CreditsBlock({ onUpgrade }: { onUpgrade: () => void }) {
  const pct = (REMAINING / TOTAL) * 100;
  const fmt = (n: number) => n.toLocaleString('en-US');

  return (
    <div className={styles.credits}>
      <div className={styles.creditsHeader}>
        <span className={styles.caption}>Credits remaining</span>
        <span className={styles.caption}>Total</span>
      </div>
      <div className={styles.creditsValues}>
        <span className={styles.creditsNum}>
          <span className={styles.creditsDot} aria-hidden />
          {fmt(REMAINING)}
        </span>
        <span className={styles.creditsTotal}>{fmt(TOTAL)}</span>
      </div>
      <div className={styles.track}>
        <div className={styles.trackFill} style={{ width: `${pct}%` }} />
      </div>
      <div className={styles.expiry}>
        Credits expire in 1233 days – Sep 25, 2029
      </div>
      <button type="button" className={styles.upgrade} onClick={onUpgrade}>Upgrade Package</button>
    </div>
  );
}
