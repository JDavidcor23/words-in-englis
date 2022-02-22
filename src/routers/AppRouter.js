import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Tutorial from '../pages/Tutorial';
function AppRouter() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tutorial/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
