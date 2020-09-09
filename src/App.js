import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import BottomNav from './Components/BottomNav/BottomNav';
import Layout from './Layout/Layout'


function App() {
  return (
    <div className="App">

    {/* Components/Header */}
    <Header />
    
    {/* ../layout */}
    <Layout />

    {/* Sticky Menu Bottom */}
    <BottomNav />
    </div>
  );
}

export default App;
