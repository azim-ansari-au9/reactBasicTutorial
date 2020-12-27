import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

const Comp = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();
    // const [species,setSpecies] = useState();

    useEffect(() => {
        // alert('Hi Pokemon')
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            // console.log(res.data.species);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            // setSpecies(res.data.species.url);

        }
        getData();
    })
    return(
        <>
        <div className='App'>
            <h1> You Have Choosen <span style={{color:"red"}}> {num} </span>value</h1>
            <h1> My Name is <span style={{color:"red"}} >{name}</span></h1>
            <h1> I have moves <span style={{color:"red"}} >{moves}</span></h1>
            {/* <h1>My species is {species}</h1> */}
            <select className='select'
            value={num} 
            onChange={(e)=>{
                setNum(e.target.value);
            }}>
                <option value='1'> 1 </option>
                <option value='25'> 25 </option>
                <option value='3'> 3 </option>
                <option value='2'> 2 </option>
                <option value='4'> 4 </option>
                <option value='6'> 6 </option>
                <option value='5'> 5 </option>
            </select>
        </div>
        </>
    )
}

export default Comp;