import React from 'react'
type GreetProps={
    name:string
    messageCount:number
    isLoggedIn:boolean
}
function Greet(props:GreetProps) {
  return (
    <div>
        <h2>
            {props.isLoggedIn?`Welcome ${props.name} you have ${props.messageCount} messages`:'Welcome Guest'}
            </h2></div>
  )
}

export default Greet