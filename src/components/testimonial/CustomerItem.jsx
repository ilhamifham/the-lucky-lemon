import "./CustomerItem.css";

function CustomerItem({ item }) {
    return (
        <li className="card__ui">
            <div>
                <picture>
                    <source srcSet={item.webp} type="image/webp" />
                    <img src={item.png} alt={item.name} width={80} height={80} />
                </picture>
                <div>
                    <div>{item.name}</div>
                    <div>{item.rating} <span>&#11088;</span></div>
                </div>
            </div>
            <p>"{item.quote}"</p>
        </li>
    );
}

export default CustomerItem;