import React, { useState } from 'react';
import './calculator.css'

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const display = (val) => {
        setInputValue(inputValue + val)
    }

    const calculate = () => {
        try {
            let answers = eval(inputValue)
            setInputValue(answers)
        } catch (error) {
            console.log(error);
        }
    }
    const clear = () => {
        setInputValue('')
    }
    return (
        <div>
            <h2>Calculator</h2>
            <form name='calc' className='calculator'>
                <input type="text" className='value' value={inputValue} />
                <span className="clear" onClick={() => clear()}>C</span>
                <span onClick={() => display('/')}>/</span>
                <span onClick={() => display('*')}>*</span>
                <span onClick={() => display('7')}>7</span>
                <span onClick={() => display('8')}>8</span>
                <span onClick={() => display('9')}>9</span>
                <span onClick={() => display('-')}>-</span>
                <span onClick={() => display('4')}>4</span>
                <span onClick={() => display('5')}>5</span>
                <span onClick={() => display('6')}>6</span>
                <span onClick={() => display('+')}>+</span>
                <span onClick={() => display('1')}>1</span>
                <span onClick={() => display('2')}>2</span>
                <span onClick={() => display('3')}>3</span>
                <span onClick={() => display('0')}>0</span>
                <span onClick={() => display('00')}>00</span>
                <span onClick={() => display('.')}>.</span>
                <span onClick={() => calculate()}>=</span>
            </form>
        </div>
    );
};

export default Calculator;