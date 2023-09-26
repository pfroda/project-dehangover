import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { useDrink } from './context/DrinksContext';
import { useEffect, useState } from 'react';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Welcome from './pages/Welcome';
import Calendar from './pages/Calendar';
import Drinks from './pages/Drinks';
import Stats from './pages/Stats';
import Header from './components/header/Header';
import './App.css';

function App() {
  const { user } = useAuth();
  const { userDrinks, getDrinks } = useDrink();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getDrinks(user.id).then(() => setLoading(false));
    }
  }, [user]);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route
            path="/drinks"
            element={<Drinks />}
          />
          <Route
            path="/stats"
            element={
              loading ? (
                <p>Loading...</p>
              ) : userDrinks.length > 0 ? (
                <Stats />
              ) : (
                <Navigate replace to={'/welcome'} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
