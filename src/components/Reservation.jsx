import { useState } from 'react';
import './Reservation.css';

function Reservation() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [occations, setOccations] = useState("");
    const [requirements, setRequirements] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setGuests("");
        setDate("");
        setTime("");
        setOccations("");
        setRequirements("");
    }

    return (
        <section id="reservation" className="main_reservation">
            <div className="reservation">
                <h2>Reservation</h2>
                <form className="reservation_form" onSubmit={handleSubmit}>
                    <div className="form_name">
                        <input type="text" placeholder="First name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder="Last name" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <input type="number" placeholder="Number of guests" required min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />
                    <div className="form_dateTime">
                        <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                        <input type="time" required value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <select value={occations} onChange={(e) => setOccations(e.target.value)} >
                        <option value="">Occations</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    <textarea placeholder="Special requirements..." value={requirements} onChange={(e) => setRequirements(e.target.value)}  ></textarea>
                    <button className="link-button" type="submit" disabled={!firstName}>Reserve</button>
                </form>
            </div>
        </section>
    );
}

export default Reservation;
