import React from 'react'

function Loading({className}) {
  return (
    <div className={className}>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
  )
}

export default Loading
