import { FC } from 'react'

import { CustomImage } from '../../../common/CustomImage/CustomImage'

import { toPersianNumber } from '../../../../core/utils/convert-numbers/to-persian-number.utils'

import hotBadge from '../../../../assets/images/icons/hot-badge.svg'
import productImage from '../../../../assets/images/landing/hot-offers/product-1.png'

const HotOfferStaticCard: FC = (): JSX.Element => {
  return (
    <div className='relative flex flex-col rounded-3xl items-center p-4 bg-[#F7F7F7]'>
      <figure className='xl:w-[153px] xl:h-[153px] 2xl:w-[204px] 2xl:h-[204px] lg:mb-4 xl:mb-6'>
        <CustomImage src={productImage} className='w-full h-full' />
      </figure>
      <div className='flex w-full justify-start xl:mb-[30px] 2xl:mb-10'>
        <span className='font-black xl:text-sm 2xl:text-base text-[#282828]'>
          همزن برقی Sanford
        </span>
      </div>
      <div className='flex w-full justify-end items-center lg:mb-3 xl:mb-4'>
        <span className='font-black lg:text-base xl:text-lg text-[#333333]'>
          {toPersianNumber(4343000)}
        </span>
        <span className='mr-2 text-xs text-[#4F4F4F]'>تومان</span>
      </div>
      <figure className='absolute top-0 left-6 cursor-pointer'>
        <CustomImage src={hotBadge} />
      </figure>
    </div>
  )
}

export { HotOfferStaticCard }
