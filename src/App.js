import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Card from './components/Card';
import { pastTrips, futureTrips } from './data.js'
import Border from './components/Border';
import Header from './components/Header';

// import profilePic from './images/tommy-shelby.png'




export default function App() {
  const pastTravels = pastTrips.map(item => {
    return <Card
    key={item.id} 
    {...item}
    />
  });
  const futureTravels = futureTrips.map(item => {
    return <Card
    key={item.id} 
    {...item}
    />
  })
  return (
    <div className='page'>
    <Navbar />
    <Intro />
    <Border />
    <Header title="Past Trips:" />
    <div className='cards-wrapper'>
   {pastTravels}
      </div>
      <Header title="Future Trips:" />
      <div className='cards-wrapper'>
   {futureTravels}
      </div>
    </div>
  );
}


