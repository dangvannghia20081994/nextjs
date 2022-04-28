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

import QuestionItem from '~/components/question/Home'
const Question = () => {
  const [selected, setSelected] = useState(null)
  const list = Array(5).fill(0).map((it, ind) => ({ label: 'label ' + ind, id: ind }))
  const handerSelect = useCallback((it) => {
    setSelected(it.id)
  }, [])
  return (
    <div className='bg-light py-4'>
      <div className='container'>
        <div className={`${styles.title} text-center text-uppercase fw-bold position-relative`}>Hỏi bài</div>
        <div className={`${styles.form} mt-4 bg-white py-4 px-3 shadow-sm rounded-3`}>
          <div className="row gy-4">
            <div className="col-lg-7 d-none d-lg-block">
              <Select id="custom-select-class" list={list} placeholder="Chọn lớp" handerSelect={handerSelect} selected={selected} className={`select-home me-2`}/>
              <Select id="custom-select-subject" list={list} placeholder="Chọn môn" handerSelect={handerSelect} selected={selected} className={`select-home`}/>
              <Select id="custom-select-status" list={list} placeholder="Trạng thái câu hỏi" handerSelect={handerSelect} selected={selected} className={`select-home float-end`}/>
            </div>
            <div className='col-lg-5'>
              <button className={`${styles.addQuestion} d-flex align-items-center bg-gradient py-2 px-4 text-white fw-bold`}>
                <AddQuestion className="me-2" />Đặt câu hỏi
              </button>
            </div>
            <div className="col-lg-7">
              <div className={`${styles.listQuestion} border shadow-sm rounded-3`}>
                {Array(5).fill(1).map((it, ind) => (
                  <QuestionItem key={ind}/>
                ))}
              </div>
            </div>
            <div className='col-lg-5'></div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .select-home .dropdown-toggle{
          border-radius: 34.5px;
          background-color: var(--bs-light) ;
        }
      `}</style>
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