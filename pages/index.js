import Head from 'next/head';
import Image from 'next/image';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-primary to-secondary font-Inter text-white'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-row  w-full'>
        <div className='flex-2 px-20 pt-20'>
          <div className='flex flex-row  w-full pb-36 '>
            <Image
              src='/logo.png'
              alt='Logo'
              // layout='fill'
              width={20}
              height={40}
            />
            <h1 className='pl-2 pt-2 font-bold'>PICLAB</h1>
          </div>

          <button className='border-2 rounded-lg border-black-500 px-2 text-xs font-Idlewild'>
            COMING SUMMER 2021
          </button>
          <p className='pt-6 text-3xl'>Powerful image</p>
          <p className='text-3xl font-bold'>asset management</p>
          <p className='text-3xl'>for everyone.</p>
          <p className='pt-20 mr-8'>
            <div className='border-l-2  border-black-500 h-20 w-72 text-sm'>
              {' '}
              <div className='ml-8'>
                <span className='font-bold'>Organize, transform, & serve</span>
                your entire photo library. The perfect image management app for
                freelancers, organizations & web developers.
              </div>
            </div>
          </p>
        </div>
        <div className='flex-3 pt-20'>
          <img
            className='w-screen shadow rounded max-w-full h-screen align-middle border-none'
            src='/apple-macbook.png'
            alt='image'
          />
        </div>
        <div className='fixed bottom-0 mb-2 bg-white rounded-lg justify-evenly flex w-full p-2'>
          <div className='text-black pr-56'>
            <form
              action='
          #'
              method='post'
            >
              <div className='flex border-2 rounded-lg px-6'>
                <input
                  type='email'
                  name='client-email'
                  id='client-email'
                  className='p-2'
                  placeholder='Enter email'
                />

                <span className='whitespace-nowrap pt-2 text-pink-600'>
                  | <span className='pl-8'> Request Beta</span>
                </span>
              </div>
            </form>
          </div>
          <div className='flex flex-row  w-full text-black pl-10 '>
            <Image
              src='/logo-red.png'
              alt='Logo'
              // layout='fill'
              width={10}
              height={20}
            />
            <h1 className='pl-2 pt-2'>PICLAB</h1>
          </div>
          <button
            type='submit'
            className='text-pink-600 mr-10 whitespace-nowrap'
          >
            <FontAwesomeIcon icon={faSignInAlt} size='lg' />
            <span className='pl-2'> Sign In</span>
          </button>
        </div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
