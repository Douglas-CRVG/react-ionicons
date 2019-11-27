import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRibbon = props => {
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
      <path d="M512 64c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zM512 480c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z M387.4 614.8c-38.2-16.2-72.4-39.2-101.6-68.6-2.8-2.8-5.6-5.6-8.2-8.6l-149.6 262.4h192l96 160 147-324c-16.8 2.6-33.8 4-51 4-43.2 0-85-8.4-124.6-25.2z M746.6 537.8c-2.6 2.8-5.4 5.8-8.2 8.6-29.2 29.2-63.4 52.4-101.4 68.4l-49 107.6-43.8 96.8 63.8 140.8 96-160h192l-149.4-262.2z"></path>
    </SVG>
  )
}


MdRibbon.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRibbon.propTypes = {
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


export default MdRibbon
