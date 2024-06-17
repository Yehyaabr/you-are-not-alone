import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Test = () => {
    const params = useParams()
    const location = useLocation()
    console.log(location)
  return (
    <div>Test</div>
  )
}

export default Test