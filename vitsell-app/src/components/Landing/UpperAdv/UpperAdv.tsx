import { FC } from 'react'

import { SectionContainer } from '../../common/SectionContainer/SectionContainer'
import { AdvCard } from '../../common/AdvCard/AdvCard'

import advPurple from '../../../assets/images/landing/products/adv-purple.jpg'
import advYellow from '../../../assets/images/landing/products/adv-yellow.jpg'

const UpperAdv: FC = (): JSX.Element => {
  return (
    <SectionContainer className='grid grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4 '>
      <div className='col-span-2 md:col-span-1 h-[106px] md:h-[130px] lg:h-[210px]'>
        <AdvCard img={advYellow} />
      </div>
      <div className='col-span-2 md:col-span-1 h-[106px] md:h-[130px] lg:h-[210px]'>
        <AdvCard img={advPurple} />
      </div>
    </SectionContainer>
  )
}

export { UpperAdv }
