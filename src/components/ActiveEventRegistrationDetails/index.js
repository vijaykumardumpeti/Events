import {Component} from 'react'
import './index.css'

export default class ActiveEventRegistrationDetails extends Component {
  render() {
    const {status, statusesObject} = this.props

    const {
      initial,
      yetToRegister,
      registrationsClosed,
      registered,
    } = statusesObject

    this.yetToRegister = () => (
      <div className="yet-to-register-container">
        <img
          className="register-image"
          alt="yet to register"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        />
        <p className="register-para">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form
        </p>
        <button className="register-here-button" type="button">
          Register Here
        </button>
      </div>
    )

    this.closedRegistration = () => (
      <div className="closed-registrations-container">
        <img
          className="registrations-closed-image"
          alt="registrations closed"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        />
        <h1 className="closed-heading">Registrations Are Closed Now!</h1>
        <p className="closed-para">
          Stay tuned. We will reopen the registrations soon
        </p>
      </div>
    )

    this.alreadyRegistered = () => (
      <div className="already-registerd-container">
        <img
          className="registered-image"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1>You have already registered for the event</h1>
      </div>
    )

    this.intialContainer = () => (
      <div className="intial-container">
        <p>Click on an event, to view its registration details</p>
      </div>
    )

    this.switchMethod = () => {
      switch (status) {
        case initial:
          return this.intialContainer()
        case yetToRegister:
          return this.yetToRegister()
        case registrationsClosed:
          return this.closedRegistration()
        case registered:
          return this.alreadyRegistered()

        default:
          return null
      }
    }

    return (
      <div className="event-registration-details-container">
        {this.switchMethod()}
      </div>
    )
  }
}
