import React, { Component } from 'react'
import './styles.css' 


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            current_box: 0,
            userName: 'ssprite',
            inputDay: '',
            loading: true
        }
    }

    componentDidMount(){
        console.log('test value from Profile didMount')
        console.log(`Today is ${this.props.day}`)
        //fetch data from backend

        //----------

    }

    onBoxClick (index) {
        console.log(index)
        this.setState({current_box: index})
    }

    onSetDay(){

        //console.log('Clicked! ' + this.props.day )
        this.props.set_day(this.state.inputDay)
    }

    render() {
        //Destructure **
        const {current_box,userName,inputDay} = this.state // equivaleht to const current_box = this.state.current_box
        const {day} = this.props

        return (
            <div>
                <h1>Profile {userName}</h1>
                <h2>{day}</h2>
                <input value={inputDay} onChange={(event)=> {
                    //console.log(event.currentTarget.value)
                    this.setState({inputDay: event.currentTarget.value})
                }}/>

                <button onClick={this.onSetDay.bind(this)}>Set day</button>
                
                <div className='flex-box'>
                    <div className='box' onClick={this.onBoxClick.bind(this, 1)}/>
                    <div className='box2'onClick={() => this.onBoxClick(2)}/>
                    <div className='box3'onClick={() => this.onBoxClick(3)}/>
                </div>

        <p>current box {current_box}</p>


            </div>
        )
    }
}


export default Profile