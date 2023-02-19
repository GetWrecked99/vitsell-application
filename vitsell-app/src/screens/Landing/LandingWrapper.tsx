import { FC, useState, useEffect } from 'react'

import { getAllCategories } from '../../core/data/categories/categories.data'

import { getAllProducts } from '../../core/data/products/products.data'
import { categoriesDataType, productsDataType } from '../../core/utils/types/data-types/data.utils'
import { LandingScreen } from './LandingScreen'

const LandingWrapper: FC = () => {
  const [products, setProducts] = useState<productsDataType[]>([])
  const [categories, setCategories] = useState<categoriesDataType[]>([])

  useEffect(() => {
    const allProducts = getAllProducts()
    const allCategories = getAllCategories()
    setProducts(allProducts)
    setCategories(allCategories)
  }, [])

  return <LandingScreen productsData={products} categoriesData={categories} />
}

export { LandingWrapper }
