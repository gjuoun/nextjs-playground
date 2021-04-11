import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPostsData=getSortedPostsData()

  return {
    props:{
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map( ({id, date, title}) => {
            return <li className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              {id}
              {date}
            </li>
          })}
        </ul>
      </section>
    </Layout>
  )
}
