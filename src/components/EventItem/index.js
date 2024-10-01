import './index.css'

const EventItem = props => {
  const {eventDetails, clickEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const activeEventClassName = isActive ? 'active' : ''

  const onChangeActiveEvent = () => {
    clickEvent(id)
  }

  return (
    <li>
      <div className="event-container">
        <button
          type="button"
          className={`event-button ${activeEventClassName}`}
          onClick={onChangeActiveEvent}
        >
          <img src={imageUrl} alt="event" className="event-img" />
        </button>
        <h1 className="event-name">{name}</h1>
        <p className="event-location">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
