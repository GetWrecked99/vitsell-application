import { FC } from 'react'
import { Link } from 'react-router-dom'

import { SectionContainer } from '../../common/SectionContainer/SectionContainer'
import { HeadingSection } from '../../common/HeadingSection/HeadingSection'
import { CustomImage } from '../../common/CustomImage/CustomImage'

import { categoriesDataType } from '../../../core/utils/types/data-types/data.utils'

import categoryBackground from '../../../assets/images/landing/categories/categories-bg.svg'
import categoryIcon from '../../../assets/images/icons/category.svg'

interface Props {
  data: categoriesDataType[]
}

const Categories: FC<Props> = ({ data }): JSX.Element => {
  const renderCategories = () => {
    return data.map((item) => (
      <Link
        key={item.id}
        to=''
        className='flex flex-col items-center col-span-3 xl:col-span-2 rounded-2xl py-2 md:py-4 bg-[#F2F2F2]'
      >
        <figure className='w-[98px] h-[98px]'>
          <CustomImage src={item.image} className='w-full h-full' />
        </figure>
        <span className='text-[#212121] font-bold text-sm mt-1 '>{item.title}</span>
      </Link>
    ))
  }

  return (
    <SectionContainer className='grid grid-cols-6 2xl:gap-x-4'>
      <div className='flex flex-col col-span-6 2xl:col-span-4'>
        <HeadingSection icon={categoryIcon} hasLink={false}>
          دسته بندی های محبوب
        </HeadingSection>
        <div className='grid grid-cols-9 xl:grid-cols-10 gap-2 lg:gap-6'>{renderCategories()}</div>
      </div>
      <div className='hidden 2xl:col-span-2 2xl:flex 2xl:items-center 2xl:justify-center'>
        <CustomImage src={categoryBackground} className='w-full h-full' />
      </div>
    </SectionContainer>
  )
}

export { Categories }
