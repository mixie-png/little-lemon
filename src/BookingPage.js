import Nav from './Nav.js';
import BookingForm from './BookingForm.js'

function BookingPage({ availableTimes, setAvailableTimes, selectedDate, setSelectedDate, submitForm}) {
    return (
        <>
            <Nav></Nav>
            <h1>Reserve A Table</h1>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} selectedDate={selectedDate}
              setSelectedDate={setSelectedDate} submitForm={submitForm}/>
        </>
    )
}

export default BookingPage;