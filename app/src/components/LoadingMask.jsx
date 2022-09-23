/*'rfce'-commanddal le lehet gyártani*/
import React from 'react'
import LoadingImg from '../images/loading.png'

function LoadingMask() {
  return (
    <div>
      <h1>Loading...</h1>
      <img src={LoadingImg} alt='loading' />
    </div>
    )
}

export default LoadingMask
