import './Nav.css';

function Nav() {
    return (
        <nav>
            <img className="mobile-img" src="assets/hamburger_menu.png" alt="hamburger menu"/>
            <img src="assets/logo.png" alt="Little Lemon logo"/>
            <img className="mobile-img" src="assets/basket.png" alt="basket"/>
            <ul className="nav-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;