import { FC } from 'react'
import Slider from 'react-slick'

import { SampleLeftArrow } from '../../../common/SampleArrows/SampleLeftArrow'
import { SampleRightArrow } from '../../../common/SampleArrows/SampleRightArrow'
import { CustomImage } from '../../../common/CustomImage/CustomImage'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../../assets/css/slick-configuration/slick-dots.css'
import introSlideImage from '../../../../assets/images/landing/introduction/intro-slide.jpg'

const IntroSlider: FC = (): JSX.Element => {
  const slides = [
    introSlideImage,
    introSlideImage,
    introSlideImage,
    introSlideImage,
    introSlideImage,
    introSlideImage,
  ]

  const slickConfigs = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <SampleLeftArrow />,
    nextArrow: <SampleRightArrow />,
    rtl: true,
    appendDots: (dots: any) => (
      <div style={{ bottom: '0' }}>
        <ul className='m-0 flex flex-row items-center justify-center h-6'>{dots}</ul>
      </div>
    ),
  }

  const renderSlides = () =>
    slides.map((slide, index) => (
      <figure key={index} className='w-full xl:h-[373px] outline-none'>
        <CustomImage src={slide} className='w-full h-full object-cover object-right' />
      </figure>
    ))

  return (
    <Slider
      className='relative rounded-[24px] h-[158px] md:h-[212px] lg:h-[280px] xl:h-[373px] overflow-hidden'
      {...slickConfigs}
    >
      {renderSlides()}
    </Slider>
  )
}

export { IntroSlider }
