import { useEffect, useState } from 'react';
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
  { key: 'starter', label: 'STARTER', price: '$99',    cents: '.99', credits: '2.5K Credits', color: 'teal'   },
  { key: 'growth',  label: 'GROWTH',  price: '$749',   cents: '.99', credits: '25K Credits', color: 'indigo' },
  { key: 'scale',   label: 'SCALE',   price: '$7,499', cents: '.99', credits: '50K Credits', color: 'coral'  },
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

function CheckBadge() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden>
      <circle cx={12} cy={12} r={10} fill="var(--exp-green-strong)" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="#fff"
        strokeWidth={2.2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function readPaymentMethodAdded(): boolean {
  try {
    return localStorage.getItem('paymentMethodAdded') === 'true';
  } catch {
    return false;
  }
}

export function TopUpPage() {
  const [enabled, setEnabled] = useState(true);
  const [pkg, setPkg] = useState<PackageKey | null>(null);
  const [maxOcc, setMaxOcc] = useState<string>('Unlimited');
  const [customMax, setCustomMax] = useState<string>('');
  const [threshold, setThreshold] = useState<Threshold>(100);
  const [hasPaymentMethod, setHasPaymentMethod] = useState<boolean>(() => readPaymentMethodAdded());

  // Re-read when the tab regains focus (e.g. after the user saves a method in another tab)
  useEffect(() => {
    const sync = () => setHasPaymentMethod(readPaymentMethodAdded());
    window.addEventListener('focus', sync);
    document.addEventListener('visibilitychange', sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('focus', sync);
      document.removeEventListener('visibilitychange', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const isCustomMax = maxOcc === 'Custom';
  const canSave = pkg !== null;

  function clearAll() {
    setPkg(null);
    setThreshold(100);
    setMaxOcc('Unlimited');
    setCustomMax('');
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
          <p className={styles.sectionLabel}>Choose a package</p>
          <div className={styles.packages}>
            {PACKAGES.map((p) => {
              const selected = pkg === p.key;
              return (
                <div
                  key={p.key}
                  className={`${styles.pkgCard} ${selected ? styles.pkgCardSelected : ''}`}
                >
                  <div className={`${styles.pkgHeader} ${styles[`pkgHeader_${p.color}`]}`}>
                    {p.label}
                  </div>
                  <div className={styles.pkgBody}>
                    <div className={styles.pkgPrice}>
                      <span className={styles.pkgPriceMain}>{p.price}</span>
                      <span className={styles.pkgPriceTail}>
                        <span className={styles.pkgPriceCents}>{p.cents}</span>
                        <span className={styles.pkgPriceUnit}>/pkg</span>
                      </span>
                    </div>
                    <p className={styles.pkgCredits}>{p.credits}</p>
                  </div>
                  <div className={styles.pkgFooter}>
                    <button
                      type="button"
                      className={selected ? styles.pkgBtnSelected : styles.pkgBtn}
                      onClick={() => setPkg(selected ? null : p.key)}
                    >
                      {selected && <CheckIcon />}
                      <span>{selected ? 'Selected' : 'Select'}</span>
                      {selected && <span style={{ width: 14, flexShrink: 0 }} aria-hidden />}
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
              Refill up to
            </label>
            <select
              id="maxocc"
              className={styles.select}
              value={maxOcc}
              onChange={(e) => setMaxOcc(e.target.value)}
            >
              <option>Unlimited</option>
              <option>1 time</option>
              <option>2 times</option>
              <option>3 times</option>
              <option>5 times</option>
              <option>10 times</option>
              <option>Custom</option>
            </select>
            {isCustomMax && (
              <>
                <input
                  type="number"
                  min={1}
                  step={1}
                  placeholder="Enter a number"
                  value={customMax}
                  onChange={(e) => setCustomMax(e.target.value)}
                  aria-label="Custom maximum top-up occurrences"
                  className={styles.customInput}
                />
                <span className={styles.customInputSuffix}>times</span>
              </>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionLabel}>Top up when balance reaches</p>
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
          <a
            href="/add-payment-method"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.paymentLink}
          >
            {hasPaymentMethod && <CheckBadge />}
            <span>{hasPaymentMethod ? 'Update payment method' : 'Add payment method'}</span>
            <ArrowRight />
          </a>
        </section>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.clearBtn}
            onClick={clearAll}
          >
            Reset
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
