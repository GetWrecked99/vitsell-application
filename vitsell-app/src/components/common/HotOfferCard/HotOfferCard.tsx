import { FC } from 'react'

import { CustomImage } from '../CustomImage/CustomImage'
import { Badge } from '../Badge/Badge'

import { toPersianNumber } from '../../../core/utils/convert-numbers/to-persian-number.utils'
import { productsDataType } from '../../../core/utils/types/data-types/data.utils'

import hotBadge from '../../../assets/images/icons/hot-badge.svg'

interface Props {
  data: productsDataType
}

const HotOfferCard: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className='relative flex items-center p-3 rounded-3xl bg-[#F7F7F7]'>
      <figure className='w-[88px] h-[88px]'>
        <CustomImage src={data.image} className='w-full h-full' />
      </figure>
      <div className='flex flex-col flex-grow'>
        <span className='font-bold text-sm mb-1 text-[#333333]'>{data.title}</span>
        <div className='flex w-full justify-end items-center mb-1'>
          <span className='font-black lg:text-base xl:text-lg text-[#333333]'>
            {toPersianNumber(data.price)}
          </span>
          <span className='mr-2 text-xs text-[#4F4F4F]'>تومان</span>
        </div>
        <div className='flex w-full items-center justify-between'>
          <Badge>۳۴٪</Badge>
          <span className='text-sm text-[#BDBDBD] line-through'>{toPersianNumber(data.price)}</span>
        </div>
      </div>
      <CustomImage src={hotBadge} className='absolute top-0 left-4' />
    </div>
  )
}

export { HotOfferCard }
