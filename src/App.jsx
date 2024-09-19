import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from './page/LoginPage/Main.jsx';
import Login1 from './page/SingIn/Login1.jsx';
import Login2 from './page/SingIn/Login2.jsx';
import Login3 from './page/SingIn/Login3.jsx';
import Login4 from './page/SingIn/Login4.jsx';
import Login5 from './page/SingIn/Login5.jsx';
import Login6 from './page/SingIn/Login6.jsx';
import Login7 from './page/SingIn/Login7.jsx';
import Login8 from './page/SingIn/Login8.jsx';

function App() {
 
  return (
   
      <Router>
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/Login1" element={<Login1 />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/Login3" element={<Login3 />} />
          <Route path="/Login4" element={<Login4 />} />
          <Route path="/Login5" element={<Login5 />} />
          <Route path="/Login6" element={<Login6 />} />
          <Route path="/Login7" element={<Login7 />} />
          <Route path="/Login8" element={<Login8 />} />

        </Routes>
      </Router>
  );
}

export default App;