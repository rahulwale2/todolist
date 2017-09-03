import React from 'react'
import _ from 'lodash'

export default (props) => {
  return (
    <ul>
      {
        _.map(props.sections, (section, i) => <li onClick={props.onClick.bind(this, section.id)} key={i}>{section.name}</li>)
      }
    </ul>
  )
}