import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroller'
import { ReactComponent as Notification } from 'assets/icons/header/notify/notify.svg'
import NoAvatar from 'assets/icons/no-avatar.svg'
import { getData } from '~/utils/request'
const Item = ({ item, className}) => {
  return (
    <div className={`d-flex item pb-1 mb-1 ${className}`}>
      <div className='flex-shrink-0 me-2'>
        <Image src={item.avatar || NoAvatar} loading='lazy' width={32} height={32} alt="avatar" className='rounded-circle' />
      </div>
      <div className='flex-grow-1'>{item.text}</div>
    </div>
  )
}
const SkeletonItem = () => {
  return (
    <div className={`d-flex item pb-1 mb-1`}>
      <div className='flex-shrink-0 me-2'>
        <Skeleton circle width={32} height={32} />
      </div>
      <div className='flex-grow-1'>
        <Skeleton height={16} />
        <Skeleton height={16} />
      </div>
    </div>
  )
}
const Notify = () => {
  const [query, setQuery] = useState({
    offset: 0,
    level: 1,
    limit: 5
  })
  const [isLoading, setIsLoading] = useState(false)
  const [more, setMore] = useState(false)
  const [list, setList] = useState([])
  const loadFunc = async () => {
    if (!isLoading) {
      setIsLoading(true)
      const { data: { listNoti: datas } } = await getData('notify/get-notify-user', query)
      setList([...list, ...datas])
      setMore(query.limit <= datas.length)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    loadFunc()
  }, [])
  useEffect(() => {
    setQuery(prev => ({ ...prev, offset: list.length }))
  }, [list])
  
  return (
    <div className='me-4 position-relative py-3 d-flex notify'>
      <Notification className="pointer" />
      <div className='list-data position-absolute top-100 end-0 overflow-auto rounded-1 border bg-white text-body p-3 scrollbar'>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={more}
          loader={
            Array(5).fill(0).map((it, ind) => (
              <SkeletonItem key={ind} />
            ))
          }
          useWindow={false}>
          {list.map((item, ind) => (
            <Item key={ind} item={item} className={`border-bottom`}/>
          ))}
        </InfiniteScroll>
      </div>
      <style jsx>{`
        .notify:hover .list-data {
          display: block;
        }
        .notify .list-data {
          display: none;
          min-width: 250px;
          max-width: 100%;
          max-height: 300px;
        }`
      }</style>
      <style jsx global>{`
        .notify .list-data > div > .item:last-child {
          border-bottom: 0 !important;
          margin-bottom:0 !important;
          padding-bottom:0 !important;
        }
      `}</style>
    </div>
  )
}

export default Notify