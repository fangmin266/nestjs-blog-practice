import Head from 'next/head'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/post'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  //경로지정제어
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
    //fallback: 'blocking'  => 파일이 없어도 fallback을 그리고 데이터가 오면 그때 적용
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}
export default function Post({ postData }) {
  console.log(postData, 'postdata')
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading..</div>
  }
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>
        {postData.id} {postData.date}
      </h1>
      {/* <Date dateString={postData.date} /> */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}
