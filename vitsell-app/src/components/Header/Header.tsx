import { FC, Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import { CustomImage } from '../common/CustomImage/CustomImage'
import { Button } from '../common/Button/Button'
import { Search } from '../common/Search/Search'
import { IconWrapper } from '../common/IconWrapper/IconWrapper'
import { MenuPopover } from './MenuPopover/MenuPopover'

import headerLogo from '../../assets/images/header/header-logo.svg'
import fireIcon from '../../assets/images/header/hot-offer.svg'
import ticketIcon from '../../assets/images/header/ticket-discount.svg'
import cartIcon from '../../assets/images/header/cart.svg'
import loginIcon from '../../assets/images/icons/login.svg'

const Header: FC = (): JSX.Element => {
  const navigation = [
    { name: 'پرفروش ترین ها', to: '', icon: fireIcon },
    { name: 'تخفیف دار ها', to: '', icon: ticketIcon },
  ]
  return (
    <header className='mt-3 lg:mt-4 xl:mt-6 2xl:mt-8 lg:py-5 lg:px-6 lg:rounded-full lg:shadow-md'>
      <Popover>
        <div className=' mx-auto max-w-full'>
          <div className='flex lg:hidden items-center mb-3'>
            <CustomImage src={headerLogo} />
            <h2 className='font-black mr-4 text-base text-[#C2123C]'>ویتسل</h2>
          </div>
          <nav className='relative flex items-center justify-between' aria-label='Global'>
            <div className='flex items-center'>
              <div className='hidden lg:flex items-center justify-center'>
                <CustomImage src={headerLogo} />
              </div>
              <div className='hidden xl:flex'>
                <MenuPopover />
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className='flex items-center text-sm text-[#4F4F4F] xl:mx-2 2xl:mx-4'
                  >
                    <i className='text-blue-700'>
                      <CustomImage src={item.icon} />
                    </i>
                    <span className='mr-2'>{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className='flex items-center xl:hidden lg:mr-4'>
                <Popover.Button className='rounded text-gray-500 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset'>
                  <span className='sr-only'>Open main menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='sm:flex sm:items-center sm:justify-end'>
              <div className='flex items-center'>
                <div className='w-[213px] xl:w-[190px] 2xl:w-[254px] '>
                  <Search />
                </div>
                <div className='mx-3 cursor-pointer'>
                  <IconWrapper
                    icon={cartIcon}
                    className='!w-12 !h-12 bg-transparent lg:bg-[#F7F7F7]'
                  />
                </div>
                <div className='block lg:hidden cursor-pointer'>
                  <IconWrapper
                    icon={loginIcon}
                    className='!w-12 !h-12 bg-transparent lg:bg-[#F7F7F7]'
                  />
                </div>
                <Button className='hidden lg:block text-sm font-normal bg-gradient-to-l from-[#CE273B] to-[#F23B51] hover:bg-gradient-to-r !py-3.5'>
                  ورود / ثبت نام
                </Button>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute min-w-[480px] shadow-2xl z-10 top-0 inset-x-0 transition transform origin-top-right xl:hidden'
          >
            <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
              <div className='px-5 pt-4 flex items-center justify-between'>
                <div className='flex items-center'>
                  <CustomImage src={headerLogo} />
                  <h2 className='font-black mr-4 text-base text-[#C2123C]'>ویتسل</h2>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-theme-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3'>
                <Link
                  to=''
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                >
                  دسته بندی ها
                </Link>
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                to='/accounts/login'
                className='block w-full px-5 py-3 text-center font-bold text-white text-sm bg-gradient-to-l from-[#CE273B] to-[#F23B51] hover:bg-gradient-to-r'
              >
                ورود
              </Link>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export { Header }
