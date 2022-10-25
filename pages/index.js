import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/index.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export const ProfilePic = () => (
  <Image
    src="/images/perfil.jpeg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Palinha"
  />
);

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>João Henrique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ProfilePic />
        <h2 className={styles.title}>
          João Henrique Costa
        </h2>

        <p className={styles.description}>
          Hello! This website contains some information about me and my work.
          <br/>
          You can contact me on
          <a href='https://instagram.com/joaoahenrique_costa'> instragram </a>
          or
          <a href='https://api.whatsapp.com/send?phone=5516982441889'> whatsapp</a>.
        </p>

        <div className={styles.grid}>

          <a 
            href="https://www.linkedin.com/in/joaohenrique-costa/" 
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>my linkedin profile</p>
          </a>

          <a
            href="https://www.github.com/joaohenriquecosta"
            className={styles.card}
          >
            <h3>Github &rarr;</h3>
            <p>my github profile</p>
          </a>


          <a 
            href="#" 
            className={styles.card}
          >
            <h3>Portfolio &rarr;</h3>
            <p>projects I developed</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>[Example] &rarr;</h3>
            <p>
              another link
            </p>
          </a>

        </div>

        <section className="">
          <h2 className={styles.description}>Articles</h2>
          <ul className="">
            {allPostsData.map(({ id, date, title }) => (
              
                <li className="" key="{id}">
                  {title}
                  <br />
                  {id}
                  <br />
                  {date}
                </li>
            ))}
          </ul>
        </section>

      </main>

      <footer className={styles.footer}>
        Built with Next.js and deployed at Vercel.
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}