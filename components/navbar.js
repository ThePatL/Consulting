class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        nav {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 800;
          font-size: 1.5rem;
          color: #415232;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo span {
          color: #2a525a;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-links a:hover {
          color: #415232;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #2a525a;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 2rem 1.5rem;
          background: white;
        }

        .mobile-menu a {
          color: #000;
          text-decoration: none;
          font-weight: 500;
        }

        .mobile-menu a:hover {
          color: #415232;
        }

        .mobile-menu.open {
          display: flex;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }
      </style>

      <nav>
        <a href="index.html" class="logo">
          Rainbow<span>Bridge</span>
        </a>

        <div class="nav-links">
          <a href="index.html">Home</a>
          <a href="consulting.html">Services</a>
          <a href="about.html">About</a>
          <a href="resources.html">Resources</a>
          <a href="contact.html">Contact</a>
        </div>

        <button class="mobile-menu-button" aria-label="Toggle menu" aria-expanded="false">
          <i data-feather="menu"></i>
        </button>
      </nav>

      <div class="mobile-menu">
        <a href="index.html">Home</a>
        <a href="consulting.html">Services</a>
        <a href="about.html">About</a>
        <a href="resources.html">Resources</a>
        <a href="contact.html">Contact</a>
      </div>
    `;

    const button = this.shadowRoot.querySelector('.mobile-menu-button');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

    button.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  button.setAttribute('aria-expanded', isOpen);
});

// IMPORTANT: Feather must target the Shadow DOM
if (window.feather) {
  window.feather.replace({ root: this.shadowRoot });
}

  }
}

customElements.define('custom-navbar', CustomNavbar);
