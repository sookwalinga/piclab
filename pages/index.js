import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name='description'
          content='Home page frontend developer exercise'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Body</h1>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
