
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
      <>
      
      <NavBar/>
      
      <main className="flex-grow"> 
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='*' element={
            <div className="text-center text-primary text-title p-20">404 - Página No Encontrada</div>
          } />
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
        </Routes> 
      </main> 
      
      <Footer/>
      </>
  );
}

export default App;