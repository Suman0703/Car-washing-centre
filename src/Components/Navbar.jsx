import "./Navbar.css";


export default function Navbar() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#home" aria-label="Car Wash Centre home">
        <span className="site-brand-mark" aria-hidden="true">
          W
        </span>
        <span>Car Wash Centre</span>
      </a>

      <nav className="site-navigation" aria-label="Main navigation">
        <a className="site-navigation-link" href="#home">
          Home
        </a>
        <a className="site-navigation-link" href="#services">
          Services
        </a>
      </nav>
    </header>
  );
}
