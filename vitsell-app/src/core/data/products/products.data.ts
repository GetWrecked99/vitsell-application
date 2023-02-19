import { productsDataType } from '../../utils/types/data-types/data.utils'

import productImage from '../../../assets/images/landing/products/product-shoes.png'

const productsData: productsDataType[] = [
  { id: 1, title: 'همزن برقی Sanford 1', price: 4343001, image: productImage },
  { id: 2, title: 'همزن برقی Sanford 2', price: 4343002, image: productImage },
  { id: 3, title: 'همزن برقی Sanford 3', price: 4343003, image: productImage },
  { id: 4, title: 'همزن برقی Sanford 4', price: 4343004, image: productImage },
  { id: 5, title: 'همزن برقی Sanford 5', price: 4343005, image: productImage },
  { id: 6, title: 'همزن برقی Sanford 6', price: 4343006, image: productImage },
  { id: 7, title: 'همزن برقی Sanford 7', price: 4343007, image: productImage },
  { id: 8, title: 'همزن برقی Sanford 8', price: 4343008, image: productImage },
  { id: 9, title: 'همزن برقی Sanford 9', price: 4343009, image: productImage },
]

const getAllProducts = (): productsDataType[] => {
  return productsData
}

export { getAllProducts }
