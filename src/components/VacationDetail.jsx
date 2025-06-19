import { useParams, Link } from 'react-router-dom';
import { vacations } from '../data/vacations';
import './VacationDetail.css';

function VacationDetail() {
  const { id } = useParams();
  const vacation = vacations.find(v => v.id === parseInt(id));

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
    <div className="vacation-detail">
      <div className="detail-hero">
        <img src={vacation.image} alt={vacation.title} className="detail-image" />
        <div className="detail-overlay">
          <div className="container">
            <h1 className="detail-title">{vacation.title}</h1>
            <p className="detail-location">📍 {vacation.location}, {vacation.country}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="detail-content">
          <div className="detail-main">
            <div className="detail-description">
              <h2>Over deze vakantie</h2>
              <p>{vacation.detailedDescription}</p>
            </div>

            <div className="detail-highlights">
              <h3>Hoogtepunten</h3>
              <ul>
                {vacation.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="detail-sidebar">
            <div className="booking-card">
              <div className="price-info">
                <span className="price">{vacation.price}</span>
                <span className="price-label">per persoon</span>
              </div>
              
              <div className="trip-info">
                <div className="trip-detail">
                  <strong>Duur:</strong> {vacation.duration}
                </div>
                <div className="trip-detail">
                  <strong>Inclusief:</strong> {vacation.includes}
                </div>
              </div>

              <Link to={`/booking/${vacation.id}`} className="book-button">
                Boek nu
              </Link>
            </div>
          </div>
        </div>

        <div className="navigation">
          <Link to="/" className="back-link">← Terug naar overzicht</Link>
        </div>
      </div>
    </div>
  );
}

export default VacationDetail; 