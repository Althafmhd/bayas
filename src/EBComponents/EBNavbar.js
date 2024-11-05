import React from 'react'
import { Link } from "react-router-dom"
const EBNavbar = () => {
  return (
    <nav>
       <Link to="/"> EBReader </Link>
       <Link to="/TKMBlock"> TKMBlock</Link>
       <Link to="/OBBlock">OBBlock</Link>
       <Link to="/AddDeleteMeter">AddDeleteMeter</Link>
       <Link to="/ViewMeterValue">ViewMeterValue</Link>
    </nav>
  )
}

export default EBNavbar