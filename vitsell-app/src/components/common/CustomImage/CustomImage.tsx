import { FC } from 'react'

interface Props {
  src: string
  className?: string
  onClick?: () => void
}

const CustomImage: FC<Props> = ({ src, className, onClick }): JSX.Element => {
  return <img src={src} alt='' className={className} onClick={onClick} />
}

export { CustomImage }
