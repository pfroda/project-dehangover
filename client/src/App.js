
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import DrinkProvider from './context/DrinksContext';
import HangoverProvider from './context/HangoversContext';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import NoData from './pages/nodata/NoData';
import Calendar from './pages/calendar/Calendar';
import Drinks from './pages/drinks/Drinks';
import Stats from './pages/stats/Stats';
import Header from './components/header/Header';
import './App.css';

function App() {

  return (
    <div className="App">     
      <AuthProvider>
        <DrinkProvider>
          <HangoverProvider>
            <Header/>
              <Router>
                <Routes>
                  <Route path="/" element={<Signin />} />
                  <Route path="/login" element={<Signin />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/welcome" element={<NoData />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/drinks" element={<Drinks />} />
                  <Route path="/stats" element={<Stats />}/>
                </Routes>
              </Router>
          </HangoverProvider>
        </DrinkProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
