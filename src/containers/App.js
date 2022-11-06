import React, { Component } from "react";
import Cardlist from '../component/Cardlist'
import Searchbox from '../component/Searchbox'
import "./app.css"
import Scroll from '../component/Scroll'
import Errorbdry from "../component/Errorbdry";


class App extends Component {
    constructor() {
        super()
        this.state ={
            robots : [],
            searchfield : ' '
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
         .then(Response => Response.json())
         .then(user => this.setState({robots: user}))
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
       
    }
    render() {
        const {robots , searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (!robots.length){
         return <h1 className="tc"> Loading </h1>
        }else{
           return(
            <div className=" tc">
                <h1 className="f1"> Robo project</h1>
                <Searchbox searchChange={this.onSearchChange} />
                <Scroll>
                    <Errorbdry>
                        <Cardlist robots={filteredRobots} />
                    </Errorbdry>
                 
                </Scroll>
            </div>
        )    
        } 
    }
      
    
}
export default App 