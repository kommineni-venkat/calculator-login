"use client"
import { useState } from 'react';
const MultiplicationCalculator: React.FC = () => {
    const [result, setResult] = useState<number | null>(null);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const handleMultiplication = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    return (
        <div>
            <h1>Multiplication Calculator</h1>
            <input type="number" placeholder="Enter number 1" value={num1} onChange={e => setNum1(e.target.value)} />

            <input type="number" placeholder="Enter number 2" value={num2} onChange={e => setNum2(e.target.value)} />
            
            <button onClick={handleMultiplication}>Multiply</button>
            {result !== null && <h2>Result: {result}</h2>}
        </div>
    );
};

export default MultiplicationCalculator;
