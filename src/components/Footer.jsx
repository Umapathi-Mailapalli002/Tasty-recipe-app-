import React from 'react'

function Footer({className}) {
  return (
    <div>
      <footer className={className}>
        <div className='w-full flex justify-center items-center p-4'>
          <a href="https://github.com/Umapathi-Mailapalli002">
          © Visit my &nbsp;GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
