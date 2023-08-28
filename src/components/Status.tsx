import React from 'react'
type statusProps={
    status:string
}
function Status(props:statusProps) {
    let message
    if(props.status==='loading'){
        message='Loading...'
    }else if(props.status==='success'){
        message='Data fetched successfully'
    }else if(props.status==='error'){
        message='Error fetching data'
    }

  return (
    <>
    <h2>Status -{message}</h2>
    
    </>
  )
}

export default Status