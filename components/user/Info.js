import { useState, useEffect } from "react";
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { ReactComponent as NumberQuestion } from '~/assets/icons/home/user/question.svg'
import { ReactComponent as NumberAnswer } from '~/assets/icons/home/user/answer.svg'
import NoAvatar from "~/assets/icons/no-avatar.svg";
import { getData } from '~/utils/request';
const Info = ({ className = 'bg-light', ...props }) => {
  const [item, setItem] = useState(null)
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const init = async () => {
      try {
        const { data: qa } = await getData("qa/statistic-by-user", {
          user_id: user.uuid,
        });
        const { data: score } = await getData("score-management/score-info", {
          userId: user.uuid,
          pointTypeCode: "DEFAULT",
        })
        if (score.levelName.slice(0, 5).toLowerCase().includes("level")) {
          score.levelName = 'Level'
        } else if (score.levelName.slice(0, 4).toLowerCase().includes("hạng")) {
          score.levelName = "Hạng";
        }
        setItem({ ...qa, ...score })
      } catch (error) {
        console.error(error);
      }
    }
    init()
  }, [])
  if (!item) return
  return (
    <div className={`user-info px-4 pb-3 shadow rounded-2 ${className}`}>
      <div className="h2 fw-bold py-4 mb-0">Thông tin</div>
      <div className="d-flex">
        <div className="flex-shrink-0">
          <span>
            <Image
              src={user.avatar || NoAvatar}
              width={80}
              height={80}
              alt="avatar"
              className="rounded-circle p-1 border-primary border border-3 border-dashed"
              objectFit="cover"
            />
          </span>
        </div>
        <div className="flex-grow-1 ms-4">
          <div className="fw-bold text-capitalize">{user.fullName}</div>
          <div className="pt-1 d-flex">
            <span style={{ minWidth: 50 }}>Level</span>
            <span className="fw-bold text-end" style={{ minWidth: 50 }}>
              {item.levelName}
            </span>
          </div>
          <div className="pt-1 d-flex">
            <span style={{ minWidth: 50 }}>Điểm</span>
            <span className="fw-bold text-end" style={{ minWidth: 50 }}>
              {item.currentPoint}
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex pt-3 align-items-center">
        <span
          className="flex-shrink-0 avatar position-relative bg-warning"
          style={{ "--size": "24px" }}>
          <NumberQuestion className="position-center" />
        </span>
        <span className="ms-2" style={{ minWidth: 150 }}>
          Số câu đã hỏi:
        </span>
        <span className="text-warning fw-bold h3 mb-0 lh-1 align-self-start">
          {item.total_question}
        </span>
      </div>
      <div className="d-flex pt-3 align-items-center">
        <span
          className="flex-shrink-0 avatar position-relative bg-primary"
          style={{ "--size": "24px" }}>
          <NumberAnswer className="position-center" />
        </span>
        <span className="ms-2" style={{ minWidth: 150 }}>
          Số câu đã trả lời:
        </span>
        <span className="text-primary fw-bold h3 mb-0 lh-1 align-self-start">
          {item.total_answer}
        </span>
      </div>
    </div>
  );
}
export default Info