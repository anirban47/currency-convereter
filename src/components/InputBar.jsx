import React from 'react';
// import '../App.css';

function InputBar(props) {
    return (
        <div>
            <input type="number" onChange={props.handleInputChange} value={props.amount}/>
            <select onChange={props.handleCurrencyChange}>
                {(props.currencyOptions).map(
                    option => (<option key={option} value={option}>{option}</option>)
                )}
            </select>
        </div>
    );
}

export default InputBar;
