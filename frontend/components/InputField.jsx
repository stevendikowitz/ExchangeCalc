import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

function InputField ({ id, label, type, placeholder, onChange, onKeyDown, value }) {
  const props = {type, placeholder, onChange, onKeyDown, value}
  return (
    <div className='input'>
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    </div>
  )
}

InputField.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  value: React.PropTypes.any
}

export default InputField
