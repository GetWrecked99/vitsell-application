import { FC } from 'react'

import { BestSellings } from '../../components/Landing/BestSellings/BestSellings'
import { Categories } from '../../components/Landing/Categories/Categories'
import { Discounts } from '../../components/Landing/Discounts/Discounts'
import { HotOffers } from '../../components/Landing/HotOffers/HotOffers'
import { Introduction } from '../../components/Landing/Introduction/Introduction'
import { LowerAdv } from '../../components/Landing/LowerAdv/LowerAdv'
import { MobileApplication } from '../../components/Landing/MobileApplication/MobileApplication'
import { UpperAdv } from '../../components/Landing/UpperAdv/UpperAdv'

import { categoriesDataType, productsDataType } from '../../core/utils/types/data-types/data.utils'

interface Props {
  productsData: productsDataType[]
  categoriesData: categoriesDataType[]
}

const LandingScreen: FC<Props> = ({ productsData, categoriesData }): JSX.Element => {
  return (
    <>
      <Introduction data={productsData} />
      <Discounts data={productsData} />
      <UpperAdv />
      <Categories data={categoriesData} />
      <HotOffers data={productsData} />
      <BestSellings data={productsData} />
      <LowerAdv />
      <MobileApplication />
    </>
  )
}

export { LandingScreen }
