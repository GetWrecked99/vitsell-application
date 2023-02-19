import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AppContainer: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className='max-w-[382px] md:max-w-[512px] lg:max-w-[680px] xl:max-w-[900px] 2xl:max-w-[1200px] mx-auto'>
      {children}
    </div>
  )
}

export { AppContainer }
