import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import RankItemTop from './Top'
import RankItem from './Item'
import moment from 'moment'
import { getData } from '~/utils/request'
const RankInfo = ({ className = 'bg-light', ...props }) => {
  const user = useSelector(state => state.user.user)
  const [type, setType] = useState("RANK_IN_DAY");
  const [list, setList] = useState([])
  const [top, setTop] = useState(null)
  const [state, setState] = useState(() => {
    const RANK_IN_MONTH = moment().subtract(1, "months").format("MM/YYYY");
    const RANK_IN_WEEK = moment().subtract(1, "weeks").format("YYYYW");
    const RANK_IN_DAY = moment().subtract(1, "days").format("L");
    const RANK_IN_MONTH_VIEW = `tháng ${moment().subtract(1, "months").format("MM")} năm ${moment().subtract(1, "months").format("YYYY")}`;
    const RANK_IN_WEEK_VIEW = `tuần ${moment().subtract(1, "weeks").format("W")} năm ${moment().subtract(1, "weeks").format("YYYY")}`;
    const RANK_IN_DAY_VIEW = `ngày ${moment().subtract(1, "days").format("L")}`;
    return {
      RANK_IN_MONTH,
      RANK_IN_WEEK,
      RANK_IN_DAY,
      RANK_IN_MONTH_VIEW,
      RANK_IN_WEEK_VIEW,
      RANK_IN_DAY_VIEW,
    };
  })
  const loadData = async () => {
    const query = {
      pointType: "DEFAULT",
      rankType: type,
      limit: 5
    };
    const { data } = await getData("score/rank", query);
    if (user) {
      setList(data.slice(1));
    } else {
      setList(data);
    }
  }
  const loadTop = async () => {
    const query = {
      pointType: "DEFAULT",
      rankType: type,
      limit: 1,
      date: state[type],
    };
    const { data } = await getData("score/rank", query);
    if (data.length > 1) {
      setTop(data[1])
    } else {
      setTop(data[0]);
    }
  }
  useEffect(() => {
    loadData();
    loadTop();
  }, [user,type]);
  
  return (
    <div className={`rank-info px-4 pb-3 shadow rounded-2 ${className}`}>
      <div className="h2 fw-bold py-4 mb-0">Bảng xếp hạng</div>
      <div className="rank-tab d-flex justify-content-between mx-3 border-bottom">
        <span
          className={`pointer pb-1 ${
            type === "RANK_IN_DAY"
              ? "text-primary fw-bold border-bottom border-2 border-primary"
              : ""
          }`}
          onClick={() => setType("RANK_IN_DAY")}>
          Top ngày
        </span>
        <span
          className={`pointer pb-1 ${
            type === "RANK_IN_WEEK"
              ? "text-primary fw-bold border-bottom border-2 border-primary"
              : ""
          }`}
          onClick={() => setType("RANK_IN_WEEK")}>
          Top tuần
        </span>
        <span
          className={`pointer pb-1 ${
            type === "RANK_IN_MONTH"
              ? "text-primary fw-bold border-bottom border-2 border-primary"
              : ""
          }`}
          onClick={() => setType("RANK_IN_MONTH")}>
          Top tháng
        </span>
      </div>
      <div className="list-rank">
        {top && <RankItemTop item={top} title={state[type+'_VIEW']} />}
        {list.map((item, ind) => (
          <RankItem key={ind} ind={ind} item={item} />
        ))}
      </div>
      <style jsx>{`
        .rank-info {
          min-height: 500px;
        }
      `}</style>
    </div>
  );
}
export default RankInfo