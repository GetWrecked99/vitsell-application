import { FC } from 'react'

import { SectionContainer } from '../../common/SectionContainer/SectionContainer'
import { HeadingSection } from '../../common/HeadingSection/HeadingSection'
import { BestSellingSlider } from './‌BestSellingSlider/BestSellingSlider'

import { productsDataType } from '../../../core/utils/types/data-types/data.utils'

import starIcon from '../../../assets/images/icons/magic-star.svg'

interface Props {
  data: productsDataType[]
}

const BestSellings: FC<Props> = ({ data }): JSX.Element => {
  return (
    <SectionContainer className='flex flex-col'>
      <HeadingSection icon={starIcon} hasLink={true} src=''>
        پرفروش ترین محصولات
      </HeadingSection>
      <div className='w-full'>
        <BestSellingSlider data={data} />
      </div>
    </SectionContainer>
  )
}

export { BestSellings }
