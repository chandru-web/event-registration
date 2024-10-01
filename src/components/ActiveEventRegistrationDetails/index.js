import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEventId, eventsList} = props
  const activeEvent = eventsList.find(event => event.id === activeEventId)
  const activeRegistrationStatus = activeEvent
    ? activeEvent.registrationStatus
    : ''

  const renderYetToRegisterView = () => (
    <div className="div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.seeing
        dance live can happen make you fall totally in love with this beautiful
        art of form.
      </p>
      <button type="button" className="yet-to-register-button">
        Register here
      </button>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registration closed"
        className="registration-closed-img"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-description">
        Stay tuned. We will reopen the registration soon!
      </p>
    </div>
  )

  const renderSuccessfulRegistrationView = () => (
    <div className="div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderDefaultView = () => (
    <div className="div">
      <h1 className="event-status-heading">
        Click an event to view its registration details
      </h1>
    </div>
  )

  const renderView = () => {
    switch (activeRegistrationStatus) {
      case 'YET_TO_REGISTER':
        return renderYetToRegisterView()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationClosedView()
      case 'REGISTERED':
        return renderSuccessfulRegistrationView()
      default:
        return renderDefaultView()
    }
  }

  return <div>{renderView()}</div>
}

export default ActiveEventRegistrationDetails
