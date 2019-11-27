import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdHeart = props => {
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
      <path d="M512 896l-60.328-54.422c-214.236-196.694-355.672-324.358-355.672-483.388 0-129.748 99.836-230.19 228.8-230.19 72.798 0 141.434 33.484 187.2 87.894 45.764-54.41 114.398-87.894 187.2-87.894 128.964 0 228.8 100.442 228.8 230.19 0 159.032-141.438 286.696-355.672 483.388l-60.328 54.422z"></path>
    </SVG>
  )
}


MdHeart.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdHeart.propTypes = {
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


export default MdHeart
