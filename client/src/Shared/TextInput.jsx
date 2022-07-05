import PropTypes from 'prop-types'

function TextInput(props) {
  const {
    type,
    className,
    value,
    label,
    labelClass,
    onChange,
    name,
    placeholder,
    textarea
  } = props
  return (
    <div className='formControl'>
      <span className={` formLabel ${labelClass}`}>{label}</span>
      {textarea ? (
        <textarea
          className={`formTextarea ${className}`}
          name={name}
          required
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          type={type}
          className={`formInput ${className}`}
          name={name}
          value={value}
          required
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

TextInput.defaultProps = {
  value: ''
}

TextInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  textarea: PropTypes.bool
}

export default TextInput
