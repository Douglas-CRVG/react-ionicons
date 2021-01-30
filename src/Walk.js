import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Walk = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Walk</title><path d="M312.55 479.9l-56.42-114-44.62-57a72.37 72.37 0 01-10.06-36.9V143.64H217a40 40 0 0140 40v182.21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M127.38 291.78v-74.07s37-74.07 74.07-74.07" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M368.09 291.78a18.49 18.49 0 01-10.26-3.11L297.7 250a21.18 21.18 0 01-9.7-17.79v-23.7a5.65 5.65 0 018.69-4.77l81.65 54.11a18.52 18.52 0 01-10.29 33.93zM171.91 493.47a18.5 18.5 0 01-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0110.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09 5.24 9.95 6 16.11-1.68 25.7-8 10-52 67.44-52 67.44-2.62 2.98-7.23 3.7-11.09 3.7z"/><circle cx="257" cy="69.56" r="37.04" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
    </SvgContainer>
  )
}


Walk.defaultProps = {
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


Walk.propTypes = {
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


export default Walk