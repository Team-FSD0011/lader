
import './App.css'
import React from 'react'
import Navbar from './components/index'
import ContactUs from './components/contactUs';
import AboutUs from './components/aboutUs';
import Blog from './components/blog';
import StudyAbroad from './components/studyAbroad';
import TrainingPrograms from './components/trainingPrograms';
import Immigration from './components/immigration';
import { Route, Routes } from 'react-router-dom';



function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>   
      
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/trainingPrograms" element={<TrainingPrograms/>}/>
      <Route path="/studyAbroad" element={<StudyAbroad/>}/>
      <Route path="/immigration" element={<Immigration/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
    </Routes> 
    </>
  )
}

export default App