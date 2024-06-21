import './Reservation.css';

function Reservation() {
    return (
        <section id="reservation" className="main_reservation">
            <div className="reservation">
                <h2>Reservation</h2>
                <form className="reservation_form">
                    <div className="form_name">
                        <input type="text" placeholder="First name" required />
                        <input type="text" placeholder="Last name" required />
                    </div>
                    <input type="number" placeholder="Number of guests" required min="1" />
                    <div className="form_dateTime">
                        <input type="date" required />
                        <input type="time" required />
                    </div>
                    <select required>
                        <option disabled selected>Occations</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <textarea placeholder="Special requirements..."></textarea>
                    <button className="link-button">Reserve</button>
                </form>
            </div>
        </section>
    );
}

export default Reservation;