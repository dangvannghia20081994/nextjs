import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useToken } from 'common/hook'
import { setUser } from 'store'
import { getData } from '~/utils/request'
import Header from '~/components/layouts/header'
import Footer from '~/components/layouts/footer'
import { BackToTop } from '~/components/extra'
const Default = ({ children }) => {
  const router = useRouter()
  const blackList = []
  const { token } = useToken()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  if (!user) {
    if (blackList.includes(router.pathname)) {
      router.push('/login')
    }
    if (token) {
      getData('profile/user', {}, token)
        .then(user => {
          dispatch(setUser(user.data))
        })
    }
  }
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  )
}
export default Default