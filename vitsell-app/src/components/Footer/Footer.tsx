import { FC } from 'react'
import { Link } from 'react-router-dom'

import { CustomImage } from '../common/CustomImage/CustomImage'
import { IconWrapper } from '../common/IconWrapper/IconWrapper'

import logoImage from '../../assets/images/footer/logo.svg'
import locationIcon from '../../assets/images/icons/location.svg'
import phoneIcon from '../../assets/images/icons/phone.svg'
import mapIcon from '../../assets/images/icons/map.svg'
import instagramIcon from '../../assets/images/icons/instagram.svg'
import telegramIcon from '../../assets/images/icons/telegram.svg'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import auth1Image from '../../assets/images/footer/auth-1.png'
import auth2Image from '../../assets/images/footer/auth-2.png'
import auth3Image from '../../assets/images/footer/auth-3.png'
import auth4Image from '../../assets/images/footer/auth-4.png'

const Footer: FC = (): JSX.Element => {
  /* Static Contents */
  const aboutVitsell = [
    { text: 'درباره ما', src: '' },
    { text: 'تماس با ما', src: '' },
    { text: 'حریم خصوصی', src: '' },
    { text: 'شرایط بازگشت کالا', src: '' },
  ]

  const vitsellProducts = [
    { text: 'کالای دیجیتال', src: '' },
    { text: 'سوپرمارکت', src: '' },
    { text: 'گوشی موبایل', src: '' },
    { text: 'ابزار الات', src: '' },
    { text: 'لوازم تحریر', src: '' },
  ]

  const contactVitsell = [
    { icon: locationIcon, text: 'ٰvitdell@gmail.com' },
    { icon: phoneIcon, text: '۰۸۴۷۷۴۷۳۲۲' },
    { icon: mapIcon, text: 'ٰخیابان ولی عصرنرسیده به سینما آفریقا' },
  ]

  const socialMedia = [
    { icon: instagramIcon, src: '' },
    { icon: telegramIcon, src: '' },
    { icon: whatsappIcon, src: '' },
  ]

  const renderAboutVitsell = () =>
    aboutVitsell.map((item, index) => (
      <Link key={index} to={item.src} className='text-sm text-[#4F4F4F] mb-3 last:mb-0'>
        {item.text}
      </Link>
    ))

  const renderVitsellProduct = () =>
    vitsellProducts.map((item, index) => (
      <Link key={index} to={item.src} className='text-sm text-[#4F4F4F] mb-3 last:mb-0'>
        {item.text}
      </Link>
    ))

  const renderContactVitsell = () =>
    contactVitsell.map((item, index) => (
      <li key={index} className='flex items-center mb-3 last:mb-0'>
        <i>
          <CustomImage src={item.icon} />
        </i>
        <span className='text-sm text-[#4F4F4F] mr-2'>{item.text}</span>
      </li>
    ))

  const renderSocialMedia = () =>
    socialMedia.map((item, index) => (
      <Link key={index} to={item.src} className='ml-4 last:ml-0'>
        <IconWrapper icon={item.icon} />
      </Link>
    ))

  return (
    <section className='flex flex-col w-full mt-6 md:mt-[45px] lg:mt-[59px] xl:mt-[78px] 2xl:mt-[104px]'>
      <div className='grid grid-cols-8 2xl:grid-cols-9 gap-6 xl:gap-0 pt-12 pb-7'>
        <div className='hidden 2xl:flex 2xl:flex-col 2xl:col-span-2 items-start 2xl:pl-5'>
          <figure className='w-28 h-28'>
            <CustomImage src={logoImage} className='w-full h-full' />
          </figure>
          <h3 className='font-black text-base text-[#292929] mt-1'>ویتسل</h3>
          <p className='text-sm text-justify text-[#474747] mt-1'>
            صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری مطمئن
          </p>
        </div>
        <div className='flex flex-col col-span-4 lg:col-span-2'>
          <h3 className='font-black text-base text-[#292929] mb-4'>با ویتسل</h3>
          <ul className='flex flex-col'>{renderAboutVitsell()}</ul>
        </div>
        <div className='flex flex-col col-span-4 lg:col-span-2'>
          <h3 className='font-black text-base text-[#292929] mb-4'>محصولات ویتسل</h3>
          <ul className='flex flex-col'>{renderVitsellProduct()}</ul>
        </div>
        <div className='flex flex-col col-span-4 lg:col-span-2'>
          <h3 className='font-black text-base text-[#292929] mb-4'>ارتباط با ویتسل</h3>
          <ul className='flex flex-col mb-8'>{renderContactVitsell()}</ul>
          <ul className='flex'>{renderSocialMedia()}</ul>
        </div>
        <div className='flex xl:flex-col xl:items-end justify-between col-span-8 xl:col-span-2 2xl:col-span-1 lg:mt-4 xl:m-0'>
          <Link
            to=''
            className='flex xl:hidden w-[78px] h-[78px] lg:w-[133px] lg:h-[133px] items-center justify-center rounded-2xl py-2 bg-[#EFEFEF]'
          >
            <CustomImage src={auth4Image} className='w-[54px] h-[54px] lg:w-28 lg:h-28' />
          </Link>
          <Link
            to=''
            className='flex xl:hidden w-[78px] h-[78px] lg:w-[133px] lg:h-[133px] items-center justify-center rounded-2xl py-2 bg-[#EFEFEF]'
          >
            <CustomImage src={auth3Image} className='w-[54px] h-[54px] lg:w-28 lg:h-28' />
          </Link>
          <Link
            to=''
            className='flex items-center w-[78px] h-[78px] lg:w-[133px] lg:h-[133px] justify-center rounded-2xl bg-[#EFEFEF] xl:mb-4'
          >
            <CustomImage src={auth1Image} className='w-[54px] h-[54px] lg:w-28 lg:h-28' />
          </Link>
          <Link
            to=''
            className='flex items-center w-[78px] h-[78px] lg:w-[134px] lg:h-[134px] justify-center rounded-2xl bg-[#EFEFEF] xl:mb-4'
          >
            <CustomImage src={auth2Image} className='w-[54px] h-[54px] lg:w-28 lg:h-28' />
          </Link>
        </div>
      </div>
      <div className='flex justify-start items-center border-t-[1px] border-[#AB8BD1] h-14'>
        <p className='text-sm text-[#474747]'>کلیه حقوق متعلق به شرکت ویستا است.</p>
      </div>
    </section>
  )
}

export { Footer }
