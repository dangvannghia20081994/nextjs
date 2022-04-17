import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroller'
import { ReactComponent as Notification } from 'assets/icons/header/notify/notify.svg'
import NoAvatar from 'assets/icons/no-avatar.svg'
import { getData } from '~/utils/request'
const Notify = () => {
  const user = useSelector(state => state.user.user)
  const [query, setQuery] = useState({
    offset: 0,
    level: 1,
    limit: 3
  })
  const [more, setMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const loadFunc = async () => {
    if (!user) { return }
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
    <div className='mr-6 relative py-5 flex group'>
      <Notification className="cursor-pointer" />
      <div className='list-data absolute top-full right-0 w-64 h-72 overflow-auto rounded-xl border border-opacity-10 border-[#000] bg-white text-body p-3 scrollbar text-sm invisible group-hover:visible'>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={more}
          loader={<div className="loader" key={0}>Đang tải dữ liệu ...</div>}
          useWindow={false}>
          {list.map((it, ind) => (
            <div key={ind} className="flex border-b pb-1 mb-1 border-b-body border-opacity-40 last:border-b-0">
              <div className='shrink-0 w-8 mr-1'>
                <Image src={it.avatar || NoAvatar} loading='lazy' width={30} height={30} alt="avatar" />
              </div>
              <div>{it.text}</div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}
export default Notify