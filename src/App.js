import React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component {

    state={advice :''}

    componentDidMount() {
        console.log("Component mounting");
        this.fetchAdvices();

    }
    fetchAdvices=()=>{
        axios.get("https://api.adviceslip.com/advice")
             .then(result=>{
                 const {advice}=result.data.slip
                 this.setState({advice:advice})
                 console.log(advice);

             })
             .catch(error=>{console.error(error)})
    }

    render() {
        const {advice} = this.state;
        return (
            <div className="app">
                {/* <h1>Advice site</h1> */}
                <div className="card">
                   <h2 className="adviceTitle">Advice </h2>
                    <strong className="heading">{advice}</strong>

                    <button className="nextButton" onClick={this.fetchAdvices}>
                        <span>next advice</span>
                    </button>

                </div>
                

            </div>
            
        )
        
    }
}
export default App;