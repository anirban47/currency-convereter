import React from 'react';
import {useState, useEffect} from 'react';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import InputBar from './components/InputBar.jsx';
import './App.css';

function App() {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [exchangeRate, setExchangeRate] = useState();
    const [rowOneAccess, setRowOneAccess] = useState(false);
    const [amount, setAmount] = useState(0);
    var rowOneAmount, rowTwoAmount;

    useEffect(() => {
        fetch("https://api.exchangeratesapi.io/latest?base=INR")
            .then(res => res.json())
            .then((data) => setCurrencyOptions([...Object.keys(data.rates)]))
    }, []);

    const [currOne, setCurrOne] = useState();
    const [currTwo, setCurrTwo] = useState();

    useEffect(()=> {
        if(currOne != null && currTwo != null) {
            fetch(`https://api.exchangeratesapi.io/latest?&base=${currOne}&symbols=${currTwo}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[currTwo]))
        }
    }, [currOne, currTwo]);

    // console.log(exchangeRate);
    function handleChangeRowOne(e) {
        setRowOneAccess(true);
        setAmount(e.target.value);

    }
    function handleChangeRowTwo(e) {
        setRowOneAccess(false);
        setAmount(e.target.value);
    }

    var amtTwo;
    var amtOne = amount;
    // console.log(e);
    if(rowOneAccess === true) {
        // console.log("Bwoah!");
        amtTwo = exchangeRate*amtOne;
        rowTwoAmount = amtTwo;
    } else {
        amtTwo = amtOne/exchangeRate;
        rowOneAmount = amtTwo;
    }

    return(
        <div className="app">
            <Navbar/>
            <div className="flex-container">
                <InputBar
                    className="flex-item"
                    currencyOptions={currencyOptions}
                    handleCurrencyChange={(e) => setCurrOne(e.target.value)}
                    handleInputChange={handleChangeRowOne}
                    name="rowOne"
                    amount={rowOneAmount}
                />
                <InputBar
                    className="flex-item"
                    currencyOptions={currencyOptions}
                    handleCurrencyChange={(e) => setCurrTwo(e.target.value)}
                    handleInputChange={handleChangeRowTwo}
                    name="rowTwo"
                    amount={rowTwoAmount}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
