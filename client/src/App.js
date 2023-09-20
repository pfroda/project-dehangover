import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Welcome from './pages/welcome/Welcome';
import Calendar from './pages/calendar/Calendar';
import Drinks from './pages/drinks/Drinks';
import Stats from './pages/stats/Stats';

function App() {
  return (
    <>
    <div className="App">
    <h1>DeHangover</h1>

      <Router>

        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/drinks" element={<Drinks/>}/>
          <Route path="/stats" element={<Stats/>}/>
        </Routes>

      </Router>

    
    </div>
    
    </>
  );
}

export default App;
