import { NextSeo } from 'next-seo'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import { StoreProvider } from 'context/store'
import { getData } from 'utils/request'
import { Select } from '~/components/extra'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Question = () => {
  const [selected, setSelected] = useState(null)
  const list = Array(5).fill(0).map((it, ind) => ({ label: 'label ' + ind, id: ind }))
  const handerSelect = useCallback((it) => {
    setSelected(it.id)
  }, [])
  return (
    <div className='container'>
      <Select list={list} handerSelect={handerSelect} selected={selected} />
    </div>
  )
}

const Home = ({ datas }) => {
  const meta = {
    title: 'Trang chủ',
    description: 'Trang chủ'
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <StoreProvider>
      <NextSeo {...meta} />
      <Slider {...settings}>
        <Image src="https://static.colearn.vn:8413/v1.0/upload/config/image/04042022/banner-web-compressed-akEaSE.jpg" width={1920} height={630} alt="Banner" />
      </Slider>
      <Question/>
    </StoreProvider>
  )
}

export async function getServerSideProps(ctx) {
  const { data: datas } = await getData(`category/subject`)
  return {
    props: {
      datas
    }
  }
}
export default Home