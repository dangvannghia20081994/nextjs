import React, { useState } from 'react'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroller'
import { ReactComponent as Notification } from 'assets/icons/header/notify/notify.svg'
import NoAvatar from 'assets/icons/no-avatar.svg'
import { getData } from '~/utils/request'
const Notify = () => {
  const [query, setQuery] = useState({
    offset: 0,
    level: 1,
    limit: 3
  })
  const [more, setMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const loadFunc = async () => {
    if (!loading) {
      setLoading(prev => !prev)
      const { data: { listNoti: datas } } = await getData('notify/get-notify-user', null, query)
      setList([...list, ...datas])
      setQuery({ ...query, offset: list.length })
      setMore(query.limit <= datas.length)
      setLoading(prev => !prev)
    }
  }
  return (
    <div className='me-5 position-relative py-5 d-flex group'>
      <Notification className="cursor-pointer" />
      <div className='list-data position-absolute right-0 overflow-auto rounded-1 border bg-white text-body p-3 scrollbar'>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={more}
          loader={<div className="loader" key={0}>Đang tải dữ liệu ...</div>}
          useWindow={false}>
          {list.map((it, ind) => (
            <div key={ind} className="d-flex border-bottom pb-1 mb-1">
              <div className='shrink-0 mr-1'>
                <Image src={it.avatar || NoAvatar} loading='lazy' width={30} height={30} alt="avatar" />
              </div>
              <div>{it.text}</div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <style jsx>{`
        .list-data {
          min-width: 250px;
          max-width: 100%;
          max-height: 300px;
        }`
      }</style>
    </div>
  )
}

export default Notify