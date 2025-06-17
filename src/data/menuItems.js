import ChickenPNG from "/src/assets/chicken.png";
import ChickenWEBP from "/src/assets/chicken.webp";
import MushroomPNG from "/src/assets/mushroom.png";
import MushroomWEBP from "/src/assets/mushroom.webp";
import ShrimpPNG from "/src/assets/shrimp.png";
import ShrimpWEBP from "/src/assets/shrimp.webp";
import BeefPNG from "/src/assets/beef.png";
import BeefWEBP from "/src/assets/beef.webp";

const menuItems = [
    {
        title: "Grilled Chicken",
        price: 2200,
        description: "Juicy grilled chicken breast topped with house-made herb butter, roasted carrots, potatoes and seasonal greens.",
        png: ChickenPNG,
        webp: ChickenWEBP,
        quantity: 0,
    },
    {
        title: "Creamy Mushroom",
        price: 1800,
        description: "Arborio rice slow-cooked with a creamy mushroom blend, garlic, white wine, parmesan and fresh herbs.",
        png: MushroomPNG,
        webp: MushroomWEBP,
        quantity: 0,
    },
    {
        title: "Spicy Shrimp",
        price: 2500,
        description: "Soft corn tortillas filled with grilled spicy shrimp, lime-infused cabbage slaw, avocado crema and cilantro.",
        png: ShrimpPNG,
        webp: ShrimpWEBP,
        quantity: 0,
    },
    {
        title: "Short Rib Beef",
        price: 3200,
        description: "Slow-braised beef short rib in a red wine reduction, served with garlic mashed potatoes and sautéed asparagus.",
        png: BeefPNG,
        webp: BeefWEBP,
        quantity: 0,
    },
];


export default menuItems;
