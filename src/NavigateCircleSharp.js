import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const NavigateCircleSharp = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Navigate Circle</title><path d="M256 48A208.23 208.23 0 0048 256c0 114.68 93.31 208 208 208a208.23 208.23 0 00208-208c0-114.69-93.31-208-208-208zm-8 361V264H103l259-114.11z"/></svg>
    </SvgContainer>
  )
}


NavigateCircleSharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


NavigateCircleSharp.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default NavigateCircleSharp