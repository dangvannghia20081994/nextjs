import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { StoreProvider } from 'context/store'
import {getData} from 'utils/request'
import Test from 'components/test'
const Home = ({ datas }) => {
  const meta = {
    title: 'Home',
    description: 'Page home'
  }
  const condition = (item) => {
    console.log(item)
  }
  return (
    <StoreProvider>
      <NextSeo {...meta} />
      <div className='hahaha'>
        {datas.map((it, idx) => (
          // <Test key={idx} item={it} condition={condition}/>
          <Image key={idx}
            src={`https://api.catchup.vn/static/images/20220331/2694e8ef-c02f-48ae-a6ac-341d88b52fa8.jpeg?t=${idx}`}
            width={400}
            height={555}
            loading='lazy'
            alt="cong-chua-cua-anh-de-thumb"
          />
        ))}
      </div>
    </StoreProvider>
  )
}

export async function getServerSideProps(ctx) {
  const { data: datas } = await getData(`category/subject`)
  return {
    props: {
      datas
    }
  }
}
export default Home