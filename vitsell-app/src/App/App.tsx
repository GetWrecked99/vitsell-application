import { FC } from 'react'

import { UnAuthenticatedApp } from './UnAuthenticatedApp/UnAuthenticatedApp'

const App: FC = (): JSX.Element => {
  return (
    <div className='App min-w-[415px]'>
      <UnAuthenticatedApp />
    </div>
  )
}

export { App }
