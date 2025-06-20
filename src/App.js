import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Viewitems from './pages/Viewitems';
import Item from './pages/Item';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Viewitems/>}/>
          <Route path='/additem' element={<Home/>}/>
          <Route path='/viewitems' element={<Viewitems/>}/>
          <Route path='/viewimage/:id' element={<Item/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
