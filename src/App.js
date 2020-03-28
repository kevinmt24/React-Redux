import React , {Component}from 'react';
import Ninjas from './Navbar';
import Forms from './Forms'

class App extends Component
{
  state = {
    ninjas : [
      { name : 'Kevin',age: 19, belt:'black',id:1 },
      { name : 'Ann',age: 20, belt:'orange',id:2 },
      { name : 'Messi',age: 33, belt:'red',id:3 }
    ]
  }

 addNinja = (ninja) => {
   ninja.id = Math.random();
   let ninjas = [...this.state.ninjas,ninja];
   this.setState({
     ninjas:ninjas  
   })
 } 

render(){
  return(
    <div className="App">
      <h1>Hey There!</h1>
    <Ninjas ninjas={this.state.ninjas} />
    </div>
  )
}
}

export default App;
