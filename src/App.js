//importando bibliotecas
import React, { useState } from 'react'

//importando os componentes
import Template from './Template'
import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component: Users,
  }
}

function App() {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  } 

  const Page = pages[page].component

  return (
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
      { Page && <Page />}
    </Template>
  )
}

export default App;
