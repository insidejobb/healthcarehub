import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './Components/WelcomePage';
import Sidebar from "./Components/Homepage";
import BarGraph from "./Components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path="/Home" element={<Sidebar/>}/>
        
          {/* <Route path='/Home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<ContactUs/>}/> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
