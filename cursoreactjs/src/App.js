import logo from './logo.svg';
import './App.css';
import { EssayForm } from './components/EassyForm';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { RecibeFuncion } from './components/RecibeFuncion.jsx'
import { ConversorEurosPsta } from './components/ConversorEurosPsta.jsx';
import Clock from './components/Clock';
import Tablero from './components/Tablero';
function App() {
  
  

  return (
    <div className="App">
      <header className="App-header">
        
      {/* <Clock date={new Date()}/> */}
      <ConversorEurosPsta></ConversorEurosPsta>
      {/* <Tablero>
        
      </Tablero> */}
      </header>
    </div>
  );
}

export default App;
