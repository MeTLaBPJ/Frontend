import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./page/LoginPage/Main";
import Login1 from './page/SignIn/Login1';
import Login2 from './page/SignIn/Login2';
import Login3 from './page/SignIn/Login3';
import Login4 from './page/SignIn/Login4';
import Login5 from './page/SignIn/Login5';
import Login6 from './page/SignIn/Login6';
import Login7 from './page/SignIn/Login7';

import ChatStartPage from "./page/Main/ChatPage/ChatStartPage"
import ChatRoom from "./page/Main/ChatPage/ChatRoom/ChatRoom"
import MakeChatRoom from "./page/Main/ChatPage/MakeChatRoom/MakeChatRoom";
import Mypage from "./page/Mypage/Mypage"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/ChatStartPage" element={<ChatStartPage />} />
        {/* <Route path="/chat/:roomId" element={<ChatRoom />} /> */}
        <Route path="/chat/2" element={<ChatRoom />} />
        <Route path="/makeChatRoom" element={<MakeChatRoom />} />
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
