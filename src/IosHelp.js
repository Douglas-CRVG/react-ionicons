import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosHelp = props => {
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
      <path d="M520.6 732c-18.8 0-34-15-34-33.8 0-18.6 15.2-33.6 34-33.6s34 15 34 33.6c0 18.8-15.2 33.8-34 33.8zM588.2 501.4c-45.6 45-44.4 54.8-46.6 106.6h-38c2.2-57 15-87.4 60.2-129 22-20.6 38.8-45.4 38.8-76.2 0-47.2-38.8-79.8-85.2-79.8-64.8 0-97 32.8-95.8 92.8h-37.6c0.6-84 48.8-124.2 135.2-124.2 66 0 120.8 40.8 120.8 109.2 0 43.8-21.4 72.4-51.8 100.6z"></path>
    </SVG>
  )
}


IosHelp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHelp.propTypes = {
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


export default IosHelp
