import './Main.css';

function Main() {
    return (
        <main>
            <h2 className="order">ORDER FOR DELIVERY!</h2>
            <div className="headline">
                <h2 className="liner">This Week's Special!</h2>
                <button className="menu">Online Menu</button>
            </div>

            <section>
                    <div className="special">
                        <img className="special-img" src="assets/greek salad.jpg" alt="greek salad"/>
                        <div className="container">
                            <div className="space menu-item">
                                <p className="title">Greek Salad</p>
                                <p className="price">$12.99</p>
                            </div>
                            <p className="space info">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p className="space delivery">Order a delivery</p>
                        </div>
                    </div>
                    <div className="special">
                        <img className="special-img" src="assets/bruschetta.png" alt="bruschetta on bread"/>
                        <div className="container">
                            <div className="space menu-item">
                                <p className="title">Bruschetta</p>
                                <p className="price">$5.99</p>
                            </div>
                            <p className="space info">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            <p className="space delivery">Order a delivery</p>
                        </div>
                    </div>
                    <div className="special">
                        <img className="special-img" src="assets/lemon-dessert.jpg" alt="lemon cake"/>
                            <div className="container">
                            <div className="space menu-item">
                                <p className="title">Lemon Dessert</p>
                                <p className="price">$5.00</p>
                            </div>
                            <p className="space info">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <p className="space delivery">Order a delivery</p>
                        </div>
                    </div>
            </section>
        </main>
    );
}

export default Main;