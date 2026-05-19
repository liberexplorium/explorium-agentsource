import { useMemo, useState } from 'react';
import styles from './MembersPage.module.css';

type Role = 'Admin' | 'Member';
type Status = 'Active' | 'Pending';

type Member = {
  email: string;
  role: Role;
  status: Status;
  addedDate: string;
  lastActive: string | null;
};

const MEMBERS: Member[] = [
  { email: 'ahay.oziel@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '08 October 2024',  lastActive: '19 May 2026' },
  { email: 'amihay.hollinger@explorium.ai',  role: 'Member', status: 'Active',  addedDate: '02 May 2024',      lastActive: '05 May 2026' },
  { email: 'amit.avraham@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '03 June 2025',     lastActive: '19 May 2026' },
  { email: 'ariel.nitzav@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '02 April 2025',    lastActive: '18 May 2026' },
  { email: 'brandon.swartz@explorium.ai',    role: 'Member', status: 'Active',  addedDate: '10 November 2025', lastActive: '18 May 2026' },
  { email: 'business@explorium.ai',          role: 'Admin',  status: 'Pending', addedDate: '18 March 2026',    lastActive: '18 March 2026' },
  { email: 'danielle.gan@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '22 December 2025', lastActive: '28 April 2026' },
  { email: 'diego.duke@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '17 December 2021', lastActive: '12 May 2026' },
  { email: 'edward.vyeda@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '18 July 2024',     lastActive: '18 May 2026' },
  { email: 'eman.ghoreyshi@explorium.ai',    role: 'Member', status: 'Active',  addedDate: '08 May 2023',      lastActive: '19 May 2026' },
  { email: 'gersi.panci@explorium.ai',       role: 'Admin',  status: 'Active',  addedDate: '06 January 2026',  lastActive: '12 May 2026' },
  { email: 'growth@explorium.ai',            role: 'Admin',  status: 'Pending', addedDate: '18 May 2026',      lastActive: null },
  { email: 'gur.ronen@explorium.ai',         role: 'Member', status: 'Active',  addedDate: '06 July 2020',     lastActive: '18 May 2026' },
  { email: 'ilana@explorium.ai',             role: 'Admin',  status: 'Active',  addedDate: '14 February 2024', lastActive: '07 May 2026' },
  { email: 'iris.harel@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '11 March 2023',    lastActive: '17 May 2026' },
  { email: 'jakub.novak@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '21 August 2024',   lastActive: '14 May 2026' },
  { email: 'jonah.weber@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '02 February 2025', lastActive: '19 May 2026' },
  { email: 'kaitlyn.ross@explorium.ai',      role: 'Member', status: 'Pending', addedDate: '02 May 2026',      lastActive: null },
  { email: 'keren.kazan@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '04 September 2022',lastActive: '12 May 2026' },
  { email: 'liber.may@explorium.ai',         role: 'Admin',  status: 'Active',  addedDate: '01 January 2024',  lastActive: '19 May 2026' },
  { email: 'maya.lerner@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '15 June 2024',     lastActive: '18 May 2026' },
  { email: 'meir.shapiro@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '22 October 2024',  lastActive: '02 May 2026' },
  { email: 'mike.ortega@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '07 April 2023',    lastActive: '19 May 2026' },
  { email: 'nadav.dolev@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '11 November 2024', lastActive: '18 May 2026' },
  { email: 'natalie.kim@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '03 March 2024',    lastActive: '13 May 2026' },
  { email: 'noa.rosen@explorium.ai',         role: 'Member', status: 'Active',  addedDate: '26 May 2025',      lastActive: '15 May 2026' },
  { email: 'omer.hadar@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '19 February 2022', lastActive: '11 May 2026' },
  { email: 'orit.bensimon@explorium.ai',     role: 'Member', status: 'Active',  addedDate: '08 August 2023',   lastActive: '17 May 2026' },
  { email: 'pavel.alexandrov@explorium.ai',  role: 'Member', status: 'Active',  addedDate: '14 December 2024', lastActive: '06 May 2026' },
  { email: 'product@explorium.ai',           role: 'Admin',  status: 'Pending', addedDate: '04 April 2026',    lastActive: null },
  { email: 'rachel.cohen@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '02 July 2023',     lastActive: '14 May 2026' },
  { email: 'rafa.cardenas@explorium.ai',     role: 'Member', status: 'Active',  addedDate: '17 January 2025',  lastActive: '19 May 2026' },
  { email: 'ran.barzilai@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '29 September 2024',lastActive: '12 May 2026' },
  { email: 'ron.dahan@explorium.ai',         role: 'Member', status: 'Active',  addedDate: '11 November 2021', lastActive: '13 May 2026' },
  { email: 'roni.steg@explorium.ai',         role: 'Member', status: 'Active',  addedDate: '21 December 2024', lastActive: '07 May 2026' },
  { email: 'sales@explorium.ai',             role: 'Admin',  status: 'Active',  addedDate: '06 June 2024',     lastActive: '19 May 2026' },
  { email: 'sam.lebowitz@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '14 March 2024',    lastActive: '18 May 2026' },
  { email: 'sarah.bloom@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '02 October 2024',  lastActive: '12 May 2026' },
  { email: 'shai.gabai@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '04 February 2025', lastActive: '15 May 2026' },
  { email: 'shir.peled@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '23 May 2023',      lastActive: '19 May 2026' },
  { email: 'shira.adler@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '07 July 2024',     lastActive: '17 May 2026' },
  { email: 'shlomi.kassis@explorium.ai',     role: 'Member', status: 'Active',  addedDate: '12 October 2022',  lastActive: '12 May 2026' },
  { email: 'simon.bjorkstrom@explorium.ai',  role: 'Member', status: 'Active',  addedDate: '03 March 2025',    lastActive: '18 May 2026' },
  { email: 'support@explorium.ai',           role: 'Admin',  status: 'Active',  addedDate: '11 January 2023',  lastActive: '19 May 2026' },
  { email: 'tal.binyamini@explorium.ai',     role: 'Member', status: 'Active',  addedDate: '04 December 2024', lastActive: '08 May 2026' },
  { email: 'tamara.harel@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '22 February 2024', lastActive: '18 May 2026' },
  { email: 'tomer.golan@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '09 September 2023',lastActive: '13 May 2026' },
  { email: 'uri.shaked@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '16 June 2022',     lastActive: '15 May 2026' },
  { email: 'vered.tal@explorium.ai',         role: 'Member', status: 'Active',  addedDate: '01 August 2024',   lastActive: '11 May 2026' },
  { email: 'wendy.lima@explorium.ai',        role: 'Member', status: 'Pending', addedDate: '12 May 2026',      lastActive: null },
  { email: 'xenia.popov@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '07 May 2024',      lastActive: '19 May 2026' },
  { email: 'yael.peri@explorium.ai',         role: 'Member', status: 'Active',  addedDate: '11 April 2024',    lastActive: '18 May 2026' },
  { email: 'yair.lev@explorium.ai',          role: 'Member', status: 'Active',  addedDate: '08 June 2023',     lastActive: '14 May 2026' },
  { email: 'yoni.hertz@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '25 January 2024',  lastActive: '12 May 2026' },
  { email: 'zachary.kahn@explorium.ai',      role: 'Member', status: 'Active',  addedDate: '03 April 2025',    lastActive: '13 May 2026' },
  { email: 'zara.medina@explorium.ai',       role: 'Member', status: 'Active',  addedDate: '17 October 2025',  lastActive: '18 May 2026' },
  { email: 'zev.kahane@explorium.ai',        role: 'Member', status: 'Active',  addedDate: '29 November 2024', lastActive: '15 May 2026' },
];

function PlusIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}

function SortArrow() {
  return (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="5"  cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="19" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

type AccessPolicy = 'invite-only' | 'anyone-in-org';

export function MembersPage() {
  const [filter, setFilter] = useState('');
  const [accessPolicy, setAccessPolicy] = useState<AccessPolicy>('anyone-in-org');

  const visible = useMemo(() => {
    const f = filter.trim().toLowerCase();
    if (!f) return MEMBERS;
    return MEMBERS.filter((m) => m.email.toLowerCase().includes(f));
  }, [filter]);

  return (
    <div className={styles.page}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>Members</h1>
        <button type="button" className={styles.inviteBtn}>
          <PlusIcon />
          <span>Invite Users</span>
        </button>
        <div className={styles.accessControl}>
          <span className={styles.accessLabel}>Access</span>
          <div className={styles.segmented} role="group" aria-label="Access policy">
            <button
              type="button"
              className={[styles.seg, accessPolicy === 'anyone-in-org' ? styles.segActive : ''].filter(Boolean).join(' ')}
              onClick={() => setAccessPolicy('anyone-in-org')}
              aria-pressed={accessPolicy === 'anyone-in-org'}
            >
              Anyone in org
            </button>
            <button
              type="button"
              className={[styles.seg, accessPolicy === 'invite-only' ? styles.segActive : ''].filter(Boolean).join(' ')}
              onClick={() => setAccessPolicy('invite-only')}
              aria-pressed={accessPolicy === 'invite-only'}
            >
              Invite only
            </button>
          </div>
        </div>
      </div>

      <div className={styles.countLine}>
        <span className={styles.countNum}>{MEMBERS.length}</span>
        <span className={styles.countLabel}>Members</span>
      </div>

      <div className={styles.filterRow}>
        <input
          type="text"
          className={styles.filterInput}
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter by name"
        />
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <span className={styles.headSort}>
                  User Emails <SortArrow />
                </span>
              </th>
              <th>Role</th>
              <th>Status</th>
              <th>Added Date</th>
              <th>Last Active</th>
              <th className={styles.alignRight}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((m) => (
              <tr key={m.email}>
                <td>{m.email}</td>
                <td>{m.role}</td>
                <td>{m.status}</td>
                <td>{m.addedDate}</td>
                <td>{m.lastActive ?? ''}</td>
                <td className={styles.alignRight}>
                  <button
                    type="button"
                    className={styles.rowMenuBtn}
                    aria-label={`Actions for ${m.email}`}
                  >
                    <MoreIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
