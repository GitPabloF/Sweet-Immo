import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './utilis/style/globalStyle'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import About from './pages/about/about';
import Error from './pages/error/error';
import Accommodation from './pages/accommodation/accommodation';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/accommodation/:id' element={ <Accommodation />} />
        <Route path='/about' element={<About />}/>
        <Route path='*' element={ <Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

