import './BookingForm.css';

import { useState } from 'react';

function BookingForm({ availableTimes, setAvailableTimes, selectedDate, setSelectedDate, submitForm }) {
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const [formValid, setFormValid] = useState(true);

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date); // Update the selected date
    setFormValid(e.target.form.checkValidity());
  };

  const handleGuestsChange = (e) => {
    const guests = e.target.value;
    setGuests(guests);
    setFormValid(e.target.form.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      guests: guests,
      occasion: occasion
    };
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose Date:</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={availableTimes} onChange={(e) => setAvailableTimes(e.target.value)}>
          {availableTimes.map((time, index) => (
            <option key={index} required>{time}</option>
          ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
          <option>Select an occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Just for Fun</option>
      </select>
      <button type="submit" disabled={!formValid} aria-label="Make Your Reservation">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
