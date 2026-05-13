import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BillingPage } from './components/BillingPage/BillingPage';
import { TopUpPage } from './components/TopUpPage/TopUpPage';
import { AccountSettingsPage } from './components/AccountSettingsPage/AccountSettingsPage';
import { AddPaymentMethodPage } from './components/AddPaymentMethodPage/AddPaymentMethodPage';

export type Page = 'overview' | 'billing' | 'topup' | 'account';

const PAGE_TO_PATH: Record<Page, string> = {
  overview: '/',
  billing: '/billing',
  topup: '/top-up-credits',
  account: '/account-settings',
};

const PATH_TO_PAGE: Record<string, Page> = {
  '/': 'overview',
  '/billing': 'billing',
  '/top-up-credits': 'topup',
  '/account-settings': 'account',
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Standalone routes — render without the sidebar/main shell
  if (location.pathname === '/add-payment-method') {
    return <AddPaymentMethodPage />;
  }

  const page: Page = PATH_TO_PAGE[location.pathname] ?? 'overview';

  function setPage(next: Page) {
    navigate(PAGE_TO_PATH[next]);
  }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar page={page} onNavigate={setPage} />
      <main
        style={{
          flex: 1,
          height: '100vh',
          overflowY: 'auto',
          background: 'var(--exp-white)',
        }}
      >
        <Routes>
          <Route path="/" element={null} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/top-up-credits" element={<TopUpPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />
          <Route path="*" element={null} />
        </Routes>
      </main>
    </div>
  );
}
