import { useEffect, useState, type FormEvent } from 'react';
import styles from './AccountSettingsPage.module.css';

function CloseIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

type Props = {
  onClose: () => void;
  defaultEmail?: string;
};

export function ContactUsModal({ onClose, defaultEmail = 'user.name@domain.com' }: Props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(defaultEmail);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Prototype: just close the modal
    onClose();
  }

  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-us-title"
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <h2 id="contact-us-title" className={styles.modalTitle}>Contact Us</h2>
        <p className={styles.modalSubtitle}>
          Discover the value Explorium can bring to your business
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow2}>
            <div className={styles.formField}>
              <label htmlFor="cu-firstName">First name<span className={styles.required}>*</span></label>
              <input
                id="cu-firstName"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="cu-lastName">Last name<span className={styles.required}>*</span></label>
              <input
                id="cu-lastName"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.formField}>
            <label htmlFor="cu-email">
              Email<span className={styles.required}>*</span>
              <span className={styles.labelHint}> (Please update email below if necessary)</span>
            </label>
            <input
              id="cu-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="cu-jobTitle">Job title<span className={styles.required}>*</span></label>
            <input
              id="cu-jobTitle"
              type="text"
              placeholder="E.g. VP Sales"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="cu-companyName">Company name<span className={styles.required}>*</span></label>
            <input
              id="cu-companyName"
              type="text"
              placeholder="Company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="cu-phoneNumber">Phone number<span className={styles.required}>*</span></label>
            <input
              id="cu-phoneNumber"
              type="tel"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelLink} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
