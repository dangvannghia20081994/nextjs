import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroller'
import { ReactComponent as Notification } from 'assets/icons/header/notify/notify.svg'
import NoAvatar from 'assets/icons/no-avatar.svg'
import { getData } from '~/utils/request'
const Notify = () => {
  const [params, setQuery] = useState({
    query: {
      offset: 0,
      level: 1,
      limit: 5
    },
    more: true,
    loading: false
  })
  const [list, setList] = useState([])
  const loadFunc = async () => {
    if (!params.loading) {
      setQuery(prev => ({ ...prev, loading: true }))
      const { data: { listNoti: datas } } = await getData('notify/get-notify-user', null, params.query)
      setList(prev => ([...prev, ...datas]))
      setQuery(prev => ({ ...prev, loading: false, more: prev.query.limit <= datas.length }))
    }
  }
  useEffect(() => {
    loadFunc()
  }, [])
  useEffect(() => {
    setQuery(prev => ({ ...prev, query: { ...prev.query, offset: list.length } }))
  }, [list])
  
  return (
    <div className='me-4 position-relative py-3 d-flex group'>
      <Notification className="pointer" />
      <div className='list-data position-absolute top-100 end-0 overflow-auto rounded-1 border bg-white text-body p-3 scrollbar'>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={params.more}
          loader={<div className="loader" key={0}>Đang tải dữ liệu ...</div>}
          useWindow={false}>
          {list.map((it, ind) => (
            <div key={ind} className={`d-flex item pb-1 mb-1 ${ind < list.length - 1 ? 'border-bottom' : '' }`}>
              <div className='flex-shrink-0 me-2'>
                <Image src={it.avatar || NoAvatar} loading='lazy' width={32} height={32} alt="avatar" className='rounded-circle' />
              </div>
              <div>{it.text}</div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <style jsx>{`
        .group:hover .list-data {
          display: block;
        }
        .list-data {
          display: none;
          min-width: 250px;
          max-width: 100%;
          max-height: 300px;
        }`
      }</style>
    </div>
  )
}

export default Notify