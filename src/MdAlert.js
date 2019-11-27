import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdAlert = props => {
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
      <path d="M512 96c-228.8 0-416 187.202-416 416s187.2 416 416 416c228.8 0 416-187.202 416-416s-187.2-416-416-416zM560 720h-96v-80h96v80zM560 544h-96v-256h96v256z"></path>
    </SVG>
  )
}


MdAlert.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdAlert.propTypes = {
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


export default MdAlert
