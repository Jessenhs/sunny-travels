import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation() {
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const storedBookingData = sessionStorage.getItem('bookingData');
    if (storedBookingData) {
      setBookingData(JSON.parse(storedBookingData));
    }
  }, []);

  if (!bookingData) {
    return (
      <div className="container">
        <div className="no-booking">
          <h2>Geen boekingsgegevens gevonden</h2>
          <p>Er zijn geen boekingsgegevens beschikbaar.</p>
          <Link to="/" className="home-button">Terug naar home</Link>
        </div>
      </div>
    );
  }

  const bookingNumber = `ST${Date.now().toString().slice(-6)}`;

  return (
    <div className="confirmation-container">
      <div className="container">
        <div className="confirmation-content">
          <div className="success-icon">✅</div>
          
          <h1>Boeking bevestigd!</h1>
          <p className="success-message">
            Bedankt voor je boeking bij Sunny Travels! We hebben je reservering ontvangen en verwerkt.
          </p>

          <div className="booking-details">
            <h2>Boekingsgegevens</h2>
            
            <div className="detail-section">
              <h3>Reserveringsnummer</h3>
              <p className="booking-number">{bookingNumber}</p>
            </div>

            <div className="detail-section">
              <h3>Vakantie</h3>
              <div className="vacation-summary">
                <img src={bookingData.vacation.image} alt={bookingData.vacation.title} />
                <div>
                  <h4>{bookingData.vacation.title}</h4>
                  <p>📍 {bookingData.vacation.location}, {bookingData.vacation.country}</p>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Persoonlijke gegevens</h3>
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="label">Naam:</span>
                  <span>{bookingData.firstName} {bookingData.lastName}</span>
                </div>
                <div className="detail-item">
                  <span className="label">E-mail:</span>
                  <span>{bookingData.email}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Telefoon:</span>
                  <span>{bookingData.phone}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Aantal personen:</span>
                  <span>{bookingData.numberOfPeople}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Vertrekdatum:</span>
                  <span>{new Date(bookingData.departureDate).toLocaleDateString('nl-NL')}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Totaalprijs:</span>
                  <span className="total-price">€{bookingData.totalPrice.toFixed(0)}</span>
                </div>
              </div>
              
              {bookingData.specialRequests && (
                <div className="detail-item special-requests">
                  <span className="label">Bijzondere wensen:</span>
                  <span>{bookingData.specialRequests}</span>
                </div>
              )}
            </div>
          </div>

          <div className="next-steps">
            <h3>Wat nu?</h3>
            <ul>
              <li>Je ontvangt binnen 24 uur een bevestigingsmail met alle details</li>
              <li>Onze reisadviseur neemt contact met je op voor verdere afspraken</li>
              <li>Je reisdocumenten ontvang je 2 weken voor vertrek</li>
              <li>Bij vragen kun je contact opnemen via info@sunnytravels.nl</li>
            </ul>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="home-button">
              Terug naar home
            </Link>
            <button 
              onClick={() => window.print()} 
              className="print-button"
            >
              Print bevestiging
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation; 