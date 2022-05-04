import Image from 'next/image'
import { ReactComponent as NumberQuestion } from '~/assets/icons/home/user/question.svg'
import { ReactComponent as NumberAnswer } from '~/assets/icons/home/user/answer.svg'
const Info = ({ className = 'bg-light', ...props }) => {
  return (
    <div className={`user-info px-4 pb-3 shadow rounded-2 ${className}`}>
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
export default Info