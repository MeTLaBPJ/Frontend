import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./page/Main/Main";
import Mypage from "./page/Mypage/Mypage"

function App() {
 
  return (
   
      <Router>
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage/>}/>
          
        </Routes>
      </Router>
  );
}

export default App;
