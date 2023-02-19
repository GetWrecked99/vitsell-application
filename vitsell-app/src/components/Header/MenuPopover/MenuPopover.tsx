import { FC } from 'react'
import { Popover } from '@headlessui/react'

import { MegaMenu } from '../MegaMenu/MegaMenu'
import { CustomImage } from '../../common/CustomImage/CustomImage'

import categoryIcon from '../../../assets/images/header/category.svg'

const MenuPopover: FC = (): JSX.Element => {
  return (
    <Popover className='relative flex items-center'>
      <Popover.Button className={'outline-none'}>
        <span className='flex items-center text-sm text-[#4F4F4F] xl:mx-2 2xl:mx-4'>
          <CustomImage src={categoryIcon} />
          <span className='mr-2'>دسته بندی ها</span>
        </span>
      </Popover.Button>
      <Popover.Panel className='absolute z-50 top-12 right-0 '>
        <MegaMenu />
      </Popover.Panel>
    </Popover>
  )
}

export { MenuPopover }
