import {Component} from 'react'
import './index.css'

export default class EventItem extends Component {
  render() {
    const {eventItem, key} = this.props
    const {
      imageUrl,
      name,
      location,
      registrationStatus,
      onclickEvent,
    } = eventItem

    this.imageClicked = () => {
      onclickEvent(registrationStatus)
    }

    return (
      <li key={key} className="event-item-container">
        <button
          onClick={this.imageClicked}
          className="event-image-button"
          type="button"
        >
          <img className="event-image" alt="event" src={imageUrl} />
        </button>
        <h1 className="event-heading">{name}</h1>
        <p className="event-para">{location}</p>
      </li>
    )
  }
}
