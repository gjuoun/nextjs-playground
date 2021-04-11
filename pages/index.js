import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Post page</title>
      </Head>
      <h1 className="title">
        Learn <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h1 className="title">
        Read{' '}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>

      <Image height={144} width={144} src="/images/profile.jpg" alt="Your Name" />
      <style jsx>{`
      h1{
          color: blue;
      }`}
      </style>
    </div>
  )
}
