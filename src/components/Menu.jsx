import './Menu.css';

import lemonDessert from '../assets/1.jpeg';
import greekSalad from '../assets/2.jpeg';
import Bruchetta from '../assets/3.jpeg';

const recipes = [
    {
        id: 1,
        title: "Greek salad",
        price: "$ 12.99",
        image: greekSalad,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic",
    },
    {
        id: 2,
        title: "Bruchetta",
        price: "$ 5.99",
        image: Bruchetta,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt, olive oil and butter",
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: "$ 4.78",
        image: lemonDessert,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    }
];

function Menu() {
    return (
        <section id="menu" className="main_menu">
            <div className="menu">
                <h2>Specials</h2>
                <div className="menu_card">
                    {recipes.map(recipe => <article key={recipe.id} className="menu_card_item">
                        <div className="card_image">
                            <img src={recipe.image} alt="recipe" />
                        </div>
                        <div className="card_description">
                            <div className="card_header">
                                <h3>{recipe.title}</h3>
                                <p>{recipe.price}</p>
                            </div>
                            <p className="card_info">{recipe.description}</p>
                            <a className="link-button" href="/">Order Now</a>
                        </div>
                    </article>)}
                </div>
            </div>
        </section>
    );
}

export default Menu;