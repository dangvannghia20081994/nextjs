import { NextSeo } from 'next-seo'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StoreProvider } from 'context/store'
import { getData } from 'utils/request'
import { Select } from '~/components/extra'
import classNames from 'classnames'

//style
import styles from './Home.module.scss'

//icon
import { ReactComponent as AddQuestion } from '~/assets/icons/home/question/add.svg'
import { ReactComponent as NumberQuestion } from '~/assets/icons/home/user/question.svg'
import { ReactComponent as NumberAnswer } from '~/assets/icons/home/user/answer.svg'
import { ReactComponent as RankTop } from '~/assets/icons/home/rank/top.svg'

//component
import QuestionItem from '~/components/question/Home'

// Function component
const UserInfo = ({ className = ''}) => {
  return (
    <div className={`user-info bg-light px-4 pb-3 shadow rounded-2 ${className}`}>
      <div className='h2 fw-bold py-4 mb-0'>Thông tin</div>
      <div className='d-flex'>
        <div className='flex-shrink-0'>
          <span>
            <Image src={'https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg'} width={80} height={80} alt="avatar" className='rounded-circle p-1 border-primary border border-3 border-dashed' objectFit='cover' />
          </span>
        </div>
        <div className='flex-grow-1 ms-4'>
          <div className='fw-bold text-capitalize'>Phạm Đào Trà My</div>
          <div className='pt-1 d-flex'>
            <span style={{ minWidth: 50 }}>Level</span>
            <span className='fw-bold text-end' style={{ minWidth: 50 }}>01</span>
          </div>
          <div className='pt-1 d-flex'>
            <span style={{ minWidth: 50 }}>Điểm</span>
            <span className='fw-bold text-end' style={{ minWidth: 50 }}>100</span>
          </div>
        </div>
      </div>
      <div className='d-flex pt-3 align-items-center'>
        <span className='flex-shrink-0 avatar position-relative bg-warning' style={{ '--size': '24px' }}><NumberQuestion className="position-center" /></span>
        <span className='ms-2' style={{ minWidth: 150 }}>Số câu đã hỏi:</span>
        <span className='text-warning fw-bold h3 mb-0 lh-1 align-self-start'>0</span>
      </div>
      <div className='d-flex pt-3 align-items-center'>
        <span className='flex-shrink-0 avatar position-relative bg-primary' style={{ '--size': '24px' }}><NumberAnswer className="position-center" /></span>
        <span className='ms-2' style={{ minWidth: 150 }}>Số câu đã hỏi:</span>
        <span className='text-primary fw-bold h3 mb-0 lh-1 align-self-start'>120</span>
      </div>
    </div>
  )
}
const RankItemTop = ({ className = '' }) => {
  var numberClass = classNames({
    'flex-shrink-0': true,
  });
  return (
    <div className={`d-flex p-3 mt-3 mb-3 bg-white rounded-2 shadow align-items-center rank-item fw-bold ${className}`}>
      <span className={numberClass} style={{ minWidth: 30 }}>
        <RankTop />
      </span>
      <span className='flex-shrink-0 ms-3'>
        <Image src={'https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg'} width={40} height={40} alt="avatar" className='rounded-circle' objectFit='cover' />
      </span>
      <div className='flex-shrink-1 ms-3 me-2'>
        <div className='display-html'>Đặng Văn Nghĩa</div>
        <div className='small text-secondary fw-normal'>
          (Top 1 ngày 20/05/2020)
        </div>
      </div>
      <span className='flex-shrink-0 text-warning ms-auto'>665 điểm</span>
    </div>
  )
}
const RankItem = ({ className = '', ind }) => {
  var numberClass = classNames({
    'flex-shrink-0': true,
    'text-warning': ind === 0,
    'text-danger': ind === 1,
    'text-primary': ind === 2,
    'text-secondary': ind === 3,
  });
  return (
    <div className={`d-flex py-2 border-bottom align-items-center rank-item fw-bold ${className}`}>
      <span className={numberClass} style={{ minWidth: 30 }}>{ind + 1}</span>
      <span className='flex-shrink-0'>
        <Image src={'https://api-dev.colearn.vn:8413/v1.0/upload/qa/image/05112021/3285eb0c-04b2-4cab-b6a1-ad84d9885ffc.jpg'} width={40} height={40} alt="avatar" className='rounded-circle' objectFit='cover' />
      </span>
      <div className='flex-shrink-1 ms-4 display-html me-2'>Bách Hợp</div>
      <span className='flex-shrink-0 text-warning ms-auto'>665 điểm</span>
    </div>
  )
}
const RankInfo = ({ className = '' }) => {
  return (
    <div className={`rank-info bg-light px-4 pb-3 shadow rounded-2 ${className}`}>
      <div className='h2 fw-bold py-4 mb-0'>Bảng xếp hạng</div>
      <div className='rank-tab d-flex justify-content-between mx-3 border-bottom'>
        <span className='pointer pb-1 text-primary fw-bold border-bottom border-2 border-primary'>Top ngày</span>
        <span className='pointer pb-1'>Top ngày</span>
        <span className='pointer pb-1'>Top ngày</span>
      </div>
      <div className='list-rank'>
        <RankItemTop />
        {Array(5).fill(0).map((it, ind) => (
          <RankItem key={ind} ind={ind}/>
        ))}
      </div>
      <style jsx>{`
      `}</style>
    </div>
  )
}


