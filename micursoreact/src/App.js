import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Contador from './components/contador';
//Importamos las funcionalidades necesarias, especificando diferentes alias
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        //Generamos la estructura que necesita la estructura react router dom para generar las diferentes url de la App
        <Router>
          <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>  
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile/:name" element={<Profile />}/>
            </Routes>
        </Router>  
      </header>
    </div>
  );
}

export default App;
