import { Link } from 'react-router-dom';
import './VacationCard.css';

function VacationCard({ vacation }) {
  return (
    <div className="vacation-card">
      <div className="card-image">
        <img src={vacation.image} alt={vacation.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{vacation.title}</h3>
        <p className="card-description">{vacation.shortDescription}</p>
        <div className="card-footer">
          <span className="card-price">{vacation.price} p.p.</span>
          <Link to={`/vacation/${vacation.id}`} className="card-button">
            Bekijk details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VacationCard; 