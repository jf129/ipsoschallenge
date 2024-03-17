import LogInPage from "./pages/LogInPage";
import HomePage from "./pages/HomePage";

import {Route, Routes} from 'react-router-dom';

function App() 
{
    return (<Routes>
      <Route path="/" element={<LogInPage />}></Route>
      <Route path="/Home" element={<HomePage />}></Route>
    </Routes>)
}

export default App;