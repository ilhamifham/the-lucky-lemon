import "./Reservation.css";
import Chevron from "../ui/Chevron.jsx";

function Reservation() {
    return (
        <form>
            <label htmlFor="name">Full name</label>
            <input type="text" name="name" id="name" placeholder="Enter your full name" />
            <label htmlFor="phone">Phone number</label>
            <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" />
            <label htmlFor="phone">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <div>
                <div>
                    <label htmlFor="date">Date to come</label>
                    <input type="date" name="date" id="date" />
                </div>
                <div>
                    <label htmlFor="time">Time to come</label>
                    <input type="time" name="time" id="time" />
                </div>
            </div>
            <label htmlFor="people">Number of people</label>
            <input type="number" name="people" id="people" placeholder="Enter number of people attending" />
            <label htmlFor="occasions">Occasions</label>
            <div className="select-group">
                <select name="occasions" id="occasions">
                    <option value="routines">Routines</option>
                    <option value="celebrations">Celebrations</option>
                    <option value="gatherings">Gatherings</option>
                    <option value="business">Business</option>
                </select>
                <Chevron />
            </div>
            <button className="button__ui">Reserve a Table</button>
        </form>
    )
}

export default Reservation;