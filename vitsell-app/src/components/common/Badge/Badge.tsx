import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Badge: FC<Props> = ({ children }): JSX.Element => {
  return (
    <span className='font-bold text-white text-sm rounded-full py-1 px-3 bg-gradient-to-l from-[#CE273B] to-[#F23B51]'>
      {children}
    </span>
  )
}

export { Badge }
