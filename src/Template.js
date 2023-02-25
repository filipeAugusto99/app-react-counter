import React from 'react'

import Header from './Header'
import Loading from './Loading'

const Template = ({ children, title }) => {
  return (
    <>
      <Header title={title}/>
      {children}
    </>
  )
}

export default Template