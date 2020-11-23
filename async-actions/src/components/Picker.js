import React from 'react';
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => (
  <div>
    <h1>当前分类：{value}</h1>
    <select onChange={e => onChange(e.target.value)} value={value}>
      {options.map(option => 
        <option value={option} key={option}>
          {option}
        </option>
      )}
    </select>
  </div>
)


Picker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    // PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   valeu: PropTypes.number.isRequired
    // })
    PropTypes.string.isRequired
  )
}

export default Picker;