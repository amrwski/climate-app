
import React, { Component } from 'react'
import axios from "axios";
import Event from './Event'



export default class Events extends Component {
  state = {
    events: []
  }

  /**because await, no then */
  getEvent = async () => {

    const eventsBerlin = await axios.get('http://localhost:5000/events');
    this.setState({ events: eventsBerlin.data })
  }

  componentDidMount() {
    this.getEvent()
  }



  render() {
    return (
      <div>

        {this.state.events.map(event => {
          return (
            <Event event={event} />
          )
        })}

      </div>
    )
  }
}
