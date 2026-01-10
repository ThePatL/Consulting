class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: linear-gradient(to right, #7c3aed, #db2777);
          color: white;
          padding: 3rem 2rem;
        }
        
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        .footer-description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.1);
          transition: background-color 0.3s;
        }
        
        .social-links a:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-links a:hover {
          color: white;
        }
        
        .footer-bottom {
          max-width: 1280px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .footer-bottom a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.875rem;
        }
        
        .footer-bottom a:hover {
          color: white;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="footer-container">
        <div>
          <div class="footer-logo">RainbowBridge</div>
          <p class="footer-description">
            Creating inclusive, equitable organizations through expert EDIDA consulting.
          </p>
          <div class="social-links">
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
          </div>
        </div>
        
        <div>
          <h3 class="footer-heading">Services</h3>
          <div class="footer-links">
            <a href="consulting.html">Organizational Assessment</a>
            <a href="consulting.html">Leadership Training</a>
            <a href="consulting.html">Policy Development</a>
            <a href="consulting.html">Recruitment Strategy</a>
          </div>
        </div>
        
        <div>
          <h3 class="footer-heading">Company</h3>
          <div class="footer-links">
            <a href="about.html">About Us</a>
            <a href="approach.html">Our Approach</a>
            <a href="contact.html">Contact</a>
<a href="#">Blog</a>
          </div>
        </div>
        
        <div>
          <h3 class="footer-heading">Legal</h3>
          <div class="footer-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="accessibility-statement.html">Accessibility Statement</a>
            <a href="land-acknowledgement.html">Land Acknowledgement</a>
</div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div>
          <a href="#">© 2023 RainbowBridge Consulting. All rights reserved.</a>
        </div>
        <div class="flex gap-4">
          <a href="#">English</a>
          <a href="#">Français</a>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
