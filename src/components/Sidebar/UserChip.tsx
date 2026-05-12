import { useEffect, useRef, useState } from 'react';
import styles from './Sidebar.module.css';
import { CreditCardIcon, TopUpIcon, ReceiptIcon, GearIcon, LogoutIcon } from './icons';

type Props = {
  active?: boolean;
  onSelectBilling?: () => void;
};

export function UserChip({ active, onSelectBilling }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const className = [styles.user, active ? styles.userActive : '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.userWrap} ref={wrapRef}>
      {open && (
        <div className={styles.userMenu} role="menu">
          <button className={styles.userMenuItem} role="menuitem">
            <CreditCardIcon />
            <span>Pricing</span>
          </button>
          <button className={styles.userMenuItem} role="menuitem">
            <TopUpIcon />
            <span>Top-Up Credits</span>
          </button>
          <button
            className={styles.userMenuItem}
            role="menuitem"
            onClick={() => {
              onSelectBilling?.();
              setOpen(false);
            }}
          >
            <ReceiptIcon />
            <span>Billing / Invoices</span>
          </button>
          <button className={styles.userMenuItem} role="menuitem">
            <GearIcon />
            <span>Account Settings</span>
          </button>
          <div className={styles.userMenuDivider} />
          <button className={styles.userMenuItem} role="menuitem">
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>
      )}
      <button
        className={className}
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <div className={styles.avatar}>LI</div>
        <span className={styles.userEmail}>liber.may@explorium.ai</span>
      </button>
    </div>
  );
}
