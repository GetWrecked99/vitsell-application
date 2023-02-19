import { FC } from 'react'

import { IntroSlider } from './IntroSlider/IntroSlider'
import { AdvCard } from '../../common/AdvCard/AdvCard'
import { IntroAsideSlider } from './IntroAsideSlider/IntroAsideSlider'

import { productsDataType } from '../../../core/utils/types/data-types/data.utils'

import advPurple from '../../../assets/images/landing/products/adv-purple.jpg'
import advYellow from '../../../assets/images/landing/products/adv-yellow.jpg'

interface Props {
  data: productsDataType[]
}

const Introduction: FC<Props> = ({ data }): JSX.Element => {
  return (
    <section className='mt-4'>
      <div className='flex xl:gap-x-3 2xl:gap-x-4'>
        <div className='w-full xl:w-[676px] 2xl:w-[902px] sm:h-[158px] md:h-[212px] lg:h-[280px] xl:h-[373px]'>
          <IntroSlider />
        </div>
        <div className='hidden xl:block xl:w-[212px] 2xl:w-[282px]'>
          <IntroAsideSlider data={data} />
        </div>
      </div>
      <div className='flex mt-2 xl:mt-3 2xl:mt-4 gap-x-2 xl:gap-x-3 2xl:gap-x-4'>
        <div className='w-1/2 h-[106px] lg:h-[210px]'>
          <AdvCard img={advPurple} />
        </div>
        <div className='w-1/2 h-[106px] lg:h-[210px]'>
          <AdvCard img={advYellow} />
        </div>
      </div>
    </section>
  )
}

export { Introduction }
