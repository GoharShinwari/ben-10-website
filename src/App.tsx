import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TopBar from './components/TopBar';
import Docs from './components/Docs';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>A RESTful Ben 10 API</h1>
      <p>Get organized hand-curated Ben 10 data</p>
      <Link to="/docs">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/docs" element={<Docs />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
