import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import BookACall from './components/pages/BookACall';
import Articles from './components/pages/Articles';
import OnBoarding from './components/pages/OnBoarding'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

function App() {


  return (
      <>
      <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/book-a-call" element={<BookACall/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/mrs-fox-agency-onboarding-link" element={<OnBoarding/>}/>
      </Routes>
      </>
    );
}

export default App;
