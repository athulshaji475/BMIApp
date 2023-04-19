import React from 'react'

function bmiscore(props) {
const{bmino,bmit}=props  //destructuring
  //console.log(props)
  return (
    
    <>
      <div className='text-center shadow rounded p-4'>
<div>Your BMI Score</div>
<div className='p3 my-2 alert fs-1 alert-primary col-sm-4'>24</div>
<div className='fs-3 fw-bold text-primary'>over weight</div>
      </div>
    </>
  )
}

export default bmiscore