import React from 'react'
import Select from 'react-select'

class InputSelect extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.value && nextProps.defaultValue) {
      this.handleChange(nextProps.defaultValue)
    }
  }

  componentDidMount () {
    if (!this.props.value && this.props.defaultValue) {
      this.handleChange(this.props.defaultValue)
    }
  }

  handleChange (value) {
    this.props.onChange(this.props.name, value)
  }

  handleFocus () {
    this.select.focus()
  }

  render () {
    return (
      <div className='input'>
        <label onClick={this.handleFocus}>{this.props.label}</label>
        <Select ref={(ref) => (this.select = ref)} autofocus searchable simpleValue
          name={this.props.name}
          clearable={false}
          onChange={this.handleChange}
          options={this.props.options}
          placeholder={this.props.placeholder}
          value={this.props.value} />
      </div>
    )
  }
}

InputSelect.propTypes = {
  defaultValue: React.PropTypes.string,
  label: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  options: React.PropTypes.array.isRequired,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string
}

export default InputSelect
