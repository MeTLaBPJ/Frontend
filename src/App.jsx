import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./page/Main/Main";
import Login1 from "./page/SingIn/Login1";
import Login2 from "./page/SingIn/Login2";
import Login3 from "./page/SingIn/Login3";
import Login4 from "./page/SingIn/Login4";
import Login5 from "./page/SingIn/Login5";
import Login6 from "./page/SingIn/Login6";
import Login7 from "./page/SingIn/Login7";

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

        </Routes>
      </Router>
  );
}

export default App;