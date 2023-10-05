import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Welcome from './Components/WelcomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Welcome/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
