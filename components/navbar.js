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
          width: 2rem;
          height: 2rem;
          padding: 0.25rem;
        }

        .mobile-menu-button svg {
          stroke: #415232;
          width: 2rem;
          height: 2rem;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 1rem;
          padding: 0;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease, padding 0.3s ease;
          background: white;
        }

        .mobile-menu.open {
          display: flex;
          padding: 1rem 2rem 1.5rem;
          max-height: 500px;
        }

        .mobile-menu a {
          color: #2a525a;
          text-decoration: none;
          font-weight: 500;
        }

        .mobile-menu a:hover {
          color: #415232;
        }

        @media (max-width: 800px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      </style>

      <nav>
        <a href="index.html" class="logo">
          Zoe Leyland<span>Consulting</span>
        </a>

        <div class="nav-links">
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
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
        <a href="services.html">Services</a>
        <a href="about.html">About</a>
        <a href="resources.html">Resources</a>
        <a href="contact.html">Contact</a>
      </div>
    `;

    const button = this.shadowRoot.querySelector('.mobile-menu-button');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Wait until Feather is loaded
    const waitForFeather = () => new Promise(resolve => {
      const check = () => {
        if (window.feather) resolve();
        else requestAnimationFrame(check);
      };
      check();
    });

    const setIcon = (open) => {
      button.innerHTML = `<i data-feather="${open ? 'x' : 'menu'}"></i>`;
      if (window.feather) {
        window.feather.replace({ root: this.shadowRoot });
        const svg = button.querySelector('svg');
        if (svg) svg.setAttribute('stroke', '#415232');
      }
    };

    waitForFeather().then(() => {
      // Initial icon render
      setIcon(false);

      // Toggle menu on click
      button.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        button.setAttribute('aria-expanded', isOpen);
        setIcon(isOpen);
      });

      // Close menu on link click
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          button.setAttribute('aria-expanded', 'false');
          setIcon(false);
        });
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
