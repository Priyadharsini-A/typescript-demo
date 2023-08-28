import React from 'react'
type WelcomeProps={
    sname:string
    age:number
}

function Welcome(props:WelcomeProps) {
  return (
    
    <>
    <h2>
Welcome {props.sname} Age{props.age}
        </h2></>
  )
}

export default Welcome