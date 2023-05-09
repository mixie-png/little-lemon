import './Footer.css';

function Footer() {
    return (
        <footer>
          <div className="wrapper">
            <img className="logo" src="assets/logo.png" alt="Little Lemon logo"/>
            <ul>
              <h2 className="foot nav">Navigation</h2>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
            <ul>
              <h2 className="foot contact">Contact</h2>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
            <ul>
              <h2 className="foot links">Social Media Links</h2>
              <img src="assets/icons8-facebook-30.png" alt="Facebook icon"/>
              <img src="assets/icons8-instagram-30.png" alt="Instagram icon"/>
              <img src="assets/icons8-tiktok-30.png" alt="Tiktok icon"/>
            </ul>
          </div>
          <p class="copyright">
            © Copyright 2023 Little Lemon. All rights reserved.
          </p>
        </footer>
      );
}

export default Footer;