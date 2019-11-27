import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const LogoEuro = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M468 544v-96h262.188l14.298-96h-276.486v-3.66c0-71.84 29.95-116.172 158.5-116.172 52.528 0 111.734 4.996 186.378 17.484l19.122-129.92c-76.024-17.486-141.388-23.732-211.886-23.732-229.462 0-328.114 82.45-328.114 234.86v21.14h-100v96h100v96h-100v96h100v53.14c0 152.408 98.594 234.86 328.054 234.86 70.5 0 135.696-6.246 211.718-23.732l-19.238-129.92c-74.644 12.488-133.562 17.484-186.090 17.484-128.552 0-158.446-37.478-158.446-126.172v-25.66h233.59l14.296-96h-247.884z"></path>
    </SVG>
  )
}


LogoEuro.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


LogoEuro.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default LogoEuro
