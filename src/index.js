import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { datas } from './datas/datas'
import GlobalStyle from './utilis/style/GlobalStyle'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Accommodation from './pages/Accommodation/Accommodation';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const datasID = datas.map((data) => {
//   return(
//   )})
  
//   const isIDExist = `/accommodation/:` !== datasID.includes()

// const t = datas.map((data) => {
//     return(
//       `/accommodation/${data.id}`
//     )})
// // '/accommodation/:id'

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

