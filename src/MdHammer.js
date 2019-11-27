import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdHammer = props => {
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
      <path d="M948.2 796.4l-488.6-460.8c0 0 17.6-115.4 52.4-143.6 35-28.4 96-64 96-64v-64c-64 0-117.6 16.6-193.8 54.6-76 37.8-133.6 95.6-148.8 110.8s-36.2 39-49.4 57.8-10.6 40.2-10.6 40.2l-39.4 34-8-8c-4.6-4.6-12.4-4.6-17 0l-73.6 73.6c-4.6 4.6-4.6 12.4 0 17l118.8 118.8c4.6 4.6 12.4 4.6 17 0l73.6-73.6c4.6-4.6 4.6-12.4 0-17l-20.6-20.6 29.2-28.6c13.6-7.4 50.8-17.8 78.2-10.2l429.8 534.6c16.2 16.4 40.6 16.4 57 0l93.6-94.2c20.6-16 20.6-44.6 4.2-56.8z"></path>
    </SVG>
  )
}


MdHammer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdHammer.propTypes = {
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


export default MdHammer
