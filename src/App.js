import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';


import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Countries from './components/pages/Countries';
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Paris from './components/pages/Paris';
import Louvre from './components/pages/Louvre';
import DisneyLand from './components/pages/DisneyLand';
import Palais from './components/pages/Palais';
import Eyfel from './components/pages/Eyfel';
import France from './components/pages/France';
import Roma from './components/pages/Roma';
import Collesium from './components/pages/Collesium';
import TreviFountain from './components/pages/TreviFountain';
import GalleriaBorghese from './components/pages/GalleriaBorghese';
import MariaMaggiore from './components/pages/MariaMaggiore';
import London from './components/pages/London';
import Buckinghampalace from './components/pages/BuckinghamPalace';
import LondonEye from './components/pages/LondonEye';
import BritishMuseum from './components/pages/BritishMuseum';
import TowerBridge from './components/pages/TowerBridge';
import CoventGarden from './components/pages/CoventGarden';
import TowerOfLondon from './components/pages/TowerOfLondon';
import ViewShard from './components/pages/ViewShard';
import Times from "./components/pages/Times";
import Liberty from "./components/pages/Liberty";
import CentralPark from "./components/pages/Centralpark";
import Met from "./components/pages/Met";


import CanadaPage from './components/pages/CanadaPage';
import Toronto from './components/pages/Toronto';
import NewYork from './components/pages/NewYork';
import UnitedStatesPage from './components/pages/UnitedStatesPage';
import LosAngles from './components/pages/LosAngeles';
import LasVegas from './components/pages/LasVegas';
import Miami from './components/pages/Miami';
import SanFrancisco from './components/pages/SanFrancisco';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path='/paris' element={<Paris />} />
        <Route path='/louvre' element={<Louvre />} />
        <Route path='/disney' element={<DisneyLand />} />
        <Route path='/eyfel' element={<Eyfel />} />
        <Route path='/palais' element={<Palais />} />
        <Route path='/roma' element={<Roma />} />
        <Route path='/collesium' element={<Collesium />} />
        <Route path='/trevi' element={<TreviFountain />} />
        <Route path='/galleria' element={<GalleriaBorghese />} />
        <Route path='/maria' element={<MariaMaggiore />} />
        <Route path='/london' element={<London />} />
        <Route path='/buckinghampalace' element={<Buckinghampalace />} />
        <Route path='/londoneye' element={<LondonEye />} />
        <Route path='/britishmuseum' element={<BritishMuseum />} />
        <Route path='/towerbridge' element={<TowerBridge />} />
        <Route path='/coventgarden' element={<CoventGarden />} />
        <Route path="/newyork" element={<NewYork />} />
        <Route path='/toweroflondon' element={<TowerOfLondon />} />
        <Route path='/viewshard' element={<ViewShard />} />
        <Route path="/times" element={<Times />} />
        <Route path="/liberity" element={<Liberty />} />
        <Route path="/centralpark" element={<CentralPark/>} />
        <Route path="/met" element={<Met />} />

        <Route path="/countries/canada" element={<CanadaPage />} />
        <Route path="/canada/Toronto" element={<Toronto />} />
        <Route path="/countries/United States" element={<UnitedStatesPage />} />
        <Route path="/United States/Los Angeles" element={<LosAngles />} />
        <Route path="/United States/Las Vegas" element={<LasVegas />} />
        <Route path="/United States/Miami" element={<Miami />} />
        <Route path="/United States/San Francisco" element={<SanFrancisco />} />
        <Route path="/United States/New York" element={<NewYork />} />
        <Route path="/countries/france" element={<France />} />
        <Route path="/france/paris" element={<Paris />} />
        <Route path="/italy/rome" element={<Roma />} />
        <Route path="/United Kingdom/london" element={<London />} />

      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;