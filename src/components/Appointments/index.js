/* eslint-disable react/button-has-type */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    name: '',
    timeDate: '',
    isTrue: false,
  }

  onType = event => {
    this.setState({timeDate: event.target.value})
  }

  onTypeName = event => {
    this.setState({name: event.target.value})
  }

  submitValue = event => {
    event.preventDefault()
    const {name, timeDate} = this.state
    const createdList = {
      id: uuidv4(),
      person: name,
      addDate: timeDate,
      active: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, createdList],
      name: '',
      timeDate: '',
      isTrue: false,
    }))
  }

  touchImage = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each =>
        each.id === id ? {...each, active: !each.active} : each,
      ),
    }))
  }

  onChangeList = () => {
    const {appointmentList} = this.state
    const filterList = appointmentList.filter(each => each.active === true)
    this.setState({appointmentList: filterList, isTrue: true})
  }

  render() {
    const {appointmentList, name, timeDate, isTrue} = this.state

    const isT = isTrue ? 'bu' : 'btn'

    return (
      <div className="mainContainer">
        <div className="cardContainerW">
          <div className="cardContainer">
            <form onSubmit={this.submitValue}>
              <h1>Add Appointment</h1>
              <div className="titleStyle">
                <label htmlFor="inputEl">TITLE</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Title"
                  id="inputEl"
                  value={name}
                  onChange={this.onTypeName}
                />
              </div>
              <div className="titleStyle">
                <label htmlFor="dateEl">DATE</label>
                <br />
                <input
                  onChange={this.onType}
                  className="form-control"
                  type="date"
                  id="dateEl"
                  value={timeDate}
                />
              </div>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="imageEl"
            />
          </div>
          <hr className="h" />
          <div className="app">
            <h1 className="head">Appointments</h1>
            <button onClick={this.onChangeList} className={isT}>
              Starred
            </button>
          </div>
          <ul className="cardBack">
            {appointmentList.map(each => (
              <AppointmentItem
                itemsList={each}
                key={each.id}
                touchImage={this.touchImage}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
