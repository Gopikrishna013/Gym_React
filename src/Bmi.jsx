import React, { useState } from 'react';
import './Bmi.css'

function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBMI(bmiValue.toFixed(2));
    };

    return (
        <div className='gym-bmi'>
        <div className='gym-sub' >
            <div className='gym-total'>
                <h2 className='gym-h'>BMI Calculator</h2>
                <div className='gym-wt'>
                    <label>Weight (kg): </label>
                    <input className='gym-inp'  placeholder='&nbsp; &nbsp; Enter value' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className='gym-ht'>
                    <label>Height (cm): </label>
                    <input className='gym-inp' placeholder='&nbsp; &nbsp; Enter value' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <button className='gym-btn' onClick={calculateBMI}>Calculate BMI</button>
                {bmi !== null && <p className='gym-rslt'>Your BMI is: {bmi}</p>}
            </div>
        </div>
        </div>
    );
}

export default BMICalculator;