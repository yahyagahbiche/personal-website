import { Link } from "react-router-dom";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link to="/#top" className="wordmark">
          Yahya Gahbiche
        </Link>
        <nav className="nav">
          <Link to="/#journey">Journey</Link>
          <Link to="/#now">Now</Link>
          <Link to="/#about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.4 14.7A8.6 8.6 0 1 1 9.3 3.6a7 7 0 0 0 11.1 11.1Z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
