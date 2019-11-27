import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCallOutline = props => {
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
      <path d="M831.8 671c-29.2-30-112.2-86.2-166.6-86.2-12.6 0-23.6 2.8-32.6 8.6-26.6 17-47.8 30.2-58 30.2-5.6 0-11.6-5-24.8-16.4l-2.2-2c-36.6-31.8-44.4-40-58.6-54.8l-3.6-3.8c-2.6-2.6-4.8-5-7-7.2-12.4-12.8-21.4-22-53.2-58l-1.4-1.6c-15.2-17.2-25.2-28.4-25.8-36.6-0.6-8 6.4-21 24.2-45.2 21.6-29.2 22.4-65.2 2.6-107-15.8-33-41.6-64.6-64.4-92.4l-2-2.4c-19.6-24-42.4-36-67.8-36-28.2 0-51.6 15.2-64 23.2-1 0.6-2 1.4-3 2-27.8 17.6-48 41.8-55.6 66.4-11.4 37-19 85 35.6 184.8 47.2 86.4 90 144.4 158 214.2 64 65.6 92.4 86.8 156 132.8 70.8 51.2 138.8 80.6 186.4 80.6 44.2 0 79 0 128.6-59.8 52-62.8 30.4-101.2-0.8-133.4zM808.8 782.8c-40 48.4-63 48.4-104.6 48.4-40.6 0-103.6-28-168.4-74.6-62-44.8-89.6-65.4-151.8-129.2-65.8-67.4-107.2-123.6-152.8-207-48.2-88.2-42.8-126.8-33-158.6 5.2-17 20.8-35.2 42-48.4 1-0.6 2-1.4 3.2-2 10.6-6.8 28.2-18.2 47.4-18.2 16 0 30.2 8 43.8 24.6l2 2.4c51 62.4 90.8 117.6 60.8 158.4-21.2 28.6-32.4 48-30.6 68 1.6 19.4 14.6 34 34.2 56l1.4 1.6c32.2 36.4 41.4 46 54.2 59 2.2 2.2 4.4 4.6 7 7.2l3.6 3.8c14.8 15.4 23 23.8 60.6 56.8l2.2 2c16 14 27.8 24.2 45 24.2 17.8 0 37.4-11.2 74.6-35 3.8-2.4 9.2-3.8 16-3.8 43.4 0 118.2 49.6 144.4 76.6 24 24.4 36 42.8-1.2 87.8z"></path>
    </SVG>
  )
}


IosCallOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCallOutline.propTypes = {
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


export default IosCallOutline
