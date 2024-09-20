import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./page/LoginPage/Main";
import SignUpProcess from "./page/SignIn/SignUpProcess";
import Login from './page/SignIn/Login';

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
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUpProcess" element={<SignUpProcess />} />
      </Routes>
    </Router>

  );
}

export default App;
