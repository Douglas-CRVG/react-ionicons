import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosRemoveCircle = props => {
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
      <path d="M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416c229.8 0 416-186.2 416-416s-186.2-416-416-416zM768 530h-512v-34h512v34z"></path>
    </SVG>
  )
}


IosRemoveCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosRemoveCircle.propTypes = {
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


export default IosRemoveCircle
