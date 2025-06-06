import React from 'react'
import TodoList from './TodoList'

const Header = (props) => {
  return (
    <div>
      <h1><TodoList todo={props.Header}/></h1>
    </div>
  )
}

export default Header
