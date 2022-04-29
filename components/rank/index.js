import RankItemTop from './Top'
import RankItem from './Item'
const RankInfo = ({ className = '', ...props }) => {
  return (
    <div className={`rank-info bg-light px-4 pb-3 shadow rounded-2 ${className}`}>
      <div className='h2 fw-bold py-4 mb-0'>Bảng xếp hạng</div>
      <div className='rank-tab d-flex justify-content-between mx-3 border-bottom'>
        <span className='pointer pb-1 text-primary fw-bold border-bottom border-2 border-primary'>Top ngày</span>
        <span className='pointer pb-1'>Top ngày</span>
        <span className='pointer pb-1'>Top ngày</span>
      </div>
      <div className='list-rank'>
        <RankItemTop />
        {Array(5).fill(0).map((it, ind) => (
          <RankItem key={ind} ind={ind} />
        ))}
      </div>
      <style jsx>{`
      `}</style>
    </div>
  )
}
export default RankInfo