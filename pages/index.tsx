import * as prismic from '@prismicio/client';

import { GetStaticProps } from 'next';

import { RichText } from 'prismic-reactjs';

import Image from 'next/image';
import Link from 'next/link';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import RequestBeta from '../components/RequestBeta';
import Carousel from '../components/Slider';
import Footer from '../components/Footer';

export default function Home({ homepage }) {
  return (
    <div className='font-Inter text-white overflow-x-hidden'>
      <Header />

      <main className=' bg-gradient-to-b from-primary via-blue-900 to-secondary'>
        <Hero />

        <RequestBeta />

        {/* A.I. SECTION*/}
        <div className='grid sm:grid-cols-3 grid-cols-1 bg-gradient-to-r from-black to-blue-900 pt-20 mb-0 sm:-mt-24 mt-40 md:-mt-32 relative'>
          {/* Background Image. */}
          <div className='col-span-3 -mb-2'>
            <Image src='/asset2.png' alt='A.I image' height={480} width={880} />
            <span className='absolute sm:top-48 mt-10 left-0'>
              <button
                disabled
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Pencils
              </button>
            </span>
            <span className='absolute sm:top-44 sm:left-72 left-40'>
              <button
                disabled
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Person
              </button>
            </span>
            <span className='absolute sm:top-64 left-20 top-40 sm:ml-28'>
              <button
                disabled
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Desk
              </button>
            </span>
            <span className='absolute sm:top-64 sm:left-96 top-40 sm:ml-10 left-56 md:ml-0'>
              <button
                disabled
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Pencils
              </button>
            </span>
            <span className='absolute sm:top-64 top-20 left-10 mt-36'>
              <button
                disabled
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Person
              </button>
            </span>
            <span className='absolute sm:top-64 sm:left-96 mt-36 sm:ml-36 top-20 left-60 md:ml-10'>
              <button
                disabled
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Scenary
              </button>
            </span>
          </div>
          <div className='sm:absolute sm:top-8 sm:right-2 sm:z-5 sm:w-1/4 sm:my-10 bg-white rounded-lg p-8 sm:mr-10 mx-5 mb-5 md:w-72'>
            <div>
              <p className='text-gray-400 whitespace-nowrap text-base'>
                Artificial Intelligence
              </p>
            </div>
            <div className='text-lg font-medium'>
              <p className='text-gray-600 whitespace-nowrap pt-5 '>
                Let <span className='text-pink-600'>A.I.</span> handle lorem
              </p>
              <p className='text-gray-600 whitespace-nowrap'>
                ipsum dolor sit.
              </p>
            </div>
            <img
              className='w-20 shadow rounded h-auto align-middle border-none mx-auto my-10'
              src='/ai.png'
              alt='image'
            />
            <div className='text-sm font-normal text-gray-400'>
              <span className='text-gray-600'> No more need to </span> lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna.
            </div>
          </div>
        </div>

        <Carousel />

        {/* NEWS SECTION*/}
        <div className='relative grid sm:grid-cols-2 grid-cols-1 w-full bg-gradient-to-r from-black to-blue-900 sm:py-36 sm:-mt-32'>
          <Image
            src='/asset3.png'
            alt='Background picture for news section.'
            layout='fill'
            objectFit='cover'
          />
          <div className='sm:ml-10 px-10'>
            <h1 className='my-20 text-2xl'>
              <span className=' font-bold pr-2'>News</span>lorem at PicLab
            </h1>

            <div className='flex'>
              <p className='text-gray-400 mr-10'>
                {RichText.asText(homepage.data.newsdate1)}
              </p>
              <div className='no-flex'>
                <Link href='#'>
                  <a className='underline'>
                    {RichText.asText(homepage.data.news1)}
                  </a>
                </Link>
              </div>
            </div>
            <hr className='w-100 h-0 my-10 bg-gray-400' />
            <div className='flex'>
              <p className='text-gray-400 mr-14'>
                {RichText.asText(homepage.data.newsdate2)}
              </p>
              <div className='no-flex'>
                <Link href='#'>
                  <a className='underline'>
                    {RichText.asText(homepage.data.news2)}
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* PicLab logo. */}
          <div className='flex sm:ml-72 sm:mt-20 sm:pb-0 mt-36 ml-24 md:ml-52'>
            <div className='static right-10  border-8 w-0 h-64  mx-5 mt-20 bg-white-100 z-2 '></div>
            <div className='sticky right-10 z-5 border-8 w-0 h-24 mx-5 mt-20 bg-white-100 z-2 '></div>
            <div className='static right-10 border-8 w-0 h-64 mx-5 -mt-20 bg-white-100'></div>
          </div>
        </div>

        {/* REQUEST BETA */}
        <div className='relative h-96 py-96 '>
          <Image
            src='/footer-bg.png'
            alt='Footer background image'
            layout='fill'
            objectFit='cover'
          />
          <div className='relative z-2 bg-black h-96 py-96 -my-96 flex justify-center bg-opacity-80 mx-50'>
            <div className='no-flex -mt-36'>
              <div className='text-2xl align-items-center'>
                <h1 className='m-auto text-2xl justify-center flex flex-nowrap '>
                  Let's get started lorem
                </h1>
                <h1 className='text-2xl font-Inter justify-center flex flex-nowrap '>
                  ipsum with<span className='font-bold px-2'>PicLab</span>
                </h1>
              </div>
              <div className='text-black bg-white w-full mt-10 p-2 rounded mx-auto  '>
                <form action='#' method='post'>
                  <div className='rounded-lg px-2 justify-between flex flex-nowrap'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size='lg'
                      color='#d1d1d1'
                      className='mt-0.5'
                      style={{ maxWidth: '2rem', minWidth: '2rem' }}
                    />

                    <input
                      type='email'
                      name='client-email'
                      id='client-email2'
                      className='pl-2 text-sm w-11/12 mt-1'
                      placeholder='Enter email'
                    />

                    <button
                      type='submit'
                      className='whitespace-nowrap text-pink-600 text-sm'
                    >
                      |<span className='pl-5'>Request Beta</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// PRISMIC CMS CONFIGURATION.

export const getStaticProps: GetStaticProps = async (context) => {
  // API endpoint for the Prismic CMS repository.
  const endpoint = prismic.getEndpoint('piclab-samo');

  // Client used to fetch CMS content.
  const client = prismic.createClient(endpoint);

  // Page document for our homepage from the CMS.
  const homepage = await client.getSingle('homepage');

  // Pass the homepage as prop to page.
  return {
    props: {
      homepage,
    },
  };
};
