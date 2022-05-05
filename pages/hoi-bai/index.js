import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getData } from "~/utils/request";
import UserInfo from "components/user/Info";
import { Select, Search } from "components/extra";

import Loging from "components/loging";
import Rank from "components/rank";
import Banner from "components/extra/Banner";
import QuestionItem from "components/question/Item.js";
const Index = () => {
  const [query, setQuery] = useState({
    class_id: "",
    category_id: "",
    question_status: "",
    keyword: "",
    limit: 10,
    offset: 0,
    page: 1,
  });
  const [suppend, setSuppend] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const active = useSelector((state) => state.app.classActive);
  const classes = useSelector((state) => state.app.classes).map((it) => ({
    id: it.id,
    label: it.name,
  }));
  const subjects = useSelector((state) => state.app.subjects).map((it) => ({
    id: it.id,
    label: it.name,
  }));
  const loadData = useCallback(
    async () => {
      if (loading) {
        return;
      }
      setLoading(true);
      const { data } = await getData("qa", query);
      if (query.page === 1) {
        setList(data);
      } else {
        setList((prev) => [...prev, ...data]);
      }
      setQuery((prev) => ({
        ...prev,
        page: prev.page++,
        offset: prev.offset + data.length,
      }));
      setLoading(false);
    }, [],
  )
  useEffect(() => {
    setQuery((prev) => ({
      ...prev,
      category_id: active?.id || "",
      page: 1,
      offset: 0,
    }));
  }, [active]);
  useEffect(() => {
    loadData();
  }, [query.category_id, query.class_id, query.keyword, query.question_status]);
  const listStatus = [
    { id: 0, label: "Tất cả" },
    { id: 1, label: "Đã trả lời" },
    {
      label: "Chưa trả lời",
      group: true,
      sub: [
        { id: "desc", label: "Mới nhất" },
        { id: "asc", label: "Cũ nhất" },
      ],
    },
    { id: 4, label: "Hỏi lần đầu" },
  ];
  const handerSelectStatus = (it) => {
    const question_status = it.id;
    setQuery((prev) => ({ ...prev, page: 1, offset: 0, question_status }));
  };
  const handerSelectClass = (it) => {
    const class_id = it.id;
    setQuery((prev) => ({ ...prev, page: 1, offset: 0, class_id }));
  };
  const handerSelectSubject = (it) => {
    const category_id = it.id;
    setQuery((prev) => ({ ...prev, page: 1, offset: 0, category_id }));
  };
  const handleSearch = (keyword) => {
    setQuery((prev) => ({ ...prev, page: 1, offset: 0, keyword }));
  };
  return (
    <div className="bg-hoi-bai py-3">
      <div className="container">
        <div className="row gy-2">
          <div className="col-lg-8">
            <Image
              src="https://api-dev.colearn.vn:8413/v1.0/upload/config/image/15072021/bbafbca4-fecb-4412-bd5a-6020b5e9fb15.png"
              width={1010}
              height={205}
              alt="banner"
            />
            <div className="filter d-flex align-items-center flex-wrap">
              <Select
                id="custom-select-class"
                list={classes}
                toggle="bg-white fw-normal"
                placeholder="Chọn lớp"
                handerSelect={handerSelectClass}
                selected={query.class_id}
                className={`me-2`}
              />
              <Select
                id="custom-select-subject"
                list={subjects}
                toggle="bg-white fw-normal"
                placeholder="Chọn môn"
                handerSelect={handerSelectSubject}
                selected={query.category_id}
                className={`me-2`}
              />
              <Select
                id="custom-select-status"
                list={listStatus}
                toggle="bg-white fw-normal"
                placeholder="Trạng thái câu hỏi"
                handerSelect={handerSelectStatus}
                selected={query.question_status}
                className={``}
              />
              <Search className="ms-1 ms-lg-auto" handleSearch={handleSearch} />
            </div>
            <div className="text-center text-primary bg-white fw-bold py-2 shadow mt-3 rounded-1">
              <span className="pointer">Có +24 câu hỏi mới</span>
            </div>
            <div className="list-question">
              {list.map((it, ind) => (
                <QuestionItem
                  key={ind}
                  item={it}
                  className="mt-3 question-item bg-white shadow rounded-2 py-3 px-4"
                />
              ))}
            </div>
            <div className="text-center text-primary bg-white fw-bold py-2 shadow mt-3 rounded-1">
              <span className="pointer" onClick={loadData}>
                Xem thêm
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <UserInfo className="bg-white" />
            <Loging className="bg-white mt-3" />
            <Rank className="bg-white mt-3" />
            <Banner className="mt-3" type="BANNER_RIGHT" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .bg-hoi-bai {
            background: #f3f2f2;
          }
        `}
      </style>
    </div>
  );
};
export default Index;
