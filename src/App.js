
import './App.css';
import {useState} from'react';
function App() {
  const [temperaturevalue,setTemperaturevalue] = useState(20)
  const [temperatureColor,setTemperatureColor] = useState("hot");

  const increasetemperature =() =>{
    const newtemp = temperaturevalue+1
    if (newtemp > 15) {
      setTemperatureColor("hot")
    }
    if (newtemp <= 30) {
      setTemperaturevalue(newtemp)

    }

   
  }

  const decreasetemperature =() =>{
    const newtemp = temperaturevalue-1
    if (newtemp < 15) {
      setTemperatureColor("cold")
    }
    if (newtemp >= 0) {
      setTemperaturevalue(newtemp)

    }

   
  }
  
  return (
    <div className="temperaturecontainer">
      <div className={`temperaturebox ${temperatureColor}`}>{temperaturevalue}°C  </div>
      <div className='button'>
        <button className='box1' onClick={() => increasetemperature()}>+</button>
        <button className='box2' onClick={() => decreasetemperature()}>-</button>
      </div>
      
    </div> 
  );
}

export default App;
