
import './App.css'
import React from 'react'
import Home from './components/index'
import ContactUs from './components/contactUs';
import AboutUs from './components/aboutUs';
import StudyAbroad from './components/studyAbroad';
import Blog from './components/blog';
import BlogsDetails from './components/BlogsDetails';
import TrainingPrograms from './components/trainingPrograms';
import Immigration from './components/immigration';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbars from './components/Navbars'
import BlogsCompNext from './components/Blogs/BlogsCompNext';
import BlogsComp from './components/Blogs/BlogsComp';
<<<<<<< HEAD
import ETA from './components/enrolledAgent';
=======
import StudyAus from './components/studyAus';

>>>>>>> 73878e11a62b913df8e469478eae2f3424d2ed01




function App() {
 

  return (
    <>
    <Navbars/>

    <Routes>   
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/trainingPrograms" element={<TrainingPrograms/>}/>
      <Route path="/enrolledAgent" element={<ETA/>}/>
      <Route path="/studyAbroad" element={<StudyAbroad/>}/>
      <Route path="/studyinAUSTRALIA" element={<StudyAus/>}/>
      <Route path="/immigration" element={<Immigration/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/Blogs/:id" element={<BlogsDetails/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      <Route path="/blognext" element={<BlogsCompNext/>}/>
      <Route path="/blog" element={<BlogsComp/>}/>
    </Routes>
    <br/>

    <Footer/>
    </>
  )
}

export default App;
