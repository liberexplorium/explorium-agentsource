import { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BillingPage } from './components/BillingPage/BillingPage';
import { TopUpPage } from './components/TopUpPage/TopUpPage';

export type Page = 'overview' | 'billing' | 'topup';

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
      </main>
    </div>
  );
}
