import React from 'react'; 
import './App.css';
import Navbar from './component/Navbar'; 
import Card from './component/Card' ; 
import Fav from './component/Fav';
import { Routes , Route } from 'react-router-dom';
import Footer from './component/Footer' ;
import Index from './component/Index';

function App() {
  return (
   <>
   <Navbar />
   <Routes>
     <Route exact path='/' element={<Index/>} />
     <Route exact path='/Fav' element={<Fav/>} />
     <Route path='/Card' element={<Card/>} />
   </Routes>
   <Footer />
   </>
  );
}

export default App;
