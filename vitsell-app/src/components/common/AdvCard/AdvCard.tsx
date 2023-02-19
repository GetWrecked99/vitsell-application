import { FC } from 'react'

import { CustomImage } from '../CustomImage/CustomImage'

interface Props {
  img: string
}

const AdvCard: FC<Props> = ({ img }): JSX.Element => {
  return (
    <figure className={'overflow-hidden w-full h-full rounded-3xl '}>
      <CustomImage src={img} className='w-full h-full object-cover object-right' />
    </figure>
  )
}

export { AdvCard }
