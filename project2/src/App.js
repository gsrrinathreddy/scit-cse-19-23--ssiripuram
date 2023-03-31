import logo from './logo.svg';
import './App.css';
import SNavbar from './Components/SNavbar';
import {Routes,Route} from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Achievements from './Pages/Achievements';
import Certifications from './Pages/Certifications';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';
import Experience from './Pages/Experience';




function App() {
  return (
    <div className="App">
      <SNavbar/>
      <Routes>
        <Route path="/Aboutme" element={<Aboutme/>}/>
        <Route path="/Achievements" element={<Achievements/>}/>
        <Route path="/Certifications" element={<Certifications/>}/>
        <Route path="/Qualification" element={<Qualification/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="/Experience" element={<Experience/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
