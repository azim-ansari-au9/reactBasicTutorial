import React,{useState} from 'react';
import './App.css';


const  App = () => {

  const [val, setVal] = useState('Azim Ansari hooks');
  
  const onChange = (e) => {
    e.preventDefault();
    setVal('welcome To Hooks');
    let name = val;
    (name === 'Azim Ansari hooks')?
    setVal('welcome To Hooks'):setVal('Azim Ansari hooks')
    // clearState()
  }

console.log(val)
return (
    <div className="App">
      <h1>{val}</h1>
      <button className="btn btn-dark" onClick={onChange}>press me</button>
    </div>
  );
}

export default App;
