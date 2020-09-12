import React from 'react';
import {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import InputBar from './components/InputBar.jsx';
import './App.css';

function App() {
    // const API_URL = "https://api.exchangeratesapi.io/latest?base=INR";
    return(
        <div className="app">
            <Navbar/>
            <div className="flex-container">
                <InputBar className="flex-item"/>
                <InputBar className="flex-item"/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
