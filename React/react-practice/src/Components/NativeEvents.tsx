import React from 'react'

function NativeEvents() {
  return (
    <div>
      <input onClick={(e)=>console.log(e.nativeEvent)}/>Native Events
      <button onClick={(e)=>console.log(e)}>Synthetic Events</button>
    </div>
  )
}

export default NativeEvents
