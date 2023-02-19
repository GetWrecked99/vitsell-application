import { FC } from 'react'

import { CustomImage } from '../../common/CustomImage/CustomImage'
import { Button } from '../../common/Button/Button'
import { SectionContainer } from '../../common/SectionContainer/SectionContainer'

import mobileImage from '../../../assets/images/landing/mobile-application/mobile.svg'
import bazaarIcon from '../../../assets/images/icons/bazaar.svg'
import myKetIcon from '../../../assets/images/icons/my-ket.svg'
import androidIcon from '../../../assets/images/icons/android.svg'

const MobileApplication: FC = (): JSX.Element => {
  return (
    <SectionContainer className='flex xl:h-96 items-end justify-center'>
      <div className='relative w-full xl:w-[888px] p-4 lg:p-8 bg-gradient-to-l from-[#CE273B] to-[#F23B51] hover:bg-gradient-to-r rounded-3xl'>
        <div className='flex flex-col w-full xl:w-[522px]'>
          <h3 className='font-black text-lg text-white mb-4'>ویتسل را همیشه همراه داشته باشید!</h3>
          <div className='w-full grid grid-cols-2 gap-x-3 gap-y-4 lg:gap-x-0 lg:flex lg:justify-between items-center'>
            <Button className='flex justify-center  bg-glassyEffect'>
              <i>
                <CustomImage src={bazaarIcon} />
              </i>
              <span className='mr-1'>دانلود از بازار</span>
            </Button>
            <Button className='flex justify-center bg-glassyEffect'>
              <i>
                <CustomImage src={myKetIcon} />
              </i>
              <span className='mr-1'>دانلود از مایکت</span>
            </Button>
            <Button className='flex justify-center col-span-2 bg-glassyEffect'>
              <i>
                <CustomImage src={androidIcon} />
              </i>
              <span className='mr-1'>دانلود مستقیم</span>
            </Button>
          </div>
        </div>
        <div className='hidden xl:block absolute left-[61px] bottom-0 xl:w-[230px] xl:h-[277px]'>
          <CustomImage src={mobileImage} className='w-full h-full' />
        </div>
      </div>
    </SectionContainer>
  )
}

export { MobileApplication }
