import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  )
};

export default App;