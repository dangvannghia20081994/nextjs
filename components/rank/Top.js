import { ReactComponent as RankTop } from '~/assets/icons/home/rank/top.svg'
import Image from 'next/image'
import classNames from 'classnames'
import NoAvatar from "~/assets/icons/no-avatar.svg";
const Top = ({ item, title, className = "", ...props }) => {
  var numberClass = classNames({
    "flex-shrink-0": true,
  });
  return (
    <div
      className={`d-flex p-3 mt-3 mb-3 bg-white rounded-2 shadow align-items-center rank-item fw-bold ${className}`}>
      <span className={numberClass} style={{ minWidth: 30 }}>
        <RankTop />
      </span>
      <span className="flex-shrink-0 ms-3">
        <Image
          src={item.avatar || NoAvatar}
          width={40}
          height={40}
          alt="avatar"
          className="rounded-circle"
          objectFit="cover"
        />
      </span>
      <div className="flex-shrink-1 ms-3 me-2">
        <div className="display-html">{item.fullName}</div>
        <div className="small text-secondary fw-normal">
          (Top 1 {title})
        </div>
      </div>
      <span className="flex-shrink-0 text-warning ms-auto">
        {item.point} điểm
      </span>
    </div>
  );
};
export default Top