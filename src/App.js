import React, { Fragment, useState } from 'react'
import Content from './components/Content'
import NavButtons from './components/NavButtons'
import NavLinks from './components/NavLinks'

const App = () => {

  const [showNav, setShowNav] = useState(false)

  return (
    <Fragment>
      <div className={showNav ? 'container show-nav' : 'container'}>
        <NavButtons showNav={showNav} setShowNav={setShowNav}/>
        <Content />
      </div>
      <NavLinks />
    </Fragment>
  )
}

export default App
