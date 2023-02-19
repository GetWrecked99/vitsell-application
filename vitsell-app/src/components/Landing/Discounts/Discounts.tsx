import { FC } from 'react'

import { SectionContainer } from '../../common/SectionContainer/SectionContainer'
import { HeadingSection } from '../../common/HeadingSection/HeadingSection'
import { DiscountSlider } from './DiscountSlider/DiscountSlider'

import { productsDataType } from '../../../core/utils/types/data-types/data.utils'

import ticketIcon from '../../../assets/images/icons/ticket-discount.svg'

interface Props {
  data: productsDataType[]
}

const Discounts: FC<Props> = ({ data }): JSX.Element => {
  return (
    <SectionContainer className='flex flex-col'>
      <HeadingSection icon={ticketIcon} hasLink={true}>
        تخفیف های ویتسل
      </HeadingSection>
      <div className='w-full'>
        <DiscountSlider data={data} />
      </div>
    </SectionContainer>
  )
}

export { Discounts }
