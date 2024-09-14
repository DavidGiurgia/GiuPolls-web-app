import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import './index.css';
import CreatePoll from "./pages/CreatePollPage/CreatePollPage.jsx";



export default function App(){
  return <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/createPoll" element={<CreatePoll/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>

      </Routes>

}