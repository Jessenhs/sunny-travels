import { useState } from 'react';
import { vacations } from '../data/vacations';
import VacationCard from './VacationCard';
import SearchBar from './SearchBar';
import './VacationList.css';

function VacationList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVacations = vacations.filter(vacation =>
    vacation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vacation.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vacation.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="vacation-list-container">
      <div className="hero-section">
        <h1>Ontdek jouw droomvakantie</h1>
        <p>Bij Sunny Travels vind je de mooiste bestemmingen voor een onvergetelijke vakantie</p>
      </div>
      
      <div className="container">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <div className="vacation-grid">
          {filteredVacations.length > 0 ? (
            filteredVacations.map(vacation => (
              <VacationCard key={vacation.id} vacation={vacation} />
            ))
          ) : (
            <div className="no-results">
              <p>Geen vakanties gevonden voor "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VacationList; 