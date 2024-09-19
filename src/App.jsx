import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Main from "./page/Main/Main";
import Mypage from "./page/Mypage/Mypage"
import Mbti1 from "./page/Mbti/Mbti1";
import Mbti2 from "./page/Mbti/Mbti2";
import Mbti3 from "./page/Mbti/Mbti3";
import Mbti4 from "./page/Mbti/Mbti4";
import Mbti5 from "./page/Mbti/Mbti5";
import Mbti6 from "./page/Mbti/Mbti6";
import Mbti7 from "./page/Mbti/Mbti7";
import Mbti8 from "./page/Mbti/Mbti8";
import Mbti9 from "./page/Mbti/Mbti9";
import Mbti10 from "./page/Mbti/Mbti10";
import Mbti11 from "./page/Mbti/Mbti11";
import Mbti12 from "./page/Mbti/Mbti12";

function App() {
 
  return (
   
      <Router>
        <Routes>
          
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/mbti1" element={<Mbti1/>}/>
          <Route path="/mbti2" element={<Mbti2/>}/>
          <Route path="/mbti3" element={<Mbti3/>}/>
          <Route path="/mbti4" element={<Mbti4/>}/>
          <Route path="/mbti5" element={<Mbti5/>}/>
          <Route path="/mbti6" element={<Mbti6/>}/>
          <Route path="/mbti7" element={<Mbti7/>}/>
          <Route path="/mbti8" element={<Mbti8/>}/>
          <Route path="/mbti9" element={<Mbti9/>}/>
          <Route path="/mbti10" element={<Mbti10/>}/>
          <Route path="/mbti11" element={<Mbti11/>}/>
          <Route path="/mbti12" element={<Mbti12/>}/>
        </Routes>
      </Router>
  );
}

export default App;
