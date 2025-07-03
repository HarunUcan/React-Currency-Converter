import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'
let API_KEY = 'fca_live_esgfQ1HJ81TBdWM5RG2GDgRuhvOLOjuyE9W7Zssc'

function Currency() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState('');

    const exchange = async () => {
        // console.log('amount: ' + amount)
        // console.log('from: ' + fromCurrency)
        // console.log('to: ' + toCurrency)

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        // console.log(response.data.data[toCurrency]);
        const rate = response.data.data[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        setResult(convertedAmount);
    }

    return (
        <div className="flex flex-col gap-8 bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-6 shadow-lg w-96">
            <h1 className="text-2xl font-bold text-center mb-4">Currency Converter</h1>
            <div>
                <label className="block text-center text-sm font-medium text-gray-700">Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 border-b-1 text-center block w-full border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="flex items-end justify-between">
                <div className="flex-1 mr-2">
                    <label className="block text-sm font-medium text-gray-700">From</label>
                    <select onChange={(e) => setFromCurrency(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>TRY</option>
                    </select>
                </div>
                <div>
                    <FaArrowRightLong className="text-gray-500 text-2xl" />
                </div>
                <div className="flex-1 ml-2">
                    <label className="block text-sm font-medium text-gray-700">To</label>
                    <select onChange={(e) => setToCurrency(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option>TRY</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-center text-sm font-medium text-gray-700">Result</label>
                <input value={result.toString()} type="text" readOnly className="mt-1 border-b-1 text-center block w-full border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed" />
            </div>
            <button onClick={exchange} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">Convert</button>
        </div>
    )
}

export default Currency