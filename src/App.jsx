import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import './index.css';
import CreateShortPoll from "./pages/CreateShortPoll/CreatePollPage/CreatePollPage.jsx";
import ShortPolls from "./pages/ShortPolls/ShortPolls.jsx";



export default function App(){
  return <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/createShortPoll" element={<CreateShortPoll/>}/>
        <Route path="/shortPolls" element={<ShortPolls/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>

      </Routes>

}