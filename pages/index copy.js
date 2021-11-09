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
      <main className='flex flex-col  w-full bg-gradient-to-r from-primary via-blue-900 to-secondary'>
        <div className='grid grid-cols-1 sm:grid-cols-3 text-white'>
          {/* LEFT  COL */}
          <div className='flex-2 px-20 pt-20'>
            <div className='flex flex-row  w-96 pb-36 '>
              <Image src='/logo.png' alt='Logo' width={20} height={40} />
              <h1 className='pl-2 pt-2 font-bold'>PICLAB</h1>
            </div>

            <button className='border-2 rounded-lg border-black-500 px-2 text-xs font-Idlewild'>
              COMING SUMMER 2021
            </button>
            <p className='pt-6 text-3xl'>Powerful image</p>
            <p className='text-3xl font-bold'>asset management</p>
            <p className='text-3xl'>for everyone.</p>
            <div className='pt-20 mr-8'>
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
          <div className='md:col-span-2 mt-8'>
          <span >
          {/* <span className='absolute top-28 right-0'> */}
              <Image
                src='/footer-bg.png'
                alt='image'
                height={700}
                width={810}
                className='drop-shadow-2xl'
              />
            </span>

            <span >
            {/* <span className='absolute top-10 right-0'> */}
              <Image
                src='/apple-mac.png'
                alt='image'
                height={800}
                width={1000}
                className='drop-shadow-2xl'
              />
            </span>
            <span>
            {/* <span className='absolute top-10 right-96'> */}
              <Image
                src='/hero1.png'
                alt='image'
                height={250}
                width={300}
                className='drop-shadow-2xl'
              />
            </span>
            {/* <span className='absolute top-16 right-96 mr-56 mt-10'> */}
            <span >
              <button
                disabled='disabled'
                className='border-2 py-1 px-3 border-white rounded-full bg-gradient-to-r from-gray-600 to-gray-400'
              >
                <span className='pr-2 text-gray-400'>#</span> Person
              </button>
            </span>
            <span className='absolute top-16 right-0 mt-10'>
              <button
                disabled='disabled'
                className='border-2 py-1 px-3 border-white rounded-full bg-gray-800'
              >
                <span className='pr-2 text-gray-400'>#</span> Pencils
              </button>
            </span>
            <span className='absolute top-36 right-72'>
              <Image
                src='/hero2.png'
                alt='image'
                height={200}
                width={240}
                className='drop-shadow-2xl'
              />
            </span>
            <span className='absolute top-96 right-72  mt-44'>
              <button
                disabled='disabled'
                className='border-2 py-1 px-3 border-white rounded-full bg-gradient-to-r from-blue-800 via-gray-400 to-blue-900'
              >
                <span className='pr-2 text-gray-400'>#</span> Water
              </button>
            </span>
            <span className='absolute top-96 left-96 ml-10 mt-20'>
              <Image
                src='/hero3.png'
                alt='image'
                height={200}
                width={240}
                className='drop-shadow-2xl'
              />
            </span>

            <span className='absolute top-96 mt-24 md:ml-48 md:left-96 '>
              <button
                disabled='disabled'
                className='border-2 py-1 px-3 border-white rounded-full bg-gradient-to-r from-white to-gray-600'
              >
                <span className='pr-2 text-gray-400'>#</span> Desk
              </button>
            </span>
          </div>
        </div>
        {/* REQUEST BETA FIXED FORM */}
        <div className='fixed bottom-0  mb-2 bg-white rounded-lg justify-evenly flex w-full p-2 z-30'>
          <div className='text-black pr-56'>
            <form action='#' method='post'>
              <div className='flex border-2 rounded-lg px-6'>
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
                  | <span className='pl-8'> Request Beta</span>
                </button>
              </div>
            </form>
          </div>
          <div className='flex flex-row  w-full text-black pl-0 '>
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

        {/* SECTION 3 WITH CAROUSEL*/}
        <div className='bg-gradient-to-r from-primary to-secondary px-8 pt-10 pb-10'>
          <h1 className='m-auto text-2xl justify-center flex flex-nowrap '>
            Why <span className='font-bold px-2'>PicLab</span> is the perfect
          </h1>
          <h1 className='text-2xl font-Inter justify-center flex flex-nowrap '>
            lorem ipsum for you.
          </h1>
          <Slider {...carouselSettings} className='pt-10 px-10 z-10 rounded-lg'>
            {/* SLIDE 1 */}
            <div className='bg-white rounded-lg px-2 pt-8 ml-2'>
              <div className='px-10'>
                <p className='text-gray-400 whitespace-nowrap '>All-in-one</p>
              </div>
              <div className='text-2xl font-medium py-5 px-10'>
                <p className='text-gray-600'>
                  Lorem <span className='text-pink-600'>all of your file</span>
                  management on PicLab ipsum.
                </p>
              </div>

              <div className='text-xl font-normal px-10 text-gray-400 pb-10'>
                <p className='text-gray-400'>
                  <span className='text-gray-600'> No more need to </span> lorem
                  ipsum dolor sit amet,
                </p>
                <p className='whitespace-nowrap'>
                  consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <p className='whitespace-nowrap'>
                  incididunt ut labore et dolore magna.
                </p>
              </div>
              <img
                className='w-screen shadow rounded h-auto align-middle border-none px-0 mt-10 pb-2'
                src='/carousel-image-1.png'
                alt='image'
              />
            </div>

            {/* SLIDE 2 */}
            <div className='bg-white rounded-lg px-2 pt-8 ml-8'>
              <div className='px-10'>
                <p className='text-gray-400 whitespace-nowrap '>Organization</p>
              </div>
              <div className='text-2xl font-medium py-5 px-10'>
                <p className='text-gray-600'>
                  Lorem ipsum
                  <span className='text-pink-600'>organizatioon</span>
                  dor sit epsilon.
                </p>
              </div>

              <div className='text-xl font-normal px-10 text-gray-400 pb-10'>
                <p className='text-gray-400'>
                  <span className='text-gray-600'> Easily organize </span> all
                  of lorem dolor sit amet, consectetur
                </p>
                <p className='whitespace-nowrap'>
                  adipiscing elit, sed do eiusmod tempor incididunt ut
                </p>
                <p className='whitespace-nowrap'>labore et dolore magna. </p>
              </div>
              <img
                className='w-screen shadow rounded h-auto align-middle border-none px-0 mt-20 pb-1'
                src='/carousel-image-2.png'
                alt='image'
              />
            </div>

            {/* SLIDE 3 */}
            <div className='bg-white rounded-lg px-2 pt-8 ml-20 '>
              <div className='px-10'>
                <p className='text-gray-400 whitespace-nowrap '>Lorem</p>
              </div>
              <div className='text-2xl font-medium py-5 px-10'>
                <p className='text-gray-600'>
                  Lorem <span className='text-pink-600'>all of your file</span>
                  management on PicLab ipsum.
                </p>
              </div>

              <div className='text-xl font-normal px-10 text-gray-400 pb-10'>
                <p className='text-gray-400'>
                  <span className='text-gray-600'> No more need to </span> lorem
                  ipsum dolor sit amet,
                </p>
                <p className='whitespace-nowrap'>
                  consectetur adipiscing elit, sed do eiusmod tempor
                </p>
                <p className='whitespace-nowrap'>
                  incididunt ut labore et dolore magna.
                </p>
              </div>
              <img
                className='w-auto shadow rounded h-auto align-middle border-none px-0 mt-20 pb-1.5'
                src='/carousel-image-3.png'
                alt='image'
              />
            </div>
          </Slider>
        </div>

        {/* SECTION FOUR - NEWS */}
        <div className='relative grid grid-cols-2 w-full bg-gradient-to-r from-black to-blue-900 py-36 -mt-32'>
          {/* Background Image. */}
          <Image
            src='/asset3.png'
            alt='Background picture for news section.'
            layout='fill'
            objectFit='cover'
          />
          <div className='ml-10 px-20'>
            <h1 className='my-20 text-3xl'>
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
          <div className='flex ml-72 mt-20'>
            <div className='static right-10  border-8 w-0 h-64  mx-5 mt-20 bg-white-100 z-2 '></div>
            <div className='sticky right-10 z-5 border-8 w-0 h-24 mx-5 mt-20 bg-white-100 z-2 '></div>
            <div className='static right-10 border-8 w-0 h-64 mx-5 -mt-20 bg-white-100'></div>
          </div>
        </div>

        {/* SECTION FIVE - FOOTER */}
        <div className='relative h-96 py-96 '>
          {/* Background Image. */}
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
              <div className='text-black bg-white w-full mt-10 rounded'>
                <form action='#' method='post'>
                  <div className='flex border-2 rounded-lg px-6'>
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
                      |<span className='pl-8'>Request Beta</span>
                    </button>
                  </div>
                </form>
              </div>
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
