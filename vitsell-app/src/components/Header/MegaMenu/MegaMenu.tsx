import { FC } from 'react'
import { Tab } from '@headlessui/react'

import { ReactComponent as blouseIcon } from '../../../assets/images/icons/blouse.svg'
import { ReactComponent as shopIcon } from '../../../assets/images/icons/shop.svg'
import { ReactComponent as babyIcon } from '../../../assets/images/icons/baby.svg'
import { ReactComponent as beautyIcon } from '../../../assets/images/icons/beauty.svg'
import { ReactComponent as homeIcon } from '../../../assets/images/icons/home-object.svg'
import { ReactComponent as penIcon } from '../../../assets/images/icons/pen.svg'
import { ReactComponent as sportIcon } from '../../../assets/images/icons/sport.svg'

const MegaMenu: FC = (): JSX.Element => {
  const tabs = [
    { id: 1, title: 'مد و پوشاک', icon: blouseIcon },
    { id: 2, title: 'کالاهای سوپرمارکتی', icon: shopIcon },
    { id: 3, title: 'اسباب بازی و کودک', icon: babyIcon },
    { id: 4, title: 'زیبایی و سلامت', icon: beautyIcon },
    { id: 5, title: 'خانه و آشپزخانه', icon: homeIcon },
    { id: 6, title: 'لوازم تحریر و هنر', icon: penIcon },
    { id: 7, title: 'ورزش و هنر', icon: sportIcon },
  ]

  const renderTabs = () =>
    tabs.map((item, index) => (
      <Tab
        key={index}
        className='flex items-center ui-selected:bg-slate-200 ui-selected:text-[#C2123C] ui-not-selected:bg-white ui-not-selected:text-[#7D7D7D] outline-none p-2 mb-2 last:mb-0 rounded-xl'
      >
        {({ selected }) => (
          <>
            <item.icon fill={selected ? '#C2123C' : '#7D7D7D'} />
            <span className='text-sm mr-[9px]'>{item.title}</span>
          </>
        )}
      </Tab>
    ))

  const renderContents = (id: number) => {
    const filteredList = tabs.filter((item) => item.id !== id)
    let items = []
    for (let i = 0; i < 8; i++) {
      items.push(
        <div key={i} className={'' + (i < 4 ? 'mb-5' : '')}>
          <div className={'flex items-center h-6 mb-4'}>
            <div className='w-1 h-full rounded-full bg-[#C2123C]'></div>
            <h3 className='mr-2 text-[#7D7D7D] text-sm'>{tabs[id - 1].title}</h3>
          </div>
          <ul>
            {filteredList.slice(i < 4 ? -4 : -2).map((item, index) => (
              <li key={index} className={'text-[#7D7D7D] text-sm mb-3 last:mb-0'}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return items
  }

  return (
    <div className='xl:w-[830px] 2xl:w-[1000px] rounded-3xl bg-white p-4'>
      <Tab.Group>
        <div className='flex gap-x-4'>
          <Tab.List className='flex flex-col w-[202px]'>{renderTabs()}</Tab.List>
          <Tab.Panels className={'w-full'}>
            <Tab.Panel className={'grid grid-cols-4 gap-x-4'}>{renderContents(1)}</Tab.Panel>
            <Tab.Panel className={'grid grid-cols-4 gap-x-4'}>{renderContents(2)}</Tab.Panel>
            <Tab.Panel className={'grid grid-cols-4 gap-x-4'}>{renderContents(3)}</Tab.Panel>
            <Tab.Panel className={'grid grid-cols-4 gap-x-4'}>{renderContents(4)}</Tab.Panel>
            <Tab.Panel className={'grid grid-cols-4 gap-x-4'}>{renderContents(5)}</Tab.Panel>
            <Tab.Panel className={'grid grid-cols-4 gap-x-4'}>{renderContents(6)}</Tab.Panel>
            <Tab.Panel className={'grid grid-cols-4 gap-x-4'}>{renderContents(7)}</Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}

export { MegaMenu }
