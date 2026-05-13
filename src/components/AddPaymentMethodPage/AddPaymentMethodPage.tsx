import { useState } from 'react';
import styles from './AddPaymentMethodPage.module.css';

function BackArrow() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M19 12H5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M11 6l-6 6 6 6" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx={12} cy={12} r={11} />
      <path d="M10 8l6 4-6 4z" fill="#22c55e" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v8" />
      <path d="M9 10v8" />
      <path d="M15 10v8" />
      <path d="M19 10v8" />
      <path d="M3 20h18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <circle cx={12} cy={8} r={4} />
      <path d="M4 21c1-4 5-6 8-6s7 2 8 6" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <path d="M3 7l1.5-4h15L21 7" />
      <path d="M4 7v13h16V7" />
      <path d="M8 12h8" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
      <rect x={2} y={6} width={20} height={13} rx={2} />
      <path d="M2 10h20" />
    </svg>
  );
}

function CvcIcon() {
  return (
    <svg width={20} height={14} viewBox="0 0 28 18" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden>
      <rect x={1} y={1} width={26} height={16} rx={2} />
      <text x={14} y={13} textAnchor="middle" fontSize={9} fill="currentColor" stroke="none" fontFamily="monospace">123</text>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function AddPaymentMethodPage() {
  const [country, setCountry] = useState('United States');
  const [state, setState] = useState('');

  return (
    <div className={styles.page}>
      {/* Header strip */}
      <div className={styles.headerStrip}>
        <div className={styles.headerInner}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => window.close()}
            aria-label="Go back"
          >
            <BackArrow />
          </button>
          <div className={styles.brandLogos} aria-hidden>
            <span className={styles.brandLogoExplorium}>
              <img src="/favicon.png" alt="" width={28} height={28} />
            </span>
            <span className={styles.brandLogoVibe}>√</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Stripe Link button */}
        <button type="button" className={styles.linkBtn}>
          <span className={styles.linkPlay}><PlayIcon /></span>
          <span className={styles.linkLabel}>link</span>
          <span className={styles.linkSep} />
          <span className={styles.linkBank}><BankIcon /></span>
          <span className={styles.linkAcct}>6789</span>
        </button>

        <div className={styles.orRow}>
          <span className={styles.orLine} />
          <span className={styles.orText}>OR</span>
          <span className={styles.orLine} />
        </div>

        {/* Enter payment details */}
        <h2 className={styles.sectionTitle}>Enter payment details</h2>

        <div className={styles.inputGroup}>
          <div className={styles.inputRow}>
            <span className={styles.inputIcon}><MailIcon /></span>
            <input
              className={styles.inputField}
              type="email"
              defaultValue="user.name@domain.com"
            />
          </div>
          <div className={styles.inputRow}>
            <span className={styles.inputIcon}><UserIcon /></span>
            <input className={styles.inputField} type="text" placeholder="Full name" />
          </div>
          <div className={styles.inputRow}>
            <span className={styles.inputIcon}><StoreIcon /></span>
            <input className={styles.inputField} type="text" placeholder="Business name" />
            <span className={styles.optionalTag}>Optional</span>
          </div>
        </div>

        {/* Save payment information */}
        <h2 className={styles.sectionTitle}>Save payment information</h2>

        <div className={styles.cardPanel}>
          <div className={styles.cardPanelHead}>
            <span className={styles.radio} aria-hidden>
              <span className={styles.radioDot} />
            </span>
            <CardIcon />
            <span className={styles.cardPanelHeadLabel}>Card</span>
          </div>

          <div className={styles.cardField}>
            <div className={styles.cardFieldLabel}>Card information</div>
            <div className={styles.inputGroup}>
              <div className={styles.inputRow}>
                <input
                  className={styles.inputField}
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  inputMode="numeric"
                />
                <span className={styles.brandRow} aria-hidden>
                  <span className={`${styles.brandPill} ${styles.brandVisa}`}>VISA</span>
                  <span className={`${styles.brandPill} ${styles.brandMc}`}>●●</span>
                  <span className={`${styles.brandPill} ${styles.brandAmex}`}>AMEX</span>
                  <span className={`${styles.brandPill} ${styles.brandDiners}`}>D</span>
                </span>
              </div>
              <div className={styles.inputRow2}>
                <div className={styles.inputCell}>
                  <input
                    className={styles.inputField}
                    type="text"
                    placeholder="MM / YY"
                    inputMode="numeric"
                  />
                </div>
                <div className={styles.inputCell}>
                  <input
                    className={styles.inputField}
                    type="text"
                    placeholder="CVC"
                    inputMode="numeric"
                  />
                  <span className={styles.cvcHint} aria-hidden><CvcIcon /></span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardField}>
            <div className={styles.cardFieldLabel}>Cardholder name</div>
            <div className={styles.inputGroup}>
              <div className={styles.inputRow}>
                <input className={styles.inputField} type="text" placeholder="Full name on card" />
              </div>
            </div>
          </div>

          <div className={styles.cardField}>
            <div className={styles.cardFieldLabel}>Billing address</div>
            <div className={styles.inputGroup}>
              <div className={styles.inputRow}>
                <select
                  className={styles.selectField}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
                <span className={styles.selectChevron}><ChevronDown /></span>
              </div>
              <div className={styles.inputRow}>
                <input className={styles.inputField} type="text" placeholder="Address line 1" />
              </div>
              <div className={styles.inputRow}>
                <input className={styles.inputField} type="text" placeholder="Address line 2" />
              </div>
              <div className={styles.inputRow2}>
                <div className={styles.inputCell}>
                  <input className={styles.inputField} type="text" placeholder="City" />
                </div>
                <div className={styles.inputCell}>
                  <input className={styles.inputField} type="text" placeholder="ZIP" />
                </div>
              </div>
              <div className={styles.inputRow}>
                <select
                  className={styles.selectField}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">State</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                  <option>Washington</option>
                </select>
                <span className={styles.selectChevron}><ChevronDown /></span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={styles.payBtn}
          onClick={() => window.close()}
        >
          Save card
        </button>
      </div>
    </div>
  );
}
