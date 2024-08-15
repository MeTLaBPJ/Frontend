import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./page/Main/Main";

function App() {
 
  return (
   
      <Router>
        <Routes>
          
          <Route path="/" element={<Main />} />
          
        </Routes>
      </Router>
  );
}

export default App;
