import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const ColorFilter = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Color Filter</title><path d="M253.72 202.53a4 4 0 004.56 0 151.88 151.88 0 01128.44-20.41 4 4 0 005.15-4C388.8 105.86 329 48 256 48s-132.8 57.86-135.87 130.15a4 4 0 005.15 4 151.88 151.88 0 01128.44 20.41zM405.31 212.56a152.53 152.53 0 01-83.08 108.23 4 4 0 00-2.28 3.69c0 1.17.05 2.34.05 3.52a151.58 151.58 0 01-47.15 109.94 4 4 0 00.64 6.31A135.24 135.24 0 00344 464c72.07 0 134.1-60.28 136-132.34a136.07 136.07 0 00-68.76-121.87 4 4 0 00-5.93 2.77z"/><path d="M390.57 203.67a4 4 0 00-2.69-4.4 135.84 135.84 0 00-114.4 12.49 4 4 0 00-.64 6.29 151.92 151.92 0 0144.47 81.4 4 4 0 005.94 2.72 136.29 136.29 0 0067.32-98.5zM192 328c0-1.18 0-2.35.05-3.52a4 4 0 00-2.28-3.69 152.53 152.53 0 01-83.08-108.23 4 4 0 00-5.88-2.77 136.07 136.07 0 00-68.76 121.87C34 403.72 96 464 168.05 464a135.24 135.24 0 0070.46-19.75 4 4 0 00.64-6.31A151.58 151.58 0 01192 328z"/><path d="M168 192a135.34 135.34 0 00-43.88 7.27 4 4 0 00-2.69 4.4 136.29 136.29 0 0067.32 98.5 4 4 0 005.94-2.72 151.92 151.92 0 0144.47-81.4 4 4 0 00-.64-6.29A135.18 135.18 0 00168 192zM256 336a151.44 151.44 0 01-42.72-6.12 4 4 0 00-5.15 4 135.69 135.69 0 0045.18 95.4 4 4 0 005.38 0 135.69 135.69 0 0045.18-95.4 4 4 0 00-5.15-4A151.44 151.44 0 01256 336zM302.57 308.33a135.94 135.94 0 00-43.87-81.58 4.06 4.06 0 00-5.4 0 135.94 135.94 0 00-43.87 81.58 4 4 0 002.69 4.4 136.06 136.06 0 0087.76 0 4 4 0 002.69-4.4z"/></svg>
    </SvgContainer>
  )
}


ColorFilter.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


ColorFilter.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default ColorFilter