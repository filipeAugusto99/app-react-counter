import React, { useState, useEffect } from 'react'

import Header from './Header'
import Loading from './Loading'

const Users = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setIsLoading(true)

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Header title='Usuários' />
      <Loading visible={isLoading} />

      {
        users.map(user => {
          return (
            <div style={{margin: '10px'}}>
              <b>Nome:</b> {user.name} <br />
              <b>Email:</b> {user.email} <br />
              <b>Phone:</b> {user.phone} <br />
              <b>id:</b> {user.id} <br />
            </div>
          )
        })
      }
    </>
  )
}

export default Users