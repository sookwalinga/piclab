import * as prismic from '@prismicio/client';
import { RichText } from 'prismic-reactjs';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

// Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Home({ homepage }) {
  var carouselSettings = {
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className='font-Inter text-white'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <script
          type='text/javascript'
          src='https://kit.fontawesome.com/117bcfe378.js'
        ></script> */}
      </Head>

      {/* HERO SECTION */}
      <main className=' bg-gradient-to-r from-primary via-blue-900 to-secondary'>
        <div className='grid grid-cols-1 sm:grid-cols-4 text-white pl-10  '>
          {/* LEFT  COL */}
          <div className='sm:pl-20 sm:col-span-2 pt-20'>
            <div className='flex flex-row  sm:w-96 sm:pb-24 pb-10'>
              <Image src='/logo.png' alt='Logo' width={20} height={40} />
              <h1 className='pl-2 pt-2 font-bold'>PICLAB</h1>
            </div>

            <button className='border-2 rounded-lg border-black-500 px-2 pt-1text-xs font-Idlewild'>
              COMING SUMMER 2021
            </button>
            <p className='pt-4 text-2xl'>Powerful image</p>
            <p className='text-2xl font-bold'>asset management</p>
            <p className='text-2xl'>for everyone.</p>
            <div className='sm:pt-20 pt-8 mr-8 pb-24'>
              <div className='border-l-2  border-black-500 h-20 w-72 text-sm'>
                <div className='ml-8'>
                  <span className='font-bold mr-1'>
                    Organize, transform, & serve
                  </span>
                  your entire photo library. The perfect image management app
                  for freelancers, organizations & web developers.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COL */}
          <div className='sm:col-span-2'>
            <span className='absolute sm:top-28 top-96 sm:right-0  sm:mt-0 mt-20 sm:ml-0 ml-5'>
              <Image
                src='/footer-bg.png'
                alt='image'
                height={500}
                width={580}
                className='drop-shadow-2xl'
              />
            </span>

            <span className='absolute sm:top-10 top-96 right-0 sm:mt-0 mt-12'>
              <Image
                src='/apple-mac.png'
                alt='image'
                height={600}
                width={700}
                className='drop-shadow-2xl'
              />
            </span>

            <span className='absolute sm:top-5 sm:right-72 top-96 mt-10'>
              <Image
                src='/hero1.png'
                alt='image'
                height={160}
                width={200}
                className='drop-shadow-2xl'
              />
            </span>
            <span className='absolute sm:top-16 sm:right-96 mr-10 sm:mt-10 -mt-10'>
              <button
                disabled='disabled'
                className='border-2 py-1 px-2 border-white rounded-full bg-gradient-to-r from-gray-600 to-gray-400 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Person
              </button>
            </span>
            <span className='absolute sm:top-16 sm:right-44 sm:mt-10 right-0 -mt-10'>
              <button
                disabled='disabled'
                className='border-2 py-1 px-3 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-2 text-gray-400'>#</span> Pencils
              </button>
            </span>
            <span className='absolute sm:top-32 sm:right-56 sm:mt-0 top-96 right-8 mt-28 '>
              <Image
                src='/hero2.png'
                alt='image'
                height={160}
                width={200}
                className='drop-shadow-2xl'
              />
            </span>
            <span className='absolute sm:top-96 sm:right-48 sm:mt-16 right-16 top-96 mt-60'>
              <button
                disabled='disabled'
                className='border-2 py-1 px-3 border-white rounded-full bg-gradient-to-r from-blue-800 via-gray-400 to-blue-900 text-xs'
              >
                <span className='pr-2 text-gray-400'>#</span> Water
              </button>
            </span>
            <span className='absolute sm:top-72 sm:left-96 sm:ml-10 sm:mt-24 top-96 mt-52 left-0'>
              <Image
                src='/hero3.png'
                alt='image'
                height={160}
                width={200}
                className='drop-shadow-2xl'
              />
            </span>

            <span className='absolute sm:top-96 sm:mt-5 sm:ml-44 sm:left-96 bottom-0 left-28'>
              <button
                disabled='disabled'
                className='border-2 py-1 px-3 border-white rounded-full bg-gradient-to-r from-white to-gray-600 text-xs'
              >
                <span className='pr-2 text-gray-400'>#</span> Desk
              </button>
            </span>
          </div>
        </div>

        {/* REQUEST BETA FIXED FORM */}
        <div className='fixed bottom-0 sm:right-12 mb-2 bg-white rounded-lg grid sm:grid-cols-4 sm:w-11/12 w-full  p-2 z-30  text-xs'>
          <div className='text-black col-span-2'>
            <form action='#' method='post' className>
              <div className='flex border-2 rounded-lg sm:mr-36 px-1'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size='lg'
                  color='#d1d1d1'
                  className='mt-2.5'
                />
                <input
                  type='email'
                  name='client-email'
                  id='client-email'
                  className='p-2'
                  placeholder='Enter email'
                />

                <button
                  type='submit'
                  className='whitespace-nowrap text-pink-600'
                >
                  | <span className='pl-8 '> Request Beta</span>
                </button>
              </div>
            </form>
          </div>
          <div className='text-black flex flex-row justify-self-start sm:mt-0 mt-2'>
            <Image
              src='/logo-red.png'
              alt='Logo'
              // layout='fill'
              width={10}
              height={20}
            />
            <h1 className='pl-2 pt-2'>PICLAB</h1>
          </div>
          <div className='pt-2 justify-self-end mr-5'>
            <button
              type='submit'
              className='text-pink-600 whitespace-nowrap'
            >
              <FontAwesomeIcon icon={faSignInAlt} size='lg' />
              <span className='pl-2 text-sm'> Sign In</span>
            </button>
          </div>
        </div>

                {/* SECTION TWO - A.I.*/}
                <div className='relative bg-gradient-to-r from-black to-blue-900 pt-26 mt-16 z-10 pl-96'>
          {/* Background Image. */}
          <Image
            src='/asset2.png'
            alt='A.I image'
            layout='fill'
            objectFit='fill'
          />

          <span className='absolute top-64 left-0'>
            <button
              disabled='disabled'
              className='border-2 py-1 px-3 border-white rounded-full bg-gray-800'
            >
              <span className='pr-2 text-gray-400'>#</span> Pencils
            </button>
          </span>
          <span className='absolute top-52 left-72 '>
            <button
              disabled='disabled'
              className='border-2 py-1 px-3 border-white rounded-full bg-gray-800'
            >
              <span className='pr-2 text-gray-400'>#</span> Person
            </button>
          </span>
          <span className='absolute top-96 left-20 ml-28'>
            <button
              disabled='disabled'
              className='border-2 py-1 px-3 border-white rounded-full bg-gray-800'
            >
              <span className='pr-2 text-gray-400'>#</span> Desk
            </button>
          </span>
          <span className='absolute top-96 left-96 ml-10'>
            <button
              disabled='disabled'
              className='border-2 py-1 px-3 border-white rounded-full bg-gray-800'
            >
              <span className='pr-2 text-gray-400'>#</span> Pencils
            </button>
          </span>
          <span className='absolute top-96 left-20 mt-36'>
            <button
              disabled='disabled'
              className='border-2 py-1 px-3 border-white rounded-full bg-gray-800'
            >
              <span className='pr-2 text-gray-400'>#</span> Person
            </button>
          </span>
          <span className='absolute top-96 left-96 mt-36 ml-36'>
            <button
              disabled='disabled'
              className='border-2 py-1 px-3 border-white rounded-full bg-gray-800'
            >
              <span className='pr-2 text-gray-400'>#</span> Scenary
            </button>
          </span>

          <div className='sticky my-20 bg-white rounded-lg  px-5 py-8 ml-72 w-96'>
            <div>
              <p className='text-gray-400 whitespace-nowrap '>
                Artificial Intelligence
              </p>
            </div>
            <div className='text-3xl font-medium'>
              <p className='text-gray-600 whitespace-nowrap pt-8 '>
                Let <span className='text-pink-600'>A.I.</span> handle lorem
              </p>
              <p className='text-gray-600 whitespace-nowrap'>
                ipsum dolor sit.
              </p>
            </div>
            <img
              className='w-36 shadow rounded h-auto align-middle border-none mx-auto my-14'
              src='/ai.png'
              alt='image'
            />

            <div className='text-xl font-normal'>
              <p className='text-gray-400 whitespace-nowrap'>
                <span className='text-gray-600'> No more need to </span> lorem
                ipsum dolor sit
              </p>
              <p className='text-gray-400 whitespace-nowrap'>
                amet, consectetur adipiscing elit, sed
              </p>
              <p className='text-gray-400 whitespace-nowrap'>
                do eiusmod tempor incididunt ut labore
              </p>
              <p className='text-gray-400 whitespace-nowrap'>
                et dolore magna.
              </p>
            </div>
          </div>
        </div>

      </main>
      <footer className='bg-gradient-to-r from-primary to-secondary h-72 w-full'></footer>
    </div>
  );
}

// CONFIGURATION FOR PRISMIC CMS.
export async function getStaticProps() {
  // API endpoint for the Prismic CMS repository.
  const endpoint = prismic.getEndpoint('piclab-samo');

  // Client used to fetch CMS content.
  const client = prismic.createClient(endpoint);

  // Page document for our homepage from the CMS.
  const homepage = await client.getSingle('homepage', 'logo');

  // Pass the homepage as prop to page.
  return {
    props: {
      homepage,
    },
  };
}
