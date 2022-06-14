// THIS FILE IS THE STARTING POINT OF OUR WEB APP
// include packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import $ from 'jquery';
import './_globals.scss';

// include the website pages and components
import ScrollToTop from './helpers/ScrollToTop'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import ProjectsPage from './pages/ProjectsPage';
import UiDesigns from './pages/events/UiDesigns';
import RegistrationPage from './pages/RegistrationPage';

// workaround to ensure jquery is accessible by Bootstrap
window.jQuery = $;
window.$ = $;
global.jQuery = $;

ReactDOM.render(
  <React.StrictMode>

    {/* Routing:
     * Routes for our app are defined here
     * eg. gdscutechja.com/ would load the homepage
     * eg. gdscutechja.com/events would load the events page
     */}
    
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar /> 
      
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/events' element={ <EventPage/> }/>
        <Route path='/projects' element={ <ProjectsPage/> }/>
        <Route path='/events/ui' element={ <UiDesigns/>}/>
        <Route path='/register' element={ <RegistrationPage/> }/>
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
