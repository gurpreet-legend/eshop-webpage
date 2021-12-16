import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebase'

initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
