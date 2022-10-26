import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/index.module.css'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const ProfilePic = () => (
  <Image
    src="/images/perfil.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Palinha"
    className={styles.borderCircle}
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
        <h3 className={styles.title}>
          João Henrique Costa
        </h3>

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
            <p>coming soon...</p>
          </a>

          <a
            href="https://hubsmarthome.com.br"
            className={styles.card}
          >
            <h3>HubSmartHome &rarr;</h3>
            <p>
              partner ecommerce
            </p>
          </a>

        </div>

        <section>
          <h2 className={styles.title}>Articles</h2>
          <ul className={styles.list}>
            {allPostsData.map(({ id, date, title }) => (
              
                <li className={styles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    {title}
                  </Link>
                  <br />
                  <small className={styles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
            ))}
          </ul>
        </section>

      </main>

      <footer className={styles.footer}>
        Built with Next.js and deployed at Vercel.
      </footer>

    </div>
  );
}