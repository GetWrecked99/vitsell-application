import { categoriesDataType } from '../../utils/types/data-types/data.utils'

import fashionImage from '../../../assets/images/landing/categories/category-1.png'
import mobileImage from '../../../assets/images/landing/categories/category-2.png'
import digitalImage from '../../../assets/images/landing/categories/category-3.png'
import stationeryImage from '../../../assets/images/landing/categories/category-4.png'
import industrialImage from '../../../assets/images/landing/categories/category-5.png'
import marketImage from '../../../assets/images/landing/categories/category-6.png'
import toyImage from '../../../assets/images/landing/categories/category-7.png'
import beautyImage from '../../../assets/images/landing/categories/category-8.png'
import homeImage from '../../../assets/images/landing/categories/category-9.png'

const categoryData: categoriesDataType[] = [
  { id: 1, title: 'مد و پوشاک', image: fashionImage },
  { id: 2, title: 'موبایل', image: mobileImage },
  { id: 3, title: 'کالای دیجیتال', image: digitalImage },
  { id: 4, title: 'لوازم تحریر', image: stationeryImage },
  { id: 5, title: 'تجهیزات صنعتی', image: industrialImage },
  { id: 6, title: 'سوپر مارکت', image: marketImage },
  { id: 7, title: 'اسباب بازی', image: toyImage },
  { id: 8, title: 'زیبایی و سلامت', image: beautyImage },
  { id: 9, title: 'خانه و آشپزخانه', image: homeImage },
]

const getAllCategories = (): categoriesDataType[] => {
  return categoryData
}

export { getAllCategories }
