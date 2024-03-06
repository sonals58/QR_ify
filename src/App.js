import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './components/home';
import GenerateQr from './components/generateQr';
function App() {
  return (
    <Router>
      <div className='app'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/generateQr' element={<GenerateQr></GenerateQr>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
