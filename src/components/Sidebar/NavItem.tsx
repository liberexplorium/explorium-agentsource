import type { ReactNode } from 'react';
import { ExternalArrow } from './icons';
import styles from './Sidebar.module.css';

type Props = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  external?: boolean;
  href?: string;
};

export function NavItem({ icon, label, active, external, href }: Props) {
  const className = [styles.navItem, active ? styles.navItemActive : '']
    .filter(Boolean)
    .join(' ');

  const isExternalLink = external && !!href;

  return (
    <a
      href={href ?? '#'}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      className={className}
    >
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
