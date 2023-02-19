import { FC } from 'react'
import Slider from 'react-slick'

import { SampleLeftArrow } from '../../../common/SampleArrows/SampleLeftArrow'
import { SampleRightArrow } from '../../../common/SampleArrows/SampleRightArrow'
import { ProductCard } from '../../../common/ProductCard/ProductCard'

import { productsDataType } from '../../../../core/utils/types/data-types/data.utils'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../../assets/css/slick-configuration/slick-dots.css'

interface Props {
  data: productsDataType[]
}

const BestSellingSlider: FC<Props> = ({ data }): JSX.Element => {
  const slickConfigs = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <SampleLeftArrow />,
    nextArrow: <SampleRightArrow />,
    rtl: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const renderProducts = () => {
    return data.map((product, index) => <ProductCard key={index} data={product} />)
  }

  return (
    <Slider className='rounded-[24px] overflow-hidden bg-[#F7F7F7]' {...slickConfigs}>
      {renderProducts()}
    </Slider>
  )
}

export { BestSellingSlider }
