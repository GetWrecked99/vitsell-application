import { FC } from 'react'
import Slider from 'react-slick'

import { AsideCard } from '../AsideCard/AsideCard'
import { productsDataType } from '../../../../core/utils/types/data-types/data.utils'
import { SampleLeftArrow } from '../../../common/SampleArrows/SampleLeftArrow'
import { SampleRightArrow } from '../../../common/SampleArrows/SampleRightArrow'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../../assets/css/slick-configuration/slick-dots.css'

interface Props {
  data: productsDataType[]
}

const IntroAsideSlider: FC<Props> = ({ data }): JSX.Element => {
  const slickConfigs = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    prevArrow: <SampleLeftArrow />,
    nextArrow: <SampleRightArrow />,
    rtl: false,
  }

  const renderProducts = () => {
    return data.map((product, index) => <AsideCard key={index} data={product} />)
  }

  return (
    <Slider className='rounded-[24px] overflow-hidden bg-[#F7F7F7]' {...slickConfigs}>
      {renderProducts()}
    </Slider>
  )
}

export { IntroAsideSlider }
