import './App.css'
import StartLogo from './comp/StartMenuLogo.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from './comp/VideoPlayer.jsx';
import BackButton from './comp/BackButton.jsx';
import MenuText from './comp/MenuText.jsx';
import DecorLines from './comp/DecorLines.jsx';
import AudioPlayer from './comp/AudioPlayer.jsx';
import TextPlayer from './comp/TextPlayer.jsx';
import Header from './comp/Header.jsx';
import { useState } from 'react';
import { Log001Card, Log002Card, Log003Card, Log004Card, Log005Card, Log006Card, Log007Card, Log008Card, Log009Card, Log010Card, AudioLog001Card, AudioLog002Card, TextLog001Card, TextLog002Card, TextLog003Card, TextLog004Card } from "./comp/LogMenu";
import About from './comp/About.jsx';
import Farewell from './comp/Farewell.jsx';

function App() {
  const [log,setlog]= useState(false); 
  const media = "/audiotestbeat2.mp3";

  return (
    <> <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div><StartLogo /><MenuText /></div>} />
        <Route path="/about" element={<div><About/></div>}/>
        <Route path="/farewell" element={<Farewell />} />
        <Route path="/logMenu" element={<div><Log001Card /> <Log002Card /> <Log003Card /> <Log004Card /> <Log005Card /> <Log006Card /> <Log007Card /> <Log008Card /> <Log009Card /> <Log010Card /> <AudioLog001Card /> <AudioLog002Card /> <TextLog001Card /> <TextLog002Card /> <TextLog003Card /> <TextLog004Card /></div>}/>
        <Route path="/log001" element={<div><VideoPlayer media="/log1.mp4" logNumber="001" text="I spent some time at the park, it was crowded as usual, the sun was already hiding but it was nice to feel the cold breeze."/><BackButton /> <DecorLines/></div>}/>
        <Route path="/log002" element={<div><VideoPlayer media="/log2.mp4" logNumber="002" text="we were at a nice cafe as a farewell party, enjoying the moment, it was the only time i saw them together, we were happy."/><BackButton /> <DecorLines/></div>}/>
        <Route path="/log003" element={<div><VideoPlayer media="/log3.mp4" logNumber="003" text="i didn't realize i was recording by accident."/><BackButton /> <DecorLines/></div>}/>      
        <Route path="/log004" element={<div><VideoPlayer media="/log4.mp4" logNumber="004" text="holding him like a husband."/><BackButton /> <DecorLines/></div>}/>    
        <Route path="/log005" element={<div><VideoPlayer media="/log5.mp4" logNumber="005" text="null"/><BackButton /> <DecorLines/></div>}/>    
        <Route path="/log006" element={<div><VideoPlayer media="/log6.mp4" logNumber="006" text="null"/><BackButton /> <DecorLines/></div>}/>
        <Route path="/log007" element={<div><VideoPlayer media="/log7.mp4" logNumber="007" text="null"/><BackButton /> <DecorLines/></div>}/>
        <Route path="/log008" element={<div><VideoPlayer media="/log8.mp4" logNumber="008" text="null"/><BackButton /> <DecorLines/></div>}/>
        <Route path="/log009" element={<div><VideoPlayer media="/log9.mp4" logNumber="009" text="null"/><BackButton /> <DecorLines/></div>}/>
        <Route path="/log010" element={<div><VideoPlayer media="/log10.mp4" logNumber="010" text="null"/><BackButton /> <DecorLines/></div>}/>
        <Route path="/audio001" element={<div><AudioPlayer media="/audiotestbeat.mp3" picture="/audio001image.jpg" logNumber="001" text="this used to be my old room, you can see some posters and the desktop PCs, a bit cluttered but cozy."/><BackButton /> <DecorLines/></div>}/>
        <Route path="/audio002" element={<div><AudioPlayer media="/audiotestbeat2.mp3" picture="/audio002image.JPG" logNumber="002" text="i felt cute in the park so i took a picture."/><BackButton /> <DecorLines/></div>}/>
        <Route path="/text001" element={<div><TextPlayer logNumber="001" text="&quot;war is over if you want it&quot; said john lennon, but what does it mean? well i think it means sometimes our own minds are the biggest obstacles."/><BackButton /> <DecorLines/></div>}/>
        <Route path="/text002" element={<div><TextPlayer logNumber="002" text="null"/><BackButton /> <DecorLines/></div>}/>
        <Route path="/text003" element={<div><TextPlayer logNumber="003" text="null"/><BackButton /> <DecorLines/></div>}/>
        <Route path="/text004" element={<div><TextPlayer logNumber="004" text="null"/><BackButton /> <DecorLines/></div>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
} 

export default App
