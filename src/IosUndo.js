import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosUndo = props => {
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
      <path d="M895.8 736.4c0-33.6 7.2-166.2-97.4-271.4-70.4-70.8-160.6-106.8-286.6-112.4v-160.6l-383.8 256 384 256v-159.6c80 2.2 124.8 18.2 173.4 40 61.8 27.6 110.6 88 151.6 153.2l38.4 62.4h20.6c0-20.2-0.2-45.8-0.2-63.6z"></path>
    </SVG>
  )
}


IosUndo.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosUndo.propTypes = {
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


export default IosUndo
