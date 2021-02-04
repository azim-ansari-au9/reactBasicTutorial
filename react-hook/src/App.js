import React,{useState} from 'react';
import './App.css';


const  App = () => {
  // console.log(useState('azim asnari'))
  // var val = 'Azim Ansari hooks';

  const [val, setVal] = useState('Azim Ansari hooks')
  const onChange = () => {
    setVal(' welcome To Hooks')
}

// console.log(val)
return (
    <div className="App">
      <h1>{val}</h1>
      <button className="btn btn-dark" onClick={onChange}>press me</button>
    </div>
  );
}

export default App;
