import Image from 'next/image'
import classNames from 'classnames'
const Item = ({ className = '', ind, ...props }) => {
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
export default Item