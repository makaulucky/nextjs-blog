import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Lucky Makau, a software developer based in Nairobi, Kenya.</p> 
        <p> You could also reach me at <a href="http://www.twitter.com/makaulucky" target="_blank" rel="noopener noreferrer">@makaulucky</a> on twitter.</p>
        <p> You can also write me a mail <a href="mailto:lucky@squaretech.co.ke" target="_blank" rel="noopener noreferrer">Lucky Makau</a>.</p>
        <p>
          (This is a sample website - I have been building this site on{' '}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
