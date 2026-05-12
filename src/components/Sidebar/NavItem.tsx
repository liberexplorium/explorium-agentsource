import type { ReactNode } from 'react';
import { ExternalArrow } from './icons';
import styles from './Sidebar.module.css';

type Props = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  external?: boolean;
};

export function NavItem({ icon, label, active, external }: Props) {
  const className = [styles.navItem, active ? styles.navItemActive : '']
    .filter(Boolean)
    .join(' ');

  return (
    <a href="#" className={className}>
      <span className={styles.navIcon}>{icon}</span>
      <span className={styles.navLabel}>{label}</span>
      {external && (
        <span className={styles.navTrailing}>
          <ExternalArrow />
        </span>
      )}
    </a>
  );
}
