import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/post'

import Link from 'next/link'
import { getSortedPostsData } from '../lib/post'

export async function getStaticProps() {
  //SSG

  const allPostsData = getSortedPostsData()
  console.log(allPostsData, 'thisis allpostdata!!!!')
  return {
    props: {
      allPostsData,
    },
  }
}

// export async function getServerSideProps() { //SSR
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     },
//   }
// }

export default function Home({ allPostsData }) {
  // export default function Home() {
  // const [allPostsData, setAllpostData] = useState([]) // CSR
  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then((res) => res.json())
  //     .then((data) => setAllpostData(data.allPostsData))
  // }, [])
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="bg-purple-700 text-bold">[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
