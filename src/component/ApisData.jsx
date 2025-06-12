import React from 'react'
import Datas from './Datas'

const ApisData = (props) => {
  return (
    <div> 
      <h1><Datas data={props.Datas}/></h1>
    </div>
  )
}

export default ApisData
