import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { getData } from '~/utils/request'
import UserInfo from '~/components/user/Info'
import { Select, Search } from '~/components/extra'
const Index = () => {
  const [query, setQuery] = useState(
    {
      class_id: '',
      category_id: '',
      question_status: '',
      keyword: '',
      limit: 10,
      offset: 0,
      page: 1
    }
  )
  const [list, setList] = useState([])
  const active = useSelector((state) => state.app.classActive)
  const classes = useSelector((state) => state.app.classes).map(it => (
    {
      id: it.id,
      label: it.name
    }
  ))
  const subjects = useSelector((state) => state.app.subjects).map(it => (
    {
      id: it.id,
      label: it.name
    }
  ))
  const loadData = async () => {
    const { data } = await getData('qa', query)
    setQuery(prev => ({ ...prev, page: prev.page++, offset: (prev.offset + data.length)}))
    setList(prev => [...prev, ...data])
  }
  useEffect(() => {
    setQuery(prev => ({ ...prev, category_id: (active?.id || ''), page: 1, offset: 0}))
  }, [active])
  useEffect(() => {
    loadData()
  }, [query.category_id, query.class_id, query.keyword, query.question_status])
  const listStatus = [
    { id: 0, label: 'Tất cả' },
    { id: 1, label: 'Đã trả lời' },
    {
      label: 'Chưa trả lời', group: true, sub: [
        { id: 'desc', label: 'Mới nhất' },
        { id: 'asc', label: 'Cũ nhất' },
      ]
    },
    { id: 4, label: 'Hỏi lần đầu' },
  ]
  const handerSelectStatus = (it) => {
    const status = it.id
    setQuery(prev => ({ ...prev, page: 1, offset: 0, question_status: status}))
  }
  const handerSelectClass = (it) => {
    const status = it.id
    setQuery(prev => ({ ...prev, page: 1, offset: 0, class_id: status }))
  }
  const handerSelectSubject = (it) => {
    const status = it.id
    setQuery(prev => ({ ...prev, page: 1, offset: 0, category_id: status }))
  }
  const handerSearch = (keyword) => {
    setQuery(prev => ({ ...prev, page: 1, offset: 0, keyword }))
  }
  return (
    <div className='container pt-2'>
      <div className='row'>
        <div className='col-lg-8'>
          <Image src="https://api-dev.colearn.vn:8413/v1.0/upload/config/image/15072021/bbafbca4-fecb-4412-bd5a-6020b5e9fb15.png" width={1010} height={205} alt="banner" />
          <div className='filter d-flex align-items-center'>
            <Select id="custom-select-class" list={classes} toggle="bg-white fw-normal" placeholder="Chọn lớp" handerSelect={handerSelectClass} selected={query.class_id} className={`me-2`} />
            <Select id="custom-select-subject" list={subjects} toggle="bg-white fw-normal" placeholder="Chọn môn" handerSelect={handerSelectSubject} selected={query.category_id} className={`me-2`} />
            <Select id="custom-select-status" list={listStatus} toggle="bg-white fw-normal" placeholder="Trạng thái câu hỏi" handerSelect={handerSelectStatus} selected={query.question_status} className={``} />
            <Search className="ms-auto" handerSearch={handerSearch} />
          </div>
          <div className='list-question'></div>
        </div>
        <div className='col-lg-4'>
          <UserInfo className="bg-white"/>
        </div>
      </div>
    </div>
  )
}
export default Index