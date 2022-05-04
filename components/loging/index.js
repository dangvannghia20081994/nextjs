import React, { useState, useEffect, useCallback } from "react";
import Item from './Item'
import { getData } from '~/utils/request'
import InfiniteScroll from "react-infinite-scroller";
const index = ({item, className = 'bg-white', ...props }) => {
  const [list, setList] = useState([])
  const [query, setQuery] = useState({
    offset: 0,
    limit: 10,
    level: 0,
  });
  
  const [loading, setLoading] = useState(false)
  const [more, setMore] = useState(true)
  const loadData = useCallback(async () => {
    if (loading || !more) return;
    setLoading(true)
    const { data: { listNoti } } = await getData("notify/get-notify-user", query);
    setList(prev => [...prev, ...listNoti])
    setQuery((prev) => ({ ...prev, offset: query.offset + listNoti.length }));
    setMore(query.limit === listNoti.length)
    setLoading(false);
  });
  return (
    <div className={`px-4 py-3 shadow rounded-2 ${className} `}>
      <div className="text-uppercase fw-bold">HOẠT ĐỘNG GẦN ĐÂY</div>
      <div className="list-loging scrollbar pt-2">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadData}
          hasMore={more}
          useWindow={false}>
          {list.map((it, ind) => (
            <Item key={ind} item={it} className="my-1 text-break"/>
          ))}
        </InfiniteScroll>
      </div>
      <style jsx>{`
        .list-loging {
          min-height: 200px;
          max-height: 300px;
        }
      `}</style>
    </div>
  );
}
export default index