import { FC } from 'react'

import { Badge } from '../../../common/Badge/Badge'
import { CustomImage } from '../../../common/CustomImage/CustomImage'

import { toPersianNumber } from '../../../../core/utils/convert-numbers/to-persian-number.utils'
import { productsDataType } from '../../../../core/utils/types/data-types/data.utils'

interface Props {
  data: productsDataType
}

const AsideCard: FC<Props> = ({ data }): JSX.Element => {
  return (
    <div dir='rtl' className='flex flex-col items-center p-4'>
      <figure className='xl:w-[204px] xl:h-[204px] xl:mb-6'>
        <CustomImage src={data.image} className='w-full h-full' />
      </figure>
      <div className='flex w-full justify-start mb-8'>
        <span className='font-black lg:text-sm xl:text-base text-[#282828]'>{data.title}</span>
      </div>
      <div className='flex w-full justify-end items-center mb-[1px]'>
        <span className='font-black lg:text-base xl:text-lg text-[#333333]'>
          {toPersianNumber(data.price)}
        </span>
        <span className='mr-2 text-xs text-[#4F4F4F]'>تومان</span>
      </div>
      <div className='flex w-full h-[31pxs] items-center justify-between'>
        <Badge>۳۴٪</Badge>
        <span className='text-sm text-[#BDBDBD] line-through'>{toPersianNumber(data.price)}</span>
      </div>
    </div>
  )
}

export { AsideCard }
