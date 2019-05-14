import React, { Component } from 'react'

export default class EmissionsUserSelection extends Component {
  state = {
    incidentInfo: null
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="user-selection-form">
        {console.log(this.props)}
        <h4>Our interface lets you experiment with different models and scenarios for universally-recognized temperature and precipitation indicators. </h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <select value={this.props.incidentType} onChange={(e) => this.props.changed(e)} className="select" name="incidentType">
              <option value="">Choose an extreme weather incident</option>
              <option value="heat_wave_incidents">Heat Wave Incidents</option>
              <option value="extreme_cold_events">Extreme Cold Events</option>
              <option value="extreme_heat_events">Extreme Heat Events</option>
              <option value="dry_spells">Dry Spells</option>
            </select>

            <br />

            <select value={this.props.city} onChange={(e) => this.props.changed(e)} className="select" name="city">
              <option value="">Choose a city</option>
              <option value="1">New York</option>
              <option value="2">Los Angeles</option>
              <option value="3">Chicago</option>
              <option value="12">San Diego</option>
              <option value="17">San Francisco</option>
              <option value="18">Austin</option>
            </select>
          </div>
          <br />
          <div>
            <label /* for="inp" */ className="inp">
              <input value={this.props.startYear} type="text" id="inp" name='startYear' onChange={(e) => this.props.changed(e)} />
              <span className="label">Start year</span>
              <span className="border"></span>
            </label>
          </div>
          <br />
          <div><label /* for="inp" */ className="inp">
            <input value={this.props.endYear} onChange={(e) => this.props.changed(e)} type="text" id="inp" name='endYear' />
            <span className="label">End year</span>
            <span className="border"></span>
          </label></div>
          <br />

        </form>
      </div>
    )
  }
}