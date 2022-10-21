
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
    return (
        <>
          <Head>
            <title>First Post</title>
          </Head>
          <h1>First Post</h1>
          <h2>
    {/* The Link component enables client-side navigation between two pages in the same Next.js app.*/}
            <Link href="/">Back to home</Link>
    {/*Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser. */}
          </h2>
        </>
      );
  }