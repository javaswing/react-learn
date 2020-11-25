import React from 'react';
import PropTypes from 'prop-types'

const Picker = ({ currentAlbum, onChange, options }) => (
  <div>
    <h1>当前分类：{currentAlbum.label}</h1>
    <select onChange={e => onChange(e.target.value)} value={currentAlbum.value}>
      {options.map(option => 
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      )}
    </select>
  </div>
)


Picker.propTypes = {
  currentAlbum: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  )
}

export default Picker;