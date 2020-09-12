import React from 'react';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import InputBar from './components/InputBar.jsx';
import './App.css';

function App() {
    return(
        <div className="app">
            <Navbar/>
            <div className="flex-container">
                <InputBar className="flex-item"/>
                <InputBar className="flex-item"/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
