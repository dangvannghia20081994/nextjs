import { NextSeo } from "next-seo";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StoreProvider } from "~/context/store";
import { getData } from "~/utils/request";
import { Select } from "components/extra";

//style
import styles from "./Home.module.scss";

//icon
import { ReactComponent as AddQuestion } from "~/assets/icons/home/question/add.svg";

//component
import QuestionItem from "components/question/Home";
import RankInfo from "components/rank";
import UserInfo from "components/user/Info";

//Function component
const Question = () => {
  const user = useSelector((state) => state.user.user);
  const [selected, setSelected] = useState({
    class: null,
    subject: null,
    status: null,
  });
  const [height, setHeight] = useState(700);
  const list = Array(5)
    .fill(0)
    .map((it, ind) => ({ label: "label " + ind, id: ind }));

  const listStatus = [
    { id: "", label: "Tất cả" },
    { id: 1, label: "Đã trả lời" },
    {
      label: "Chưa trả lời",
      group: true,
      sub: [
        { id: 2, label: "Mới nhất" },
        { id: 3, label: "Cũ nhất" },
      ],
    },
    { id: 4, label: "Hỏi lần đầu" },
  ];

  const handerSelectStatus = (it) => {
    setSelected((prev) => ({ ...prev, status: it.id }));
  };
  const handerSelectClass = (it) => {
    setSelected((prev) => ({ ...prev, class: it.id }));
  };
  const handerSelectSubject = (it) => {
    setSelected((prev) => ({ ...prev, subject: it.id }));
  };
  useEffect(() => {
    const blockInfo = document.querySelector("#home-list-info");
    setTimeout(() => {
      if (window.innerWidth > 576) {
        setHeight(blockInfo.clientHeight);
      }
    }, 500);
  }, []);

  return (
    <div className="bg-light py-4">
      <div className="container">
        <div
          className={`${styles.title} text-center text-uppercase fw-bold position-relative`}>
          Hỏi bài
        </div>
        <div className={`mt-4 bg-white py-4 px-3 shadow rounded-2`}>
          <div className="row gy-4">
            <div className="col-lg-7 d-none d-lg-block">
              <Select
                id="custom-select-class"
                list={list}
                toggle="bg-light fw-bold rounded-4"
                placeholder="Chọn lớp"
                handerSelect={handerSelectClass}
                selected={selected.class}
                className={`select-home me-2`}
              />
              <Select
                id="custom-select-subject"
                list={list}
                toggle="bg-light fw-bold rounded-4"
                placeholder="Chọn môn"
                handerSelect={handerSelectSubject}
                selected={selected.subject}
                className={`select-home`}
              />
              <Select
                id="custom-select-status"
                list={listStatus}
                toggle="bg-light fw-bold rounded-4"
                placeholder="Trạng thái câu hỏi"
                handerSelect={handerSelectStatus}
                selected={selected.status}
                className={`select-home float-end`}
              />
            </div>
            <div className="col-lg-5">
              <button
                className={`add-question rounded-4 d-flex align-items-center bg-gradient py-2 px-4 text-white fw-bold`}>
                <AddQuestion className="me-2" /> Đặt câu hỏi
              </button>
            </div>
            <div className="col-lg-7">
              <div
                className={`border shadow rounded-2 scrollbar`}
                id="home-list-question"
                style={{ height }}>
                {Array(5)
                  .fill(1)
                  .map((it, ind) => (
                    <QuestionItem key={ind} />
                  ))}
                <div className="text-center text-primary fw-bold py-2 mb-0 pointer h3">
                  Xem thêm &gt; &gt;
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={``} id="home-list-info">
                {user && (
                  <UserInfo className="mb-4" />
                )}
                <RankInfo className="bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .select-home .dropdown-toggle {
            border-radius: 34.5px;
            background-color: var(--bs-light);
          }
          .add-question {
            --bs-gradient: linear-gradient(90deg, #ff0800 0%, #ff5c00 100%);
          }
        `}
      </style>
    </div>
  );
};

const Home = ({ datas }) => {
  const meta = {
    title: "Trang chủ",
    description: "Trang chủ",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <StoreProvider>
      <NextSeo {...meta} />
      <Slider {...settings}>
        <Image
          src="https://static.colearn.vn:8413/v1.0/upload/config/image/04042022/banner-web-compressed-akEaSE.jpg"
          width={1920}
          height={630}
          alt="Banner"
          priority
        />
      </Slider>
      <Question />
    </StoreProvider>
  );
};

export async function getServerSideProps(ctx) {
  const { data: datas } = await getData(`category/subject`);
  return {
    props: {
      datas,
    },
  };
}
export default Home;
