import "./Reservation.css";

function Reservation() {
    return (
        <form>
            <label htmlFor="name">Full name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your full name" />
            <label htmlFor="phone">Phone number:</label>
            <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" />
            <div>
                <div>
                    <label htmlFor="date">Date to come:</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div>
                    <label htmlFor="time">Time to come:</label>
                    <input type="time" name="time" id="time" />
                </div>
            </div>
            <label htmlFor="people">Number of people:</label>
            <input type="number" name="people" id="people" placeholder="Enter number of people" />
            <label htmlFor="occasions">Occasions:</label>
            <select name="occasions" id="occasions">
                <option value="" selected>Select occasions</option>
                <option value="">Celebrations</option>
                <option value="">Social Gatherings</option>
                <option value="">Business</option>
                <option value="">Routine</option>
            </select>
            <button className="button__ui">Reserve a Table</button>
        </form>
    )
}

export default Reservation;