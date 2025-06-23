import "./Reservation.css";
import Chevron from "../ui/Chevron.jsx";

function Reservation() {
    const date = new Date();
    const daysInMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    return (
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="name">Full name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
            />
            <label htmlFor="phone">Phone number</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
            />
            <div className="label">Date to come</div>
            <div className="date">
                <div className="select-group">
                    <select name="day">
                        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(
                            (day) => {
                                return (
                                    <option key={day} value={day}>
                                        {day}
                                    </option>
                                );
                            }
                        )}
                    </select>
                    <Chevron />
                </div>
                <div className="select-group">
                    <select name="month">
                        {Array.from({ length: 12 }, (_, index) => index + 1).map(
                            (month) => {
                                return (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                );
                            }
                        )}
                    </select>
                    <Chevron />
                </div>
                <div className="select-group">
                    <select name="month">
                        {Array.from(
                            { length: 2 },
                            (_, index) => date.getFullYear() + index
                        ).map((year) => {
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                    <Chevron />
                </div>
            </div>
            <label htmlFor="time">Time to come</label>
            <div className="select-group">
                <select name="time" id="time">
                    <option value="">08 : 00 A.M</option>
                    <option value="">09 : 15 A.M</option>
                    <option value="">10 : 30 A.M</option>
                    <option value="">11 : 45 A.M</option>
                    <option value="">01 : 00 P.M</option>
                    <option value="">02 : 15 P.M</option>
                    <option value="">03 : 30 P.M</option>
                    <option value="">04 : 45 P.M</option>
                    <option value="">06 : 00 P.M</option>
                    <option value="">07 : 15 P.M</option>
                    <option value="">08 : 30 P.M</option>
                    <option value="">09 : 45 P.M</option>
                </select>
                <Chevron />
            </div>
            <label htmlFor="people">Number of people</label>
            <div className="select-group">
                <select name="people" id="people">
                    {Array.from({ length: 12 }, (_, index) => index + 1).map((people) => {
                        return (
                            <option key={people} value={people}>
                                {people}
                            </option>
                        );
                    })}
                </select>
                <Chevron />
            </div>
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
    );
}

export default Reservation;
