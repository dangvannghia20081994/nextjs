import { ReactComponent as RankTop } from '~/assets/icons/home/rank/top.svg'
import Image from 'next/image'
import classNames from 'classnames'
const Top = ({ className = '', ...props }) => {
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
export default Top