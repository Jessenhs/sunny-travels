import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import VacationList from './components/VacationList';
import VacationDetail from './components/VacationDetail';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<VacationList />} />
            <Route path="/vacation/:id" element={<VacationDetail />} />
            <Route path="/booking/:id" element={<BookingForm />} />
            <Route path="/confirmation" element={<BookingConfirmation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
