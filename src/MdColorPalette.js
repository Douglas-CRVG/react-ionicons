import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdColorPalette = props => {
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
      <path d="M512 128c-211.198 0-384 172.802-384 384 0 211.208 172.802 384 384 384 36.272 0 64-27.728 64-64 0-17.062-6.396-32-17.062-42.666-10.666-10.668-17.062-25.606-17.062-42.668 0-36.27 27.728-64 64-64h76.792c117.334 0 213.334-96 213.334-213.332-0.002-187.73-172.794-341.334-384.002-341.334zM277.334 512c-36.272 0-64-27.728-64-64s27.728-64 64-64c36.27 0 64 27.728 64 64s-27.73 64-64 64zM405.334 341.334c-36.272 0-64-27.73-64-64 0-36.272 27.728-64 64-64 36.27 0 64 27.728 64 64 0 36.27-27.73 64-64 64zM618.666 341.334c-36.27 0-64-27.73-64-64 0-36.272 27.73-64 64-64 36.272 0 64 27.728 64 64 0 36.27-27.728 64-64 64zM746.666 512c-36.27 0-64-27.728-64-64s27.73-64 64-64c36.272 0 64 27.728 64 64s-27.728 64-64 64z"></path>
    </SVG>
  )
}


MdColorPalette.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdColorPalette.propTypes = {
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


export default MdColorPalette
