import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { vacations } from '../data/vacations';
import './BookingForm.css';

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const vacation = vacations.find(v => v.id === parseInt(id));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    departureDate: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Voornaam is verplicht';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Achternaam is verplicht';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail is verplicht';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ongeldig e-mailadres';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefoonnummer is verplicht';
    }

    if (!formData.departureDate) {
      newErrors.departureDate = 'Vertrekdatum is verplicht';
    } else {
      const selectedDate = new Date(formData.departureDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate <= today) {
        newErrors.departureDate = 'Vertrekdatum moet in de toekomst liggen';
      }
    }

    if (formData.numberOfPeople < 1 || formData.numberOfPeople > 10) {
      newErrors.numberOfPeople = 'Aantal personen moet tussen 1 en 10 zijn';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Store booking data in sessionStorage for confirmation page
    const bookingData = {
      ...formData,
      vacation: vacation,
      bookingDate: new Date().toISOString(),
      totalPrice: parseFloat(vacation.price.replace('€', '').replace(',', '.')) * formData.numberOfPeople
    };
    
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
    
    // Navigate to confirmation page
    navigate('/confirmation');
  };

  if (!vacation) {
    return (
      <div className="container">
        <div className="not-found">
          <h2>Vakantie niet gevonden</h2>
          <Link to="/" className="back-button">Terug naar overzicht</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-form-container">
      <div className="container">
        <div className="booking-header">
          <h1>Boek je vakantie</h1>
          <div className="selected-vacation">
            <img src={vacation.image} alt={vacation.title} className="vacation-thumb" />
            <div className="vacation-info">
              <h3>{vacation.title}</h3>
              <p>📍 {vacation.location}, {vacation.country}</p>
              <p className="vacation-price">{vacation.price} per persoon</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Voornaam *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Achternaam *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">E-mailadres *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefoonnummer *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="numberOfPeople">Aantal personen *</label>
              <select
                id="numberOfPeople"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleInputChange}
                className={errors.numberOfPeople ? 'error' : ''}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'persoon' : 'personen'}</option>
                ))}
              </select>
              {errors.numberOfPeople && <span className="error-message">{errors.numberOfPeople}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="departureDate">Gewenste vertrekdatum *</label>
              <input
                type="date"
                id="departureDate"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={errors.departureDate ? 'error' : ''}
              />
              {errors.departureDate && <span className="error-message">{errors.departureDate}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Bijzondere wensen (optioneel)</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows="3"
              placeholder="Bijv. dieetwensen, verjaardag, huwelijksreis..."
            />
          </div>

          <div className="booking-summary">
            <h3>Overzicht boeking</h3>
            <div className="summary-row">
              <span>Vakantie:</span>
              <span>{vacation.title}</span>
            </div>
            <div className="summary-row">
              <span>Aantal personen:</span>
              <span>{formData.numberOfPeople}</span>
            </div>
            <div className="summary-row">
              <span>Prijs per persoon:</span>
              <span>{vacation.price}</span>
            </div>
            <div className="summary-row total">
              <span>Totaalprijs:</span>
              <span>€{(parseFloat(vacation.price.replace('€', '').replace(',', '.')) * formData.numberOfPeople).toFixed(0)}</span>
            </div>
          </div>

          <div className="form-actions">
            <Link to={`/vacation/${vacation.id}`} className="cancel-button">
              Annuleren
            </Link>
            <button type="submit" className="submit-button">
              Boeking bevestigen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm; 