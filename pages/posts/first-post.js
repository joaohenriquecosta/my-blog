import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
          <Head>
            <title>First Post</title>
          </Head>
          <h1>First Post</h1>
          <h2>
    {/* The Link component enables client-side navigation between two pages in the same Next.js app.
            <Link href="/">Back to home</Link>
    Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser. */}
          </h2>
        </Layout>
      );
  }