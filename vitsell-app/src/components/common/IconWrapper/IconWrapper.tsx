import { FC } from 'react'

interface Props {
  icon: string
  className?: string
}

const IconWrapper: FC<Props> = ({ icon, className }): JSX.Element => {
  return (
    <i
      className={
        'flex justify-center items-center w-10 h-10  rounded-full bg-[#F7F7F7] ' +
        (className ? className : '')
      }
    >
      <img src={icon} alt='' />
    </i>
  )
}

export { IconWrapper }
