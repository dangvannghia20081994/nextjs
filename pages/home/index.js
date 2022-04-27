import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import { StoreProvider } from 'context/store'
import { getData } from 'utils/request'
import { Select } from '~/components/extra'
import styles from './Home.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { ReactComponent as AddQuestion } from '~/assets/icons/home/question/add.svg'

const Question = () => {
  const [selected, setSelected] = useState(null)
  const list = Array(5).fill(0).map((it, ind) => ({ label: 'label ' + ind, id: ind }))
  const handerSelect = useCallback((it) => {
    setSelected(it.id)
  }, [])
  return (
    <div className='bg-white py-4'>
      <div className='container'>
        <div className={`${styles.title} text-center text-uppercase fw-bold position-relative`}>Hỏi bài</div>
        <div className={`${styles.form} pt-4`}>
          <div className="row">
            <div className="col-lg-7 d-none d-lg-block">
              <Select id="custom-select-class" list={list} placeholder="Chọn lớp" handerSelect={handerSelect} selected={selected} className="me-1"/>
              <Select id="custom-select-subject" list={list} placeholder="Chọn môn" handerSelect={handerSelect} selected={selected} />
              <Select id="custom-select-status" list={list} placeholder="Trạng thái câu hỏi" handerSelect={handerSelect} selected={selected} className="float-end"/>
            </div>
            <div className='col-lg-5'>
              <button className="btn-add-question d-flex align-items-center">
                <AddQuestion className="me-2" />Đặt câu hỏi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = ({ datas }) => {
  const meta = {
    title: 'Trang chủ',
    description: 'Trang chủ'
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
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