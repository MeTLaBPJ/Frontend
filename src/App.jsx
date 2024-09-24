import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/Main/Main";
import Login from "./page/Login/Login";
import Login1 from "./page/Login/Login1";
import Login2 from "./page/Login/Login2";
import Login3 from "./page/Login/Login3";
import Login4 from "./page/Login/Login4";
import Login5 from "./page/Login/Login5";
import Login6 from "./page/Login/Login6";
import Login7 from "./page/Login/Login7";
import Mypage from "./page/Mypage/Mypage"
import Mbti from "./page/Mbti/Mbti";
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
import ESFP from "./page/Mbti/Mbti_result/ESFP";
import ESFJ from "./page/Mbti/Mbti_result/ESFJ";
import ESTP from "./page/Mbti/Mbti_result/ESTP";
import ESTJ from "./page/Mbti/Mbti_result/ESTJ";
import ENFP from "./page/Mbti/Mbti_result/ENFP";
import ENFJ from "./page/Mbti/Mbti_result/ENFJ";
import ENTP from "./page/Mbti/Mbti_result/ENTP";
import ENTJ from "./page/Mbti/Mbti_result/ENTJ";
import ISFP from "./page/Mbti/Mbti_result/ISFP";
import ISFJ from "./page/Mbti/Mbti_result/ISFJ";
import ISTP from "./page/Mbti/Mbti_result/ISTP";
import ISTJ from "./page/Mbti/Mbti_result/ISTJ";
import INFP from "./page/Mbti/Mbti_result/INFP";
import INFJ from "./page/Mbti/Mbti_result/INFJ";
import INTP from "./page/Mbti/Mbti_result/INTP";
import INTJ from "./page/Mbti/Mbti_result/INTJ";
import ChatStartPage from "./page/Chat/ChatStartPage"
import ChatRoom from "./page/Chat/ChatRoom/ChatRoom"
import MakeChatRoom from "./page/Chat/MakeChatRoom/MakeChatRoom";
import { MbtiProvider } from "./context/MbitContext";
import { UserProvider } from "./context/UserContext";

function App() {

  return (
    <UserProvider>
      <MbtiProvider>
        <Router>
          <Routes>

            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login1" element={<Login1 />} />
            <Route path="/login2" element={<Login2 />} />
            <Route path="/login3" element={<Login3 />} />
            <Route path="/login4" element={<Login4 />} />
            <Route path="/login5" element={<Login5 />} />
            <Route path="/login6" element={<Login6 />} />
            <Route path="/login7" element={<Login7 />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mbti" element={<Mbti />} />
            <Route path="/mbti1" element={<Mbti1 />} />
            <Route path="/mbti2" element={<Mbti2 />} />
            <Route path="/mbti3" element={<Mbti3 />} />
            <Route path="/mbti4" element={<Mbti4 />} />
            <Route path="/mbti5" element={<Mbti5 />} />
            <Route path="/mbti6" element={<Mbti6 />} />
            <Route path="/mbti7" element={<Mbti7 />} />
            <Route path="/mbti8" element={<Mbti8 />} />
            <Route path="/mbti9" element={<Mbti9 />} />
            <Route path="/mbti10" element={<Mbti10 />} />
            <Route path="/mbti11" element={<Mbti11 />} />
            <Route path="/mbti12" element={<Mbti12 />} />
            <Route path="/estj_result" element={<ESTJ />} />
            <Route path="/istj_result" element={<ISTJ />} />
            <Route path="/entp_result" element={<ENTP />} />
            <Route path="/intp_result" element={<INTP />} />
            <Route path="/esfj_result" element={<ESFJ />} />
            <Route path="/isfj_result" element={<ISFJ />} />
            <Route path="/enfj_result" element={<ENFJ />} />
            <Route path="/infj_result" element={<INFJ />} />
            <Route path="/estp_result" element={<ESTP />} />
            <Route path="/istp_result" element={<ISTP />} />
            <Route path="/entj_result" element={<ENTJ />} />
            <Route path="/intj_result" element={<INTJ />} />
            <Route path="/esfp_result" element={<ESFP />} />
            <Route path="/isfp_result" element={<ISFP />} />
            <Route path="/enfp_result" element={<ENFP />} />
            <Route path="/infp_result" element={<INFP />} />


            <Route path="/ChatStartPage" element={<ChatStartPage />} />
            {/* <Route path="/chat/:roomId" element={<ChatRoom />} /> */}
            <Route path="/chat/2" element={<ChatRoom />} />
            <Route path="/makeChatRoom" element={<MakeChatRoom />} />
          </Routes>
        </Router>
      </MbtiProvider>
    </UserProvider>
  );
}

export default App;