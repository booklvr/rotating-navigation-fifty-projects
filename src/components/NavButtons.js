import React from 'react'

const NavButtons = ({ showNav, setShowNav }) => {
  const showNavHandler = () => {
    setShowNav(!showNav)
  }

  return (
    <div className='circle-container'>
      <div className='circle'>
        <button id='close' onClick={showNavHandler}>
          <i className='fas fa-times'></i>
        </button>
        <button id='open' onClick={showNavHandler}>
          <i className='fas fa-bars'></i>
        </button>
      </div>
    </div>
  )
}

export default NavButtons
