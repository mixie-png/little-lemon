import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useReducer, useEffect } from 'react';
import ConfirmedBooking from './ConfirmedBooking.js';
import { fetchAPI, submitAPI } from './api.js';

const updateTimes = (selectedDate, setAvailableTimes) => {
  const newTimes = fetchAPI(new Date(selectedDate)); // Call fetchAPI with the selected date
  setAvailableTimes(newTimes);
};

function App() {
  const initializeTimes = () => {
    const today = new Date();
    const availableTimes = fetchAPI(today); // Call fetchAPI with today's date
    return availableTimes;
  };

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    updateTimes(selectedDate);
  }, [selectedDate]);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    submitAPI(formData)
      .then(response => {
        if (response === true) {
          navigate('/booking-confirmed'); // Use the navigate function to navigate to the booking confirmation page
        } else {
          // Handle unsuccessful submission
          console.log('Submission failed');
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error submitting form:', error);
      });
  };

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Routes>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} selectedDate={selectedDate} setSelectedDate={setSelectedDate} submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
