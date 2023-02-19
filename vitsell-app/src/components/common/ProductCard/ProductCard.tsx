import { FC } from 'react'

import { Badge } from '../Badge/Badge'
import { CustomImage } from '../CustomImage/CustomImage'

import { toPersianNumber } from '../../../core/utils/convert-numbers/to-persian-number.utils'
import { productsDataType } from '../../../core/utils/types/data-types/data.utils'

interface Props {
  data: productsDataType
}

const ProductCard: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div dir='rtl' className='flex flex-col items-center p-4 rounded-3xl'>
      <figure className='w-28 h-28 mb-4'>
        <CustomImage src={data.image} className='w-full h-full' />
      </figure>
      <div className='relative flex w-full right-4 justify-center items-center mb-4'>
        <span className='font-black text-lg text-[#333333]'>{toPersianNumber(data.price)}</span>
        <span className='mr-2 text-xs text-[#4F4F4F]'>تومان</span>
      </div>
      <div className='flex items-center justify-evenly w-full h-8'>
        <Badge>۳۴٪</Badge>
        <span className='text-sm text-[#BDBDBD] line-through'>{toPersianNumber(data.price)}</span>
      </div>
    </div>
  )
}

export { ProductCard }
