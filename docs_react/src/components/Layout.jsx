import { useState } from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="layout-main">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <main className="content">{children}</main>
        <footer className="footer">
          <p>MAKAUT West Bengal &middot; B.Tech CSE Semester V &middot; Java OOP Lab</p>
        </footer>
      </div>
    </div>
  );
}
