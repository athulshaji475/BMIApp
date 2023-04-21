import React from 'react'

function bmiscore(props) {
const{bmino,bmitype}=props  //destructuring
  //console.log(props)
  return (
    
    <div className='bmiscore'>
      <div className='text-center shadow rounded p-4'>
<div><h3>Your BMI Score</h3></div>
<div className='p3 my-2 alert fs-1 alert-primary col--sm-4' style={{color:'red'}}><h2>{bmino}</h2></div>
<div className='fs-3 fw-bold text-primary'><h5>{bmitype}</h5></div>
      </div>
    </div>
  )
}

export default bmiscore