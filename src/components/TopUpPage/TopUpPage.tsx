import { useState } from 'react';
import styles from './TopUpPage.module.css';

type PackageKey = 'starter' | 'growth' | 'scale';
type Threshold = 100 | 200 | 300 | 400 | 500;

const PACKAGES: Array<{
  key: PackageKey;
  label: string;
  price: string;
  cents: string;
  credits: string;
  color: 'teal' | 'indigo' | 'coral';
}> = [
  { key: 'starter', label: 'STARTER', price: '99',    cents: '.99', credits: '6K Credits',  color: 'teal'   },
  { key: 'growth',  label: 'GROWTH',  price: '749',   cents: '.99', credits: '25K Credits', color: 'indigo' },
  { key: 'scale',   label: 'SCALE',   price: '7,499', cents: '.99', credits: '50K Credits', color: 'coral'  },
];

const THRESHOLDS: Threshold[] = [100, 200, 300, 400, 500];

function CheckIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TopUpPage() {
  const [enabled, setEnabled] = useState(true);
  const [pkg, setPkg] = useState<PackageKey | null>(null);
  const [maxOcc, setMaxOcc] = useState<string>('Unlimited');
  const [threshold, setThreshold] = useState<Threshold>(100);

  const canSave = pkg !== null;

  function clearAll() {
    setPkg(null);
    setThreshold(100);
    setMaxOcc('Unlimited');
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Top-Up Credits</h1>
        <div className={styles.toggle} role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={!enabled}
            className={!enabled ? styles.toggleActive : styles.toggleSeg}
            onClick={() => setEnabled(false)}
          >
            Disable
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={enabled}
            className={enabled ? styles.toggleActive : styles.toggleSeg}
            onClick={() => setEnabled(true)}
          >
            Enable
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      <fieldset
        className={styles.body}
        disabled={!enabled}
        aria-disabled={!enabled}
      >
        <section className={styles.section}>
          <p className={styles.sectionLabel}>Select the package you would like to top-up</p>
          <div className={styles.packages}>
            {PACKAGES.map((p) => {
              const selected = pkg === p.key;
              return (
                <div key={p.key} className={styles.pkgCard}>
                  <div className={`${styles.pkgHeader} ${styles[`pkgHeader_${p.color}`]}`}>
                    {p.label}
                  </div>
                  <div className={styles.pkgBody}>
                    <div className={styles.pkgPrice}>
                      <span className={styles.pkgPriceCurrency}>$</span>
                      <span className={styles.pkgPriceMain}>{p.price}</span>
                      <span className={styles.pkgPriceTail}>
                        <span className={styles.pkgPriceCents}>{p.cents}</span>
                        <span className={styles.pkgPriceUnit}>/pkg</span>
                      </span>
                    </div>
                    <p className={styles.pkgCredits}>{p.credits}</p>
                    <button
                      type="button"
                      className={selected ? styles.pkgBtnSelected : styles.pkgBtn}
                      onClick={() => setPkg(selected ? null : p.key)}
                    >
                      {selected && <CheckIcon />}
                      <span>{selected ? 'Selected Package' : 'Select Package'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.inlineRow}>
            <label htmlFor="maxocc" className={styles.inlineLabel}>
              Select the maximum top-up ocurrences
            </label>
            <select
              id="maxocc"
              className={styles.select}
              value={maxOcc}
              onChange={(e) => setMaxOcc(e.target.value)}
            >
              <option>Unlimited</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>5</option>
              <option>10</option>
            </select>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Threshold</p>
          <p className={styles.sectionDesc}>
            Define the remaining credit balance in which the automatic top-up triggers
          </p>
          <div className={styles.thresholdGroup}>
            {THRESHOLDS.map((t) => (
              <button
                key={t}
                type="button"
                className={threshold === t ? styles.thresholdActive : styles.thresholdBtn}
                onClick={() => setThreshold(t)}
              >
                {t} credits
              </button>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Payment Method</p>
          <a href="#" className={styles.paymentLink}>
            <span>Set payment method</span>
            <ArrowRight />
          </a>
        </section>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.clearBtn}
            onClick={clearAll}
          >
            Clear
          </button>
          <button
            type="button"
            className={canSave ? styles.saveBtn : styles.saveBtnDisabled}
            disabled={!canSave}
          >
            Save
          </button>
        </div>
      </fieldset>
    </div>
  );
}
