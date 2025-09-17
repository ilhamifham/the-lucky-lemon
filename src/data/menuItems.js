import ChickenPNG from "../assets/chicken.png";
import ChickenWEBP from "../assets/chicken.webp";
import MushroomPNG from "../assets/mushroom.png";
import MushroomWEBP from "../assets/mushroom.webp";
import ShrimpPNG from "../assets/shrimp.png";
import ShrimpWEBP from "../assets/shrimp.webp";
import BeefPNG from "../assets/beef.png";
import BeefWEBP from "../assets/beef.webp";

const menuItems = [
  {
    id: 1,
    title: "Grilled Chicken",
    price: 2200,
    description: "Juicy grilled chicken breast topped with house-made herb butter, roasted carrots, potatoes and seasonal greens.",
    png: ChickenPNG,
    webp: ChickenWEBP,
    quantity: 0,
  },
  {
    id: 2,
    title: "Creamy Mushroom",
    price: 1800,
    description: "Arborio rice slow-cooked with a creamy mushroom blend, garlic, white wine, parmesan and fresh herbs mixed well.",
    png: MushroomPNG,
    webp: MushroomWEBP,
    quantity: 0,
  },
  {
    id: 3,
    title: "Spicy Shrimp",
    price: 2500,
    description: "Soft corn tortillas filled with grilled spicy shrimp, lime-infused cabbage slaw, avocado crema and cilantro.",
    png: ShrimpPNG,
    webp: ShrimpWEBP,
    quantity: 0,
  },
  {
    id: 4,
    title: "Short Rib Beef",
    price: 3200,
    description: "Slow-braised beef short rib in a red wine reduction, served with garlic mashed potatoes and sautéed asparagus.",
    png: BeefPNG,
    webp: BeefWEBP,
    quantity: 0,
  },
];

export default menuItems;
