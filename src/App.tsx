
import './App.css';
import Header from './components/Header';
import { useIsMobile } from './hooks/useIsMobile';

function App() {
  const isMobile = useIsMobile(); // checking if the device is mobile
  return (
    <>
      {!isMobile && <Header />} {/* Header component is hidden on mobile */}
    </>
  )
}

export default App;