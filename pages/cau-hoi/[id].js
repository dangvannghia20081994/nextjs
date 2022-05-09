import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getData } from "~/utils/request";
import UserInfo from "components/user/Info";
import Loging from "components/loging";
import Rank from "components/rank";
import Banner from "components/extra/Banner";
const index = () => {
  const [queryAnswer, setQueryAnswer] = useState({
    class_id: "",
    category_id: ""
  });
  const [queryComment, setQueryComment] = useState({
    class_id: "",
    category_id: "",
  });
  const [suppend, setSuppend] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="py-3 bg-hoi-bai">
        <div className="container">
          <div className="row">
            <div className="col-lg-8"></div>
            <div className="col-lg-4">
              {user && (
                <>
                  <UserInfo className="bg-white" />
                  <Loging className="bg-white mt-3" />
                </>
              )}
              <Rank className="bg-white mt-3" />
              <Banner className="mt-3" type="BANNER_ADVERTISE" />
            </div>
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
    </>
  );
};

export default index;
