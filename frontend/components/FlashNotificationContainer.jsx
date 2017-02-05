// Container component for FlashNotifications

import { connect } from 'react-redux'
import FlashNotification from './FlashNotification'
import {
  clearNotification
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    notification: state.getIn(['notification']).toJS()
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHideNotification: () => {
      dispatch(clearNotification())
    }
  }
}

const FlashNotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashNotification)

export default FlashNotificationContainer
