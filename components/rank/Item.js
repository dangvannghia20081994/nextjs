import Image from 'next/image'
import classNames from 'classnames'
import NoAvatar from "~/assets/icons/no-avatar.svg";
const Item = ({ item, className = '', ind, ...props }) => {
  var numberClass = classNames({
    'flex-shrink-0': true,
    'text-warning': ind === 0,
    'text-danger': ind === 1,
    'text-primary': ind === 2,
    'text-secondary': ind === 3,
  });
  return (
    <div
      className={`d-flex py-2 border-bottom align-items-center rank-item fw-bold ${className}`}>
      <span className={numberClass} style={{ minWidth: 30 }}>
        {ind + 1}
      </span>
      <span className="flex-shrink-0">
        <Image
          src={item.avatar || NoAvatar}
          width={40}
          height={40}
          alt="avatar"
          className="rounded-circle"
          objectFit="cover"
        />
      </span>
      <div className="flex-shrink-1 ms-4 display-html me-2">
        {item.fullName}
      </div>
      <span className="flex-shrink-0 text-warning ms-auto">
        {item.point} điểm
      </span>
    </div>
  );
}
export default Item