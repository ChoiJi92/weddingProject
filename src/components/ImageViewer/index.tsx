import classNames from 'classnames/bind'
import styles from './ImageViewer.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './swiper.css'
import Dimmed from '../shared/Dimmed'
import generateImageUrl from '@/utils/generateImageUrl'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

const cx = classNames.bind(styles)

const ImageViewer = ({
  images,
  open = false,
  selectedIndex,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIndex: number
  onClose: () => void
}) => {
  if (open === false) {
    return null
  }
  return (
    <Dimmed>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIndex}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source
                srcSet={generateImageUrl({
                  filename: src,
                  format: 'webp',
                })}
                type="image/webp"
              />
              <img
                src={generateImageUrl({
                  filename: src,
                  format: 'jpg',
                })}
                alt="이미지 뷰여"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

function CloseButton({
  className,
  onClose,
}: {
  className: string
  onClose: () => void
}) {
  return (
    <svg
      className={className}
      id="Icons"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
    >
      <defs></defs>
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
      <path d="M16.707,7.293a1,1,0,0,0-1.414,0L12,10.586,8.707,7.293A1,1,0,1,0,7.293,8.707L10.586,12,7.293,15.293a1,1,0,1,0,1.414,1.414L12,13.414l3.293,3.293a1,1,0,0,0,1.414-1.414L13.414,12l3.293-3.293A1,1,0,0,0,16.707,7.293Z" />
    </svg>
  )
}

export default ImageViewer
