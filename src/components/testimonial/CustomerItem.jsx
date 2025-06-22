import "./CustomerItem.css";

function CustomerItem({ item }) {
    return (
        <li className="card__ui">
            <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img src={item.png} alt={item.name} width={80} height={80} />
            </picture>
            <div>{item.name}</div>
            <p>"{item.quote}"</p>
        </li>
    );
}

export default CustomerItem;