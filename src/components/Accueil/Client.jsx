import React from 'react'
import {FRONT_URL} from '../../utils'

export default function Client({photo, lastName, firstName}) {
  return (
    <li>
      <img src={`${FRONT_URL}${photo}`} alt="client profile" />
      <span className="users-list-name">{lastName === '' ? firstName : lastName}</span>
    </li>
  )
}
