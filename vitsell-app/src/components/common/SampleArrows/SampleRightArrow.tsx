import { FC } from 'react'

import { CustomImage } from '../CustomImage/CustomImage'

import rightArrow from '../../../assets/images/icons/arrow-right.svg'

interface Props {
  onClick?: () => void
}

const SampleRightArrow: FC<Props> = ({ onClick }): JSX.Element => {
  return (
    <CustomImage
      src={rightArrow}
      className='absolute top-1/2 right-0 -translate-y-1/2 z-[2] cursor-pointer'
      onClick={onClick}
    />
  )
}

export { SampleRightArrow }
