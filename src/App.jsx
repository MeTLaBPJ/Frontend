import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/Main/Main";
import ChatStartPage from "./page/Main/ChatPage/ChatStartPage"
import ChatRoom from "./page/Main/ChatPage/ChatRoom/ChatRoom"
import ChatRoomInformation from "./page/Main/ChatPage/ChatRoom/ChatRoomInformation/ChatRoomInformation"
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
      </Routes>
    </Router>

  );
}

export default App;
