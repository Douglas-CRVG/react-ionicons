import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdHelpCircle = props => {
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
      <path d="M512 96c-229.6 0-416 186.4-416 416s186.4 416 416 416 416-186.4 416-416-186.4-416-416-416zM554 762h-84v-84h84v84zM553.6 636h-83.2c0-134 124.8-124.4 124.8-207.6 0-45.8-37.4-83.4-83.2-83.4s-83.2 39-83.2 83h-83.2c0-92 74.4-166 166.4-166s166.4 74.2 166.4 166.2c0 104-124.8 115.8-124.8 207.8z"></path>
    </SVG>
  )
}


MdHelpCircle.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdHelpCircle.propTypes = {
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


export default MdHelpCircle
