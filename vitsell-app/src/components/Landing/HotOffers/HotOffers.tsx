import { FC } from 'react'
import { useMediaQuery } from 'react-responsive'

import { HeadingSection } from '../../common/HeadingSection/HeadingSection'
import { HotOfferStaticCard } from './HotOfferStaticCard/HotOfferStaticCard'
import { SectionContainer } from '../../common/SectionContainer/SectionContainer'
import { HotOfferCard } from '../../common/HotOfferCard/HotOfferCard'

import { productsDataType } from '../../../core/utils/types/data-types/data.utils'

import fireIcon from '../../../assets/images/icons/hot-offer.svg'

interface Props {
  data: productsDataType[]
}

const HotOffers: FC<Props> = ({ data }): JSX.Element => {
  const isXLarge = useMediaQuery({ minWidth: 1042 })
  const isMedium = useMediaQuery({ minWidth: 767, maxWidth: 1038 })
  const isLowest = useMediaQuery({ maxWidth: 765 })

  const renderOptionalData = () => {
    let formattedData: productsDataType | productsDataType[] = []
    if (isLowest) {
      formattedData = data[0]
      return (
        <div className='col-span-1 md:col-span-2'>
          <HotOfferCard data={formattedData} />
        </div>
      )
    } else if (isMedium) {
      formattedData = data.slice(-4)
      return formattedData.map((item, index) => (
        <div key={index}>
          <HotOfferCard data={item} />
        </div>
      ))
    } else if (isXLarge) {
      formattedData = data.slice(-9)
      return formattedData.map((item, index) => (
        <div key={index}>
          <HotOfferCard data={item} />
        </div>
      ))
    } else {
      return null
    }
  }

  return (
    <SectionContainer className='flex flex-col'>
      <HeadingSection icon={fireIcon} hasLink={true} src=''>
        پیشنهادات شگفت انگیز
      </HeadingSection>
      <div className='grid grid-cols-8 2xl:gap-x-4'>
        <div className='hidden 2xl:block 2xl:col-span-2 2xl:pt-2'>
          <HotOfferStaticCard />
        </div>
        <div className='col-span-8 2xl:col-span-6 grid grid-cols-1 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4'>
          {renderOptionalData()}
        </div>
      </div>
    </SectionContainer>
  )
}

export { HotOffers }
