import React from 'react'
type personListProp={
    names:{
        first:string
        last:string
    }[]
}

function PersonList(props:personListProp) {
  return (
    <>{
        props.names.map((x)=>{
return <h2>{x.first} {x.last}</h2>
        })
    }
    
    
    </>
  )
}

export default PersonList