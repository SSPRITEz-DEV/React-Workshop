import React,{Component} from 'react';
import './App.css';
import Profile from './components/profile';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      day: 'Tuesday',
    }
  }

  onSetDay(dayChange){
    this.setState({day: dayChange})
  }


  render(){
    const {day} = this.state
  
    return (
      <div className="App">

      <h1>React private workshop (Tue)
      </h1>

      <Profile day={day} set_day={this.onSetDay.bind(this)}/>

    </div>
    )
  }s
}

export default App;
