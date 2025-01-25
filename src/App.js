import React from 'react';
import BookingForm from './components/BookingForm';
import './components/BookingForm.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <h1>Welcome to My OTA Platform!</h1>
      <p>Search for luxury hotel suites and book your stay.</p>
      <BookingForm />
    </div>
  );
}

export default App;
