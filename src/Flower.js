import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Flower = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Flower</title><circle cx="256" cy="256" r="48"/><path d="M475.93 303.91a67.49 67.49 0 00-44.34-115.53 5.2 5.2 0 01-4.58-3.21 5.21 5.21 0 011-5.51A67.83 67.83 0 00378 66.33h-.25A67.13 67.13 0 00332.35 84a5.21 5.21 0 01-5.52 1 5.23 5.23 0 01-3.22-4.58 67.68 67.68 0 00-135.23 0 5.2 5.2 0 01-3.21 4.58 5.21 5.21 0 01-5.52-1 67.11 67.11 0 00-45.44-17.69H134a67.91 67.91 0 00-50 113.34 5.21 5.21 0 011 5.51 5.2 5.2 0 01-4.58 3.21 67.71 67.71 0 000 135.23 5.23 5.23 0 014.58 3.23 5.22 5.22 0 01-1 5.52 67.54 67.54 0 0050.08 113h.25A67.38 67.38 0 00179.65 428a5.21 5.21 0 015.51-1 5.2 5.2 0 013.21 4.58 67.71 67.71 0 00135.23 0 5.23 5.23 0 013.22-4.58 5.21 5.21 0 015.51 1 67.38 67.38 0 0045.29 17.42h.25a67.48 67.48 0 0050.08-113 5.22 5.22 0 01-1-5.52 5.23 5.23 0 014.58-3.22 67.31 67.31 0 0044.4-19.77zM256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80z"/></svg>
    </SvgContainer>
  )
}


Flower.defaultProps = {
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


Flower.propTypes = {
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


export default Flower