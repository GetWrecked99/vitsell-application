import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { AppContainer } from '../../AppContainer/AppContainer'
import { Header } from '../../Header/Header'
import { Footer } from '../../Footer/Footer'

const MainLayout: FC = (): JSX.Element => {
  return (
    <AppContainer>
      <Header />
      <Outlet />
      <Footer />
    </AppContainer>
  )
}

export { MainLayout }
