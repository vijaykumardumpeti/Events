import {Component} from 'react'
import './index.css'

export default class EventItem extends Component {
  render() {
    const {eventItem, key, onclickEvent, isClicked} = this.props
    const {id, imageUrl, name, location, registrationStatus} = eventItem

    const styling = isClicked ? 'border-styling' : ''
    console.log(isClicked)

    this.imageClicked = () => {
      onclickEvent(registrationStatus, id)
    }

    return (
      <li key={key} className="event-item-container">
        <button
          onClick={this.imageClicked}
          className="event-image-button"
          type="button"
        >
          <img
            className={`event-image ${styling}`}
            alt="event"
            src={imageUrl}
          />
        </button>
        <p className="event-heading">{name}</p>
        <p className="event-para">{location}</p>
      </li>
    )
  }
}
