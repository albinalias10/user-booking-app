
import './App.css';
import { AppointmentModeForm } from './components/AppointmentModeForm';
import ConfirmationPage from './components/ConfirmationPage';
import Footer from './components/Footer';
import Header from './components/Header';
import UserInfoForm from './components/UserInfoForm';
import { useIsMobile } from './hooks/useIsMobile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const isMobile = useIsMobile(); // checking if the device is mobile
  return (
    <Router>
       <div className="app-container">
      {!isMobile && <Header />} {/* Header component is hidden on mobile */}
       <main className="main-content">
      <Routes>
        <Route path="/" element={<UserInfoForm />} />
        <Route path="/appointment-mode" element={<AppointmentModeForm />} />
        <Route path="/confirmation" element={<ConfirmationPage/>} />
      </Routes>
      </main>
       <Footer />
      
      </div>
    </Router>
  )
}

export default App;