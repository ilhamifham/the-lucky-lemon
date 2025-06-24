import "./Reservation.css";
import { useState, useRef } from "react";
import Chevron from "../ui/Chevron.jsx";

function Reservation() {
    const [errors, setErrors] = useState({});
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const dayRef = useRef(null);
    const monthRef = useRef(null);
    const yearRef = useRef(null);
    const timeRef = useRef(null);
    const peopleRef = useRef(null);
    const occasionsRef = useRef(null);
    const date = new Date();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    function handleFormSubmit(event) {
        event.preventDefault();
        const userErrors = validateForm();
        if (Object.keys(userErrors).length !== 0) setErrors(userErrors);
        else {
            const formData = {
                name: nameRef.current.value,
                phone: phoneRef.current.value,
                email: emailRef.current.value,
                day: dayRef.current.value,
                month: monthRef.current.value,
                year: yearRef.current.value,
                time: timeRef.current.value,
                people: peopleRef.current.value,
                occasion: occasionsRef.current.value
            };

            setErrors({});
            console.log(formData);
        }
    }

    function validateForm() {
        let errors = {};

        const name = nameRef.current.value;
        const nameError = !name.trim() ? "Full name required" : name.trim().length < 3 ? "Full name must be at least 3 characters" : "";
        if (nameError) errors = { ...errors, name: nameError };

        const phone = phoneRef.current.value;
        const phoneError = !phone ? "Phone number required" : phone.length !== 10 ? "Phone number must be 10 numbers" : "";
        if (phoneError) errors = { ...errors, phone: phoneError };

        const email = emailRef.current.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = !email ? "Email required" : !regex.test(email) ? "Invalid email" : "";
        if (emailError) errors = { ...errors, email: emailError };

        const day = dayRef.current.value;
        const month = monthRef.current.value;
        const year = yearRef.current.value;
        const usersDate = new Date(year, month - 1, day);
        const dateError = (usersDate.setHours(0, 0, 0, 0) < date.setHours(0, 0, 0, 0)) ? "Invalid date" : "";
        if (dateError) errors = { ...errors, date: dateError };

        const time = timeRef.current.value;
        const [hrs, min] = time.split(":");
        const usersTime = new Date();
        usersTime.setHours(hrs);
        usersTime.setMinutes(min);
        const timeError = usersDate.setHours(0, 0, 0, 0) < date.setHours(0, 0, 0, 0) ? "Invalid time" : usersDate.getTime() === date.getTime() && usersTime.getTime() <= (new Date().getTime() + 15 * 60 * 1000) ? "Invalid time" : "";
        if (timeError) errors = { ...errors, time: timeError };

        return errors;
    }

    return (
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="name">Full name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                autoComplete="off"
                ref={nameRef}
                onInput={(event) => { event.target.value = event.target.value.replace(/[^a-zA-Z\s]/g, "") }}
                {...(errors.name ? { className: 'error' } : {})}
            />
            {errors.name ? <p className="error-text">{errors.name}</p> : null}
            <label htmlFor="phone">Phone number</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                autoComplete="off"
                ref={phoneRef}
                onInput={(event) => { event.target.value = event.target.value.replace(/\D/g, "") }}
                {...(errors.phone ? { className: 'error' } : {})}
            />
            {errors.phone ? <p className="error-text">{errors.phone}</p> : null}
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                ref={emailRef}
                {...(errors.email ? { className: 'error' } : {})}
            />
            {errors.email ? <p className="error-text">{errors.email}</p> : null}
            <div className="label">Date to come</div>
            <div className="date">
                <div className="select-group">
                    <select name="day" defaultValue={date.getDate()} ref={dayRef} {...(errors.date ? { className: 'error' } : {})}>
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
                    <select name="month" defaultValue={date.getMonth() + 1} ref={monthRef} {...(errors.date ? { className: 'error' } : {})}>
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
                    <select name="year" defaultValue={date.getFullYear()} ref={yearRef} {...(errors.date ? { className: 'error' } : {})}>
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
            {errors.date ? <p className="error-text">{errors.date}</p> : null}
            <label htmlFor="time">Time to come</label>
            <div className="select-group">
                <select name="time" id="time" defaultValue="08:00" ref={timeRef} {...(errors.time ? { className: 'error' } : {})}>
                    <option value="08:00">08 : 00 A.M</option>
                    <option value="09:15">09 : 15 A.M</option>
                    <option value="10:30">10 : 30 A.M</option>
                    <option value="11:45">11 : 45 A.M</option>
                    <option value="13:00">01 : 00 P.M</option>
                    <option value="14:15">02 : 15 P.M</option>
                    <option value="15:30">03 : 30 P.M</option>
                    <option value="16:45">04 : 45 P.M</option>
                    <option value="18:00">06 : 00 P.M</option>
                    <option value="19:15">07 : 15 P.M</option>
                    <option value="20:30">08 : 30 P.M</option>
                    <option value="21:45">09 : 45 P.M</option>
                </select>
                <Chevron />
            </div>
            {errors.time ? <p className="error-text">{errors.time}</p> : null}
            <label htmlFor="people">Number of people</label>
            <div className="select-group">
                <select name="people" id="people" defaultValue="1" ref={peopleRef}>
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
                <select name="occasions" id="occasions" defaultValue="routines" ref={occasionsRef}>
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
