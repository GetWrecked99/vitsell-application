import { FC } from 'react'

import { CustomImage } from '../CustomImage/CustomImage'

import leftArrow from '../../../assets/images/icons/arrow-left.svg'

interface Props {
  onClick?: () => void
}

const SampleLeftArrow: FC<Props> = ({ onClick }): JSX.Element => {
  return (
    <CustomImage
      src={leftArrow}
      className='absolute top-1/2 left-0 -translate-y-1/2 z-[2] cursor-pointer'
      onClick={onClick}
    />
  )
}

export { SampleLeftArrow }
