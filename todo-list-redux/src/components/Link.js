import React from 'react'
import ProTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
)

Link.proTypes = {
    active: ProTypes.bool.isRequired,
    children: ProTypes.node.isRequired,
    onClick: ProTypes.func.isRequired
}

export default Link