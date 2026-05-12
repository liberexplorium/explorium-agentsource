import { useState } from 'react';
import styles from './BillingPage.module.css';

type Invoice = {
  dueDate: string;
  amount: string;
  currency: string;
  packageName: string;
  paymentMethod: string;
  status: 'Succeeded' | 'Failed' | 'Pending';
  invoiceNumber: string;
};

const PACKAGES: Array<{ name: string; amount: string }> = [
  { name: 'Custom Package',    amount: '$200'   },
  { name: 'Scale Package',     amount: '$7,500' },
  { name: 'Growth Package',    amount: '$1,500' },
  { name: 'Starter Package',   amount: '$200'   },
  { name: 'Promotion Package', amount: '$19.95' },
];

const CARDS = ['VISA 8888', 'MC 4444', 'AMEX 1234', 'DSCVR 9999', 'VISA 4567', 'MC 9876', 'DSCVR 2222', 'AMEX 3333', 'MC 2233', 'VISA 5678', 'DSCVR 3456', 'VISA 2480', 'AMEX 8282'];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function buildInvoices(count: number): Invoice[] {
  const out: Invoice[] = [];
  let year = 2025;
  let monthIdx = 9; // Oct 2025
  for (let i = 0; i < count; i++) {
    const pkg = PACKAGES[i % PACKAGES.length];
    const card = CARDS[i % CARDS.length];
    const day = 20 + (i % 3);
    out.push({
      dueDate: `${MONTHS[monthIdx]} ${day}, ${year}`,
      amount: pkg.amount,
      currency: 'USD',
      packageName: pkg.name,
      paymentMethod: card,
      status: 'Succeeded',
      invoiceNumber: `DE16837E-${String(41 + i).padStart(4, '0')}`,
    });
    monthIdx -= 1;
    if (monthIdx < 0) {
      monthIdx = 11;
      year -= 1;
    }
  }
  return out;
}

const INVOICES = buildInvoices(120);
const PAGE_SIZES = [25, 50, 75, 100] as const;

function CheckIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4v12" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M7 11l5 5 5-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20h14" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}

export function BillingPage() {
  const [pageSize, setPageSize] = useState<number>(25);
  const visible = INVOICES.slice(0, pageSize);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Billing/Invoices</h1>

      <div className={styles.toolbar}>
        <label className={styles.rowsControl}>
          <span className={styles.rowsLabel}>Rows per page</span>
          <select
            className={styles.rowsSelect}
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {PAGE_SIZES.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <span className={styles.rowsMeta}>
          Showing {visible.length} of {INVOICES.length}
        </span>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Due date</th>
              <th className={styles.alignRight}>Amount</th>
              <th>Currency</th>
              <th>Package Name</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Invoice Number</th>
              <th className={styles.alignCenter}>Download Invoice</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((inv, i) => (
              <tr key={i}>
                <td>{inv.dueDate}</td>
                <td className={styles.alignRight}>{inv.amount}</td>
                <td>{inv.currency}</td>
                <td>{inv.packageName}</td>
                <td>{inv.paymentMethod}</td>
                <td>
                  <span className={styles.statusPill}>
                    {inv.status} <CheckIcon />
                  </span>
                </td>
                <td>{inv.invoiceNumber}</td>
                <td className={styles.alignCenter}>
                  <a
                    className={styles.downloadBtn}
                    href="/sample-invoice.pdf"
                    download={`${inv.invoiceNumber}.pdf`}
                    aria-label={`Download invoice ${inv.invoiceNumber}`}
                  >
                    <DownloadIcon />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
