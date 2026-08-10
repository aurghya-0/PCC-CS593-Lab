import { NavLink } from 'react-router-dom';
import { labsOverview } from '../data';
import './Sidebar.css';

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="sidebar-brand" onClick={onClose}>
            <span className="sidebar-brand-code">PCC-CS593</span>
            <span className="sidebar-brand-sub">OOP Lab Docs</span>
          </NavLink>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`} onClick={onClose}>
            Home
          </NavLink>
          <div className="nav-section">Labs</div>
          {labsOverview.map((lab) => (
            <NavLink
              key={lab.id}
              to={`/lab/${lab.id}`}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
              onClick={onClose}
            >
              Lab {lab.id}
              <span className="nav-badge">{lab.count}</span>
            </NavLink>
          ))}
          <div className="nav-section">Tools</div>
          <NavLink
            to="/utilities"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            onClick={onClose}
          >
            Utilities
          </NavLink>
        </nav>
        <div className="sidebar-footer">
          Built with <span className="sidebar-heart">&lt;3</span> for students
        </div>
      </aside>
    </>
  );
}
