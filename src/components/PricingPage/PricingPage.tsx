import styles from './PricingPage.module.css';

type TierColor = 'teal' | 'indigo' | 'coral' | 'lime';

interface Tier {
  key: string;
  label: string;
  color: TierColor;
  price: string;
  credits: string;
}

const TIERS: Tier[] = [
  { key: 'starter', label: 'STARTER', color: 'teal',   price: '$250',   credits: '6,250 Credits' },
  { key: 'growth',  label: 'GROWTH',  color: 'indigo', price: '$600',   credits: '25K Credits' },
  { key: 'pro',     label: 'PRO',     color: 'coral',  price: '$1,250', credits: '50K Credits' },
  { key: 'scale',   label: 'SCALE',   color: 'lime',   price: '$7,500', credits: '500K Credits' },
];

const CUSTOM_FEATURES_LEFT  = ['Search preview option', 'Additional QPM', 'Volume discounts'];
const CUSTOM_FEATURES_RIGHT = ['Dedicated CSM', 'Professional services', 'Customized data signals'];

const BUNDLES: { label: string; cost: string; color: string }[] = [
  { label: 'Generate',    cost: '1 CREDIT',    color: 'var(--exp-lime)' },
  { label: 'Enrichments', cost: '1-5 CREDITS', color: 'var(--exp-indigo)' },
  { label: 'Events',      cost: '1 CREDIT',    color: 'var(--exp-coral)' },
  { label: 'Custom Data', cost: '5 CREDITS',   color: 'var(--exp-blush)' },
];

function SparkleIcon({ color }: { color: string }) {
  return (
    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 0 L12.6 8.4 Q12.9 9.6 14 9.9 L22 11 L14 12.1 Q12.9 12.4 12.6 13.6 L11 22 L9.4 13.6 Q9.1 12.4 8 12.1 L0 11 L8 9.9 Q9.1 9.6 9.4 8.4 Z" fill={color} />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden className={styles.customArrow}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero */}
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Start building with Explorium credits today</h1>
          <p className={styles.heroSubtitle}>
            Build your agents with world-class business data
            <br />
            all in one place, with pay as you go flexibility
          </p>
        </header>

        {/* Tier grid */}
        <section className={styles.tiers} aria-label="Credit packages">
          {TIERS.map((tier) => (
            <article key={tier.key} className={styles.tierCard}>
              <div className={`${styles.tierHeader} ${styles[`tierHeader_${tier.color}`]}`}>
                <span className={styles.tierLabel}>{tier.label}</span>
              </div>
              <div className={styles.tierBody}>
                <div className={styles.priceRow}>
                  <span className={styles.priceAmount}>{tier.price}</span>
                  <span className={styles.pricePer}>/pkg</span>
                </div>
                <p className={styles.tierCredits}>{tier.credits}</p>
              </div>
              <div className={styles.tierFooter}>
                <button type="button" className={styles.purchaseBtn}>Purchase</button>
              </div>
            </article>
          ))}
        </section>

        {/* Custom row */}
        <section className={styles.customRow} aria-label="Custom plan">
          <div className={styles.customAccent} aria-hidden />
          <div className={styles.customInner}>
            <h2 className={styles.customTitle}>Custom</h2>
            <ul className={styles.customFeatures}>
              {CUSTOM_FEATURES_LEFT.map((f) => (
                <li key={f} className={styles.customFeature}>
                  <ArrowRightIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <ul className={styles.customFeatures}>
              {CUSTOM_FEATURES_RIGHT.map((f) => (
                <li key={f} className={styles.customFeature}>
                  <ArrowRightIcon />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button type="button" className={styles.purchaseBtn}>Talk to Us</button>
          </div>
        </section>

        {/* Fine print */}
        <p className={styles.finePrint}>
          All credits are valid for 12 months and cannot be rolled over once expired.
        </p>
      </div>

      {/* Dark data-bundles panel */}
      <section className={styles.bundlesPanel} aria-label="Data bundles and costs">
        <div className={styles.bundlesInner}>
          <div className={styles.bundlesText}>
            <h2 className={styles.bundlesTitle}>Data bundles and costs</h2>
            <p className={styles.bundlesSubtitle}>
              Get access to all your data in one spot.
              <br />
              Preview all available data bundles and associated costs.
            </p>
            <ul className={styles.bundlesList}>
              {BUNDLES.map((b) => (
                <li key={b.label} className={styles.bundleItem}>
                  <SparkleIcon color={b.color} />
                  <span className={styles.bundleText_inline}>
                    <span className={styles.bundleLabel}>{b.label} / </span>
                    <span className={styles.bundleCost}>{b.cost}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button type="button" className={styles.creditDetailsBtn}>Credit Details</button>
        </div>
      </section>
    </div>
  );
}
