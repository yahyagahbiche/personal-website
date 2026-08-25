export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <p>© {new Date().getFullYear()} Yahya Gahbiche</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/yahyagahbiche" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:yahyagahbiche@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
