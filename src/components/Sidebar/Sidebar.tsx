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
  CloseIcon,
  PuzzleIcon,
  SqrtIcon,
  StackIcon,
  PeopleIcon,
} from './icons';

type SidebarPage = 'overview' | 'billing' | 'topup' | 'account' | 'pricing' | 'members';

type Props = {
  page: SidebarPage;
  onNavigate: (page: SidebarPage) => void;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
};

export function Sidebar({ page, onNavigate, mobileOpen, onMobileClose }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  function navigate(p: SidebarPage) {
    onNavigate(p);
    onMobileClose?.();
  }

  return (
    <aside
      className={styles.sidebar}
      data-collapsed={collapsed || undefined}
      data-mobile-open={mobileOpen || undefined}
    >
      <div className={styles.header}>
        <img
          src="/explorium-agentsource-logotype.svg"
          alt="Explorium Agentsource"
          className={styles.brand}
        />
        {/* Desktop: collapse toggle */}
        <button
          className={styles.iconBtn}
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-pressed={collapsed}
        >
          <CollapseIcon />
        </button>
        {/* Mobile: close drawer */}
        <button
          className={styles.mobileCloseBtn}
          onClick={onMobileClose}
          aria-label="Close navigation"
        >
          <CloseIcon />
        </button>
      </div>

      <nav className={styles.nav}>
        <NavItem
          icon={<HomeIcon />}
          label="Overview"
          active={page === 'overview'}
          onClick={() => navigate('overview')}
        />
        <NavItem icon={<BarChartIcon />} label="Usage" />
        <NavItem icon={<KeyIcon />} label="API Keys" />
        <NavItem icon={<PlaygroundIcon />} label="API Playground" />
        <NavItem icon={<GenerateIcon />} label="Generate" />
        <NavItem
          icon={<PricingIcon />}
          label="Pricing"
          active={page === 'pricing'}
          onClick={() => navigate('pricing')}
        />
        <NavItem
          icon={<PeopleIcon />}
          label="Members"
          active={page === 'members'}
          onClick={() => navigate('members')}
        />
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

      <CreditsBlock onUpgrade={() => navigate('pricing')} />

      <div className={`${styles.divider} ${styles.dividerFlush}`} />

      <UserChip
        active={page === 'billing' || page === 'topup' || page === 'account'}
        onSelectPricing={() => navigate('pricing')}
        onSelectBilling={() => navigate('billing')}
        onSelectTopUp={() => navigate('topup')}
        onSelectAccount={() => navigate('account')}
      />
    </aside>
  );
}
