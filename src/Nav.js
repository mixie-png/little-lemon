// import logo from 'my-app/src/icons_assets/logo.png';

function Nav() {
    return (
        <nav>
            <img src='my-app/public/assets/logo.png' alt="Little Lemon logo"/>
            <ul>
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