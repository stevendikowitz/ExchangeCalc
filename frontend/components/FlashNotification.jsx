import React from 'react'
import { Alert } from 'react-bootstrap'

class FlashNotification extends React.Component {
  render () {
    const notification = this.props.notification
    if (!notification.message) return <div />

    return (
      <Alert bsStyle={notification.class} onDismiss={this.props.onHideNotification}>
        <p>{notification.message}</p>
      </Alert>
    )
  }
}

FlashNotification.propTypes = {
  notification: React.PropTypes.object,
  onHideNotification: React.PropTypes.func
}

export default FlashNotification
