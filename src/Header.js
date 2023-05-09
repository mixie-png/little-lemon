import './Header.css';

function Header() {
    return (
        <header>
            <div>
                <h1>Little Lemon</h1>
                <h2 className="chicago">Chicago</h2>
                <p className="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <img className="header-img" src="assets/restaurantfood.jpg" alt="tray of food"/>
        </header>
    );
}

export default Header;
