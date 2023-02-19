import { FC } from 'react'

import { AdvCard } from '../../common/AdvCard/AdvCard'

import advLargeImage from '../../../assets/images/landing/lower-adv/adv-large.jpg'
import advShoesImage from '../../../assets/images/landing/lower-adv/adv-shoes.jpg'
import advTeethImage from '../../../assets/images/landing/lower-adv/adv-teeth.jpg'
import { SectionContainer } from '../../common/SectionContainer/SectionContainer'

const LowerAdv: FC = (): JSX.Element => {
  return (
    <SectionContainer className='grid grid-cols-2 gap-y-6 lg:gap-y-0 lg:gap-x-4'>
      <div className='col-span-2 lg:col-span-1 h-[254px] xl:h-[295px] 2xl:h-[394px]'>
        <AdvCard img={advLargeImage} />
      </div>
      <div className='col-span-2 lg:col-span-1 grid grid-cols-1 gap-y-4'>
        <div className='h-[106px] lg:h-[119px] xl:h-[142px] 2xl:h-[189px]'>
          <AdvCard img={advShoesImage} />
        </div>
        <div className='h-[106px] lg:h-[119px] xl:h-[142px] 2xl:h-[189px]'>
          <AdvCard img={advTeethImage} />
        </div>
      </div>
    </SectionContainer>
  )
}

export { LowerAdv }
