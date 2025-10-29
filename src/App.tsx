
import './App.css';
import { AppointmentModeForm } from './components/AppointmentModeForm';
import Header from './components/Header';
import UserInfoForm from './components/UserInfoForm';
import { useIsMobile } from './hooks/useIsMobile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const isMobile = useIsMobile(); // checking if the device is mobile
  return (
    <Router>
      {!isMobile && <Header />} {/* Header component is hidden on mobile */}
      <Routes>
        <Route path="/" element={<UserInfoForm />} />
        <Route path="/appointment-mode" element={<AppointmentModeForm />} />
      </Routes>
    </Router>
  )
}

export default App;