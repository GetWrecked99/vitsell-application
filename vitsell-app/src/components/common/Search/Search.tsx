import { FC } from 'react'

import { CustomImage } from '../CustomImage/CustomImage'

import searchIcon from '../../../assets/images/header/search.svg'

const Search: FC = (): JSX.Element => {
  return (
    <div className='relative w-full'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer'>
        <CustomImage src={searchIcon} />
      </div>
      <input
        type='text'
        id='simple-search'
        className='bg-[#F7F7F7] text-gray-900 text-sm rounded-full block w-full pl-10 p-2.5 py-3.5 outline-none'
        placeholder='جستجو . . .'
        required
      />
    </div>
  )
}

export { Search }
