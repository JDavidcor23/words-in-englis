import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Tutorial from '../pages/Tutorial';
import Games from '../pages/Games';
import Write from '../pages/Write';
import Navbar from "../components/Navbar";
import { useState } from 'react';
import Presentation from '../components/Presentation';

function AppRouter() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <BrowserRouter>
    {isTrue && <Presentation isTrue={isTrue} setIsTrue={setIsTrue} />}
      <Navbar />
    <Routes>
        <Route path="/" element={<Tutorial/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
