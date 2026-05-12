import { useState } from 'react';
import styles from './Sidebar.module.css';
import { NavItem } from './NavItem';
import { CreditsBlock } from './CreditsBlock';
import { UserChip } from './UserChip';
import {
  HomeIcon,
  BarChartIcon,
  KeyIcon,
  PlaygroundIcon,
  GenerateIcon,
  DocIcon,
  PricingIcon,
  CollapseIcon,
  PuzzleIcon,
  SqrtIcon,
  StackIcon,
} from './icons';

type SidebarPage = 'overview' | 'billing' | 'topup' | 'account';

type Props = {
  page: SidebarPage;
  onNavigate: (page: SidebarPage) => void;
};

export function Sidebar({ page, onNavigate }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={styles.sidebar}
      data-collapsed={collapsed || undefined}
    >
      <div className={styles.header}>
        <img
          src="/explorium-agentsource-logotype.svg"
          alt="Explorium Agentsource"
          className={styles.brand}
        />
        <button
          className={styles.iconBtn}
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-pressed={collapsed}
        >
          <CollapseIcon />
        </button>
      </div>

      <nav className={styles.nav}>
        <NavItem icon={<HomeIcon />} label="Overview" active />
        <NavItem icon={<BarChartIcon />} label="Usage" />
        <NavItem icon={<KeyIcon />} label="API Keys" />
        <NavItem icon={<PlaygroundIcon />} label="API Playground" />
        <NavItem icon={<GenerateIcon />} label="Generate" />
        <NavItem icon={<PricingIcon />} label="Pricing" />
      </nav>

      <div className={styles.divider} />

      <nav className={styles.nav}>
        <NavItem
          icon={<DocIcon />}
          label="Documentation"
          external
          href="https://developers.explorium.ai/reference/quick-starts/quick-starts"
        />
        <NavItem
          icon={<PuzzleIcon />}
          label="Integrations"
          external
          href="https://www.explorium.ai/integrations/?utm_source=agentsource"
        />
        <NavItem
          icon={<SqrtIcon />}
          label="Vibe Prospecting"
          external
          href="https://www.vibeprospecting.ai/?utm_source=agentsource"
        />
        <NavItem
          icon={<StackIcon />}
          label="Our Data"
          external
          href="https://www.explorium.ai/data/?utm_source=agentsource"
        />
      </nav>

      <div className={styles.spacer} />

      <CreditsBlock />

      <div className={`${styles.divider} ${styles.dividerFlush}`} />

      <UserChip
        active={page === 'billing' || page === 'topup' || page === 'account'}
        onSelectBilling={() => onNavigate('billing')}
        onSelectTopUp={() => onNavigate('topup')}
        onSelectAccount={() => onNavigate('account')}
      />
    </aside>
  );
}
