import React ,{useState}from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(0)

  var incNum= () => {  
    setNum(num+1);
    // console.log('clicked'+ num++)    
  };
  return (
    <div className="App">
      <h1>Counting</h1>
      <h6>press submit button and look the counting </h6>
      <h2>{num}</h2>
      <button onClick={incNum} >Submit</button>
    </div>
  );
}

export default App;
