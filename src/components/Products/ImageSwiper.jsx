import React, {useState} from 'react'
import Swiper from "react-id-swiper"
import NoImage from "../../assets/img/src/no_image.png"
import 'swiper/css/swiper.css'

const ImageSwiper = (props) => {
  const [params] = useState({
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  })

  const images = props.images

  return (
    <Swiper {...params}>
      {images.length === 0 ? (
        <div className="p-media__thumb">
          <img src={NoImage} alt="画像なし" />
        </div>
      ) : (
        images.map((image, index) => (
          <div className="p-media__thumb" id={index}>
            <img src={image.path} alt="商品画像" />
          </div>
        ))
      )}
    </Swiper>
  )
}

export default ImageSwiper
