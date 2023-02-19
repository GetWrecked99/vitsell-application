import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { MainLayout } from '../../components/Layouts/MainLayout/MainLayout'
import { LandingWrapper } from '../../screens/Landing/LandingWrapper'

const UnAuthenticatedApp: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<LandingWrapper />} />
      </Route>
    </Routes>
  )
}

export { UnAuthenticatedApp }
