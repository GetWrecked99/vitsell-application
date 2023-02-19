import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BsChevronLeft } from 'react-icons/bs'

import { IconWrapper } from '../IconWrapper/IconWrapper'

interface Props {
  children: ReactNode
  icon: string
  hasLink: boolean
  src?: string
}

const HeadingSection: FC<Props> = ({ children, icon, hasLink, src }): JSX.Element => {
  return (
    <div className='flex w-full items-center mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6'>
      <div className='flex justify-start items-center min-w-max'>
        <IconWrapper icon={icon} />
        <h3 className='font-black text-base leading-6 text-[#212121] mr-3'>{children}</h3>
      </div>
      <div className={'flex w-full h-[1px] mr-6 bg-[#FFE9EE]'}></div>
      {hasLink ? (
        <Link to={src ? src : ''} className='hidden md:flex items-center mr-6 min-w-max'>
          <h3 className='font-normal text-base leading-5 text-[#4F4F4F]'>مشاهده همه</h3>
          <i className='text-[#4F4F4F] mr-2 relative bottom-[1px] '>
            <BsChevronLeft size={12} />
          </i>
        </Link>
      ) : null}
    </div>
  )
}

export { HeadingSection }
