import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdThunderstorm = props => {
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
      <path d="M786.4 322.4c-25.4-129.2-138.6-226.4-274.4-226.4-79.4 0-152 28-201.8 90.8 68.6 5.2 132.2 30.4 181.4 79.6 36.4 36.4 62 81 74.8 129.6h-67c-30.6-87.4-112-150-211.4-150-12 0-28.6 1.4-41.2 4-106.8 22-182.8 110.8-182.8 221 0 124.2 100.4 201 224 201h136v-206h198.2l-66.4 134h66.2l-36 72h187.4c103 0 186.6-60 186.6-163.6 0-98.8-76.6-179.2-173.6-186z M424 736h44v192l118-256h-162z"></path>
    </SVG>
  )
}


MdThunderstorm.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdThunderstorm.propTypes = {
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


export default MdThunderstorm
