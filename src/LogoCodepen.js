import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const LogoCodepen = props => {
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
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Logo Codepen</title><path d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59zM195.09 240.67q23.19-15.24 46.11-30.86a7.54 7.54 0 002.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44 1.02.66 3.4.28 4.57-.48zM269.84 209.35q23.71 16.07 47.63 31.82a4.3 4.3 0 003.83 0l39.76-26.47L268 152.48v53.35a4.79 4.79 0 001.84 3.52zM258.11 230.37a5.27 5.27 0 00-4.74.17c-4.82 3-9.47 6.2-14.17 9.35-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 006.26.11l39-26s-34.07-22.66-39.84-26.49zM141 237.12v39.61l29.62-19.84L141 237.12z"/><path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72 40.91-27.13 81.94-54.36 122.73-81.68 5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66z"/><path d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01zM370 276.68v-39.62l-29.59 19.87L370 276.68z"/></svg>
    </SvgContainer>
  )
}


LogoCodepen.defaultProps = {
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


LogoCodepen.propTypes = {
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


export default LogoCodepen