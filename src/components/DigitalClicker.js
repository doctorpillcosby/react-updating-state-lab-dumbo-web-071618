// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component{

  constructor(props){

    super(props)

    this.state = {timesClicked: 0}
  }

  timesClicked = () => {


    this.setState(prevState => ({
          timesClicked: prevState.timesClicked+1
        }))

  }

  render(){

    return(<div> <button onClick={this.timesClicked}>{this.state.timesClicked}</button> </div>)
  }
}
