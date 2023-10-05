import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Welcome from './Components/WelcomePage';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Welcome/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
