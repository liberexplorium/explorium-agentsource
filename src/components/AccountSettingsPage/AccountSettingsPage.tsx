import { useState } from 'react';
import styles from './AccountSettingsPage.module.css';
import { ContactUsModal } from './ContactUsModal';

export function AccountSettingsPage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Account Settings</h1>

      <div className={styles.fieldsRow}>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Name</div>
          <div className={styles.fieldValue}>user.name</div>
        </div>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Associated Email</div>
          <div className={styles.fieldValue}>user.name@domain.com</div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>Contact the Explorium Team</div>
        <button
          type="button"
          className={styles.contactBtn}
          onClick={() => setContactOpen(true)}
        >
          Contact Us
        </button>
      </section>

      <div className={styles.bottomGroup}>
        <hr className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionLabel}>Delete Account</div>
          <button type="button" className={styles.deleteBtn}>
            Delete my account
          </button>
        </section>
      </div>

      {contactOpen && (
        <ContactUsModal onClose={() => setContactOpen(false)} />
      )}
    </div>
  );
}
