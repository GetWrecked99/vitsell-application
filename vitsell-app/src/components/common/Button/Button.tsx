import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Button: FC<Props> = ({ children, className }): JSX.Element => {
  return (
    <button
      className={
        'font-bold text-white text-base rounded-full py-3 px-5 ' + (className ? className : '')
      }
    >
      {children}
    </button>
  )
}

export { Button }