const Question = () => {
  const [selected, setSelected] = useState(null)
  const [height, setHeight] = useState(700)
  const list = Array(5).fill(0).map((it, ind) => ({ label: 'label ' + ind, id: ind }))
  const handerSelect = useCallback((it) => {
    setSelected(it.id)
  }, [])
  console.log(height)
  useEffect(() => {
    const blockInfo = document.querySelector('#home-list-info');
    if (window.innerWidth > 576) {
      setHeight(blockInfo.clientHeight)
    }
    return () => {
    }
  }, [])
  
  return (
    <div className='bg-light py-4'>
      <div className='container'>
        <div className={`${styles.title} text-center text-uppercase fw-bold position-relative`}>Hỏi bài</div>
        <div className={`${styles.form} mt-4 bg-white py-4 px-3 shadow rounded-2`}>
          <div className="row gy-4">
            <div className="col-lg-7 d-none d-lg-block">
              <Select id="custom-select-class" list={list} placeholder="Chọn lớp" handerSelect={handerSelect} selected={selected} className={`select-home me-2`}/>
              <Select id="custom-select-subject" list={list} placeholder="Chọn môn" handerSelect={handerSelect} selected={selected} className={`select-home`}/>
              <Select id="custom-select-status" list={list} placeholder="Trạng thái câu hỏi" handerSelect={handerSelect} selected={selected} className={`select-home float-end`}/>
            </div>
            <div className='col-lg-5'>
              <button className={`add-question d-flex align-items-center bg-gradient py-2 px-4 text-white fw-bold`}>
                <AddQuestion className="me-2" />Đặt câu hỏi
              </button>
            </div>
            <div className="col-lg-7">
              <div className={`${styles.listQuestion} border shadow rounded-2 scrollbar`} id="home-list-question" style={{ height }}>
                {Array(5).fill(1).map((it, ind) => (
                  <QuestionItem key={ind}/>
                ))}
                <div className='text-center text-primary fw-bold py-2 mb-0 pointer h3'>Xem thêm &gt;&gt;</div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className={`${styles.listInfo}`} id="home-list-info" style={{ height }}>
                <UserInfo className="mb-4" />
                <RankInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .select-home .dropdown-toggle{
          border-radius: 34.5px;
          background-color: var(--bs-light) ;
        }
        .add-question{
          --bs-gradient: linear-gradient(90deg, #FF0800 0%, #FF5C00 100%);
          border-radius: 28px;
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