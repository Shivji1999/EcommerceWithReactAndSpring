
import Login from './components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MainNav from './components/MainNav';

import Register from "./components/Register"
import Home from './components/Home';
import Brands from './components/Brands';
import Description from './components/Description';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav/>
        
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/description" element={<Description />} />
            </Routes>
            </div>
          
    </Router>
  );
}

export default App;
