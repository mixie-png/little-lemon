import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingPage from './BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Routes>
        <Route path="/booking" element={<BookingPage/>} />
      </Routes>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
