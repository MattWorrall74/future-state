import React from 'react';
import './App.scss';
import FullHeader from './components/FullHeader';
import HomeCarousel from './components/HomeCarousel';

function App() {
  return (
    <div className="App">
      <FullHeader></FullHeader>
      <HomeCarousel></HomeCarousel>
    </div>
  );
}

export default App;
