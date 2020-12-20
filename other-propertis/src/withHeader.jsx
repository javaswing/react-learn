import React from 'react'

const getDisplayName = (component) => component.displayName || component.name || 'Component'

export default function withHeader(WrappedCommponent, title = "默认标题") {
  class WithHeader extends React.Component {
    render() {
      const { forwardedRef, ...rest } = this.props; // hoc中转发ref
      return (<fieldset>
        <legend>{title}</legend>
        <WrappedCommponent ref={forwardedRef} {...rest} />
      </fieldset>)
    }
  }

  function forwardRef (props, ref) {
    return <WithHeader {...props} forwardedRef={ref} />
  }
  forwardRef.displayName = `WithHeader(${getDisplayName(WrappedCommponent)})`
  
  return React.forwardRef(forwardRef);
}