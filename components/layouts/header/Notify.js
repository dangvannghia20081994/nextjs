import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Dropdown from 'react-bootstrap/Dropdown'
import InfiniteScroll from 'react-infinite-scroller'
import { ReactComponent as Notification } from '~/assets/icons/header/notify/notify.svg'
import NoAvatar from '~/assets/icons/no-avatar.svg'
import { getData } from '~/utils/request'
const Item = ({ item, className, ...props}) => {
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
const Notify = (props) => {
  const [query, setQuery] = useState({
    offset: 0,
    level: 1,
    limit: 10
  })
  const [isLoading, setIsLoading] = useState(false)
  const [more, setMore] = useState(false)
  const [list, setList] = useState([])
  const loadFunc = useCallback(async () => {
    if (!isLoading) {
      setIsLoading(true)
      const { data: { listNoti: datas } } = await getData('notify/get-notify-user', query)
      setList([...list, ...datas])
      setMore(query.limit <= datas.length)
      setIsLoading(false)
    }
  })
  useEffect(() => {
    loadFunc()
  }, [])
  useEffect(() => {
    setQuery(prev => ({ ...prev, offset: list.length }))
  }, [list])
  
  return (
    <div className='me-4 position-relative d-none d-lg-flex notify'>
      <Dropdown align='end' className='py-3' id="dropdown-notify-header">
        <Dropdown.Toggle as={"div"} variant='transparent' className="no-caret">
          <Notification className="pointer" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="list-data rounded-1 scrollbar px-3 top-100">
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
        </Dropdown.Menu>
      </Dropdown>
      <style jsx global>{`
        #dropdown-notify-header .list-data {
          min-width: 250px;
          max-height: 300px;
          transform: unset !important;
        }
        #dropdown-notify-header .list-data > div > .item:last-child {
          border-bottom: 0 !important;
          margin-bottom:0 !important;
          padding-bottom:0 !important;
        }
      `}</style>
    </div>
  )
}

export default Notify
