// Code for the main App component
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

//CSS
import './App.css';

//Pages
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';

//Components
import NavBar from './components/NavBar.jsx';

//Functional Component
function ProtectedRoute({ element: Component, ...rest }) {
  const checkAuth = () => {
    return localStorage.getItem('token') ? true : false;
  };
  return checkAuth() ? <Component {...rest} /> : <Navigate to="/login" />;
}



// Prop validation
ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function App() {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={Homepage} isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
