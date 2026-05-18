import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BillingPage } from './components/BillingPage/BillingPage';
import { TopUpPage } from './components/TopUpPage/TopUpPage';
import { AccountSettingsPage } from './components/AccountSettingsPage/AccountSettingsPage';
import { AddPaymentMethodPage } from './components/AddPaymentMethodPage/AddPaymentMethodPage';
import { PricingPage } from './components/PricingPage/PricingPage';
import { MenuIcon } from './components/Sidebar/icons';

export type Page = 'overview' | 'billing' | 'topup' | 'account' | 'pricing';

const PAGE_TO_PATH: Record<Page, string> = {
  overview: '/',
  billing: '/billing',
  topup: '/top-up-credits',
  account: '/account-settings',
  pricing: '/pricing',
};

const PATH_TO_PAGE: Record<string, Page> = {
  '/': 'overview',
  '/billing': 'billing',
  '/top-up-credits': 'topup',
  '/account-settings': 'account',
  '/pricing': 'pricing',
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Standalone routes — render without the sidebar/main shell
  if (location.pathname === '/add-payment-method') {
    return <AddPaymentMethodPage />;
  }

  const page: Page = PATH_TO_PAGE[location.pathname] ?? 'overview';

  function setPage(next: Page) {
    navigate(PAGE_TO_PATH[next]);
  }

  return (
    <div className={styles.layout}>
      {/* Mobile top bar — hidden on desktop */}
      <header className={styles.mobileTopBar} aria-label="Mobile navigation">
        <img
          src="/explorium-agentsource-logotype.svg"
          alt="Explorium Agentsource"
          className={styles.mobileLogo}
        />
        <button
          className={styles.menuBtn}
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open navigation"
          aria-expanded={mobileNavOpen}
        >
          <MenuIcon />
        </button>
      </header>

      {/* Backdrop — closes drawer on tap */}
      {mobileNavOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}

      <Sidebar
        page={page}
        onNavigate={setPage}
        mobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
      />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/top-up-credits" element={<TopUpPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={null} />
        </Routes>
      </main>
    </div>
  );
}
