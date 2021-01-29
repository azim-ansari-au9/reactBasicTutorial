import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LifeCycle extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp)=>{
            console.log(resp.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }

    render() {
        console.log('render')
        return (
            <>
            <button onClick={this.increment}>{this.state.counter} clicks</button>
            <Link to={'/'}>Go Back Home</Link>
            </>
        )
    }

}

export default LifeCycle;
