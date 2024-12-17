import { useState } from 'react'
import './App.css'

function App() {
const [height, setHeight]=useState("");
const [weight, setWeight]=useState("");
const [bmi, setBmi]=useState(null)
// const [bmiStatus,setBmiStatus]=useState("")
const [category, setCategory] = useState('');


const calculateBMI = () => {
  if (weight && height) {
    const heightInMeters = height / 100; // Convert height to meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  } else {
    alert('Please enter both weight and height');
  }
};
  return (
    <>
   <div className="App">
      <h1 style={{fontWeight:'bolder',marginLeft:'30px'}} className='container text-center mt-5 fw-bold text-danger'>BMI Calculator</h1>
      <div className="">
        <div className=' container text-center mt-5 fw-bold  '>
          <label  htmlFor="weight">Weight (kg): </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className=' container text-center mt-5 fw-bold  '>
          <label htmlFor="height">Height (cm): </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <button style={{backgroundColor:'green', color:'white',marginLeft:'20%',marginTop:'3%' }} onClick={calculateBMI}>Calculate BMI</button>
<br /><br />
      {bmi && (
        <div className="result">
          <h2 style={{marginLeft:'10%'}} className=' container text-center mt-5 fw-bold  '>Your BMI: {bmi}</h2>
          <p style={{marginLeft:'10%'}}  className=' container text-center mt-5 fw-bold  '>Category: {category}</p>
        </div>
      )}
    </div>
    
    </>
  )
}

export default App
