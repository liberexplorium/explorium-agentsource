import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BillingPage } from './components/BillingPage/BillingPage';
import { TopUpPage } from './components/TopUpPage/TopUpPage';
import { AccountSettingsPage } from './components/AccountSettingsPage/AccountSettingsPage';

export type Page = 'overview' | 'billing' | 'topup' | 'account';

export default function App() {
  const [page, setPage] = useState<Page>('overview');

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
        {page === 'billing' && <BillingPage />}
        {page === 'topup' && <TopUpPage />}
        {page === 'account' && <AccountSettingsPage />}
      </main>
    </div>
  );
}
