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
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

      <main className=' bg-gradient-to-b from-primary via-blue-900 to-secondary'>
        {/* HERO SECTION */}
        <div className='grid grid-cols-1 sm:grid-cols-3 text-white pl-10  md:pl-0'>
          {/* LEFT  COL */}
          <div className='sm:pl-20 pt-20 md:pl-8'>
            <div className='flex flex-row  sm:w-96 sm:pb-24 pb-10'>
              <Image src='/logo.png' alt='Logo' width={20} height={40} />
              <h1 className='pl-2 pt-2 font-bold'>PICLAB</h1>
            </div>

            <button className='border-2 rounded-lg border-black-500 p-0.5 text-xs font-Idlewild'>
              COMING SUMMER 2021
            </button>
            <p className='pt-4 text-xl'>Powerful image</p>
            <p className='text-xl font-bold'>asset management</p>
            <p className='text-xl'>for everyone.</p>
            <div className='sm:pt-16 pt-8 mr-8 pb-36'>
              <div className='border-l-2  border-black-500 text-sm flex'>
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
            <span className='absolute sm:top-28 top-96 sm:right-0  sm:mt-0 mt-20 sm:ml-0 ml-5 md:ml-72 md:top-28'>
              <Image
                src='/footer-bg.png'
                alt='image'
                height={500}
                width={580}
                className='drop-shadow-2xl'
              />
            </span>

            <span className='absolute sm:top-10 top-96 right-0 sm:mt-0 mt-12 md:ml-44 md:top-16'>
              <Image
                src='/apple-mac.png'
                alt='image'
                height={600}
                width={700}
                priority='true'
                className='drop-shadow-2xl'
              />
            </span>

            <span className='absolute sm:top-5 sm:right-72 top-96 mt-12 md:right-64'>
              <Image
                src='/hero1.png'
                alt='image'
                height={220}
                width={260}
                className='drop-shadow-2xl'
              />
            </span>
            <span className='absolute sm:top-40 sm:right-56 sm:mt-0 top-96 right-8 mt-28 '>
              <Image
                src='/hero2.png'
                alt='image'
                height={160}
                width={200}
                className='drop-shadow-2xl'
              />
            </span>
            <span className='absolute sm:top-72 sm:left-96 sm:ml-10 sm:mt-24 top-96 mt-52 left-0 '>
              <Image
                src='/hero3.png'
                alt='image'
                height={160}
                width={200}
                className='drop-shadow-2xl'
              />
            </span>
            <span className='absolute sm:top-20 sm:right-96 mr-20 sm:mt-10 -mt-10'>
              <button
                disabled='disabled'
                className='border py-0.5 px-2 border-white rounded-full bg-gradient-to-r from-gray-600 to-gray-400 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Person
              </button>
            </span>
            <span className='absolute sm:top-16 sm:right-36 sm:mt-10 right-0 -mt-10'>
              <button
                disabled='disabled'
                className='border py-0.5 px-3 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Pencils
              </button>
            </span>
            <span className='absolute sm:top-44 right-0 mt-10'>
              <button
                disabled='disabled'
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Scenary
              </button>
            </span>

            <span className='absolute sm:top-96 sm:right-48 sm:mt-16 right-16 top-96 mt-60 md:mt-8 md:right-44'>
              <button
                disabled='disabled'
                className='border py-0.5 px-3 border-white rounded-full bg-gradient-to-r from-blue-800 via-gray-400 to-blue-900 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Water
              </button>
            </span>

            <span className='absolute sm:top-96 sm:mt-5 sm:ml-44 sm:left-96 bottom-0 left-28'>
              <button
                disabled='disabled'
                className='border py-0.5 px-3 border-white rounded-full bg-gradient-to-r from-white to-gray-600 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Desk
              </button>
            </span>
          </div>
        </div>

        {/* REQUEST BETA FIXED FORM */}
        <div className='fixed bottom-0 sm:right-12 mb-2 bg-white rounded-lg grid sm:grid-cols-4 sm:w-11/12 w-full  p-2 z-30  text-xs'>
          <div className='text-black col-span-2'>
            <form action='#' method='post'>
              <div className='grid grid-cols-2 rounded-lg px-2 py-1 sm:justify-items-start justify-items-end'>
                <div className=' flex flex-nowrap'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size='lg'
                    color='#d1d1d1'
                    className='mt-0.5'
                  />
                  <input
                    type='email'
                    name='client-email'
                    id='client-email1'
                    className='pl-2 text-sm w-full'
                    placeholder='Enter email'
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    className='whitespace-nowrap text-pink-600 text-sm'
                  >
                    |<span className='pl-5'>Request Beta</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='text-black flex flex-row justify-self-start sm:mt-0 mt-2'>
            <Image src='/logo-red.png' alt='Logo' width={10} height={20} />
            <h1 className='pl-2 pt-2'>PICLAB</h1>
          </div>
          <div className='pt-2 justify-self-end mr-5 md:pt-0.5'>
            <button type='submit' className='text-pink-600 whitespace-nowrap'>
              <FontAwesomeIcon icon={faSignInAlt} size='lg' />
              <span className='pl-2 text-sm'> Sign In</span>
            </button>
          </div>
        </div>

        {/* SECTION TWO - A.I.*/}
        <div className='grid sm:grid-cols-3 grid-cols-1 bg-gradient-to-r from-black to-blue-900 pt-20 mb-0 sm:-mt-24 mt-40 md:-mt-32 relative'>
          {/* Background Image. */}
          <div className='col-span-3 -mb-2'>
            <Image src='/asset2.png' alt='A.I image' height={480} width={880} />
            <span className='absolute sm:top-48 mt-10 left-0'>
              <button
                disabled='disabled'
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Pencils
              </button>
            </span>
            <span className='absolute sm:top-44 sm:left-72 left-40'>
              <button
                disabled='disabled'
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Person
              </button>
            </span>
            <span className='absolute sm:top-64 left-20 top-40 sm:ml-28'>
              <button
                disabled='disabled'
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Desk
              </button>
            </span>
            <span className='absolute sm:top-64 sm:left-96 top-40 sm:ml-10 left-52 md:ml-0'>
              <button
                disabled='disabled'
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Pencils
              </button>
            </span>
            <span className='absolute sm:top-64 top-20 left-10 mt-36'>
              <button
                disabled='disabled'
                className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
              >
                <span className='pr-1 text-gray-400'>#</span> Person
              </button>
            </span>
            <span className='absolute sm:top-64 sm:left-96 mt-36 sm:ml-36 top-20 left-56 md:ml-10'>
              <button
                disabled='disabled'
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

        {/* SECTION 3 WITH CAROUSEL*/}
        <div className='bg-gradient-to-r from-primary to-secondary pt-10 pb-10 '>
          <h1 className='m-auto text-2xl justify-center flex flex-nowrap '>
            Why <span className='font-bold px-2'>PicLab</span> is the perfect
          </h1>
          <h1 className='text-2xl font-Inter justify-center flex flex-nowrap '>
            lorem ipsum for you.
          </h1>
          <Slider
            {...carouselSettings}
            className='pt-10 sm:px-4 px-1 z-10 rounded-lg '
          >
            {/* SLIDE 1 */}
            <div className='bg-white rounded-lg px-2 pt-8 sm:ml-2 '>
              <div className='px-10 text-gray-400'>All-in-one</div>
              <div className='text-2xl font-medium py-5 px-10'>
                <p className='text-gray-600'>
                  Lorem
                  <span className='text-pink-600 pr-1.5'>all of your file</span>
                  management on PicLab ipsum.
                </p>
              </div>

              <div className='text-xl font-normal px-10 text-gray-400 pb-10'>
                <span className='text-gray-600'> No more need to </span> lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </div>
              <img
                className='w-screen shadow rounded h-auto align-middle border-none px-0 mt-10 pb-2'
                src='/carousel-image-1.png'
                alt='image'
              />
            </div>

            {/* SLIDE 2 */}
            <div className='bg-white rounded-lg px-2 pt-8 sm:ml-8'>
              <div className='px-10 text-gray-400'>Organization</div>
              <div className='text-2xl font-medium py-5 px-10'>
                <p className='text-gray-600'>
                  Lorem ipsum
                  <span className='text-pink-600 px-1.5'>organization</span>
                  dor sit epsilon.
                </p>
              </div>

              <div className='text-xl font-normal px-10 text-gray-400'>
                <span className='text-gray-600'> Easily organize </span> all of
                lorem dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </div>
              <img
                className='w-screen shadow rounded h-auto align-middle border-none px-0 mt-20 pb-2'
                src='/carousel-image-2.png'
                alt='image'
              />
            </div>

            {/* SLIDE 3 */}
            <div className='bg-white rounded-lg px-2 pt-8 sm:ml-20 '>
              <div className='px-10 text-gray-400'>Lorem</div>
              <div className='text-2xl text-gray-600 font-medium py-5 px-10'>
                Lorem
                <span className='text-pink-600 px-1.5'>all of your file</span>
                management on PicLab ipsum.
              </div>

              <div className='text-xl font-normal px-10 text-gray-400 sm:pb-9'>
                <span className='text-gray-600'> No more need to </span> lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </div>
              <img
                className='w-auto shadow rounded h-auto align-middle border-none px-0 mt-10 pb-2'
                src='/carousel-image-3.png'
                alt='image'
              />
            </div>
          </Slider>
        </div>

        {/* SECTION FOUR - NEWS */}
        <div className='relative grid sm:grid-cols-2 grid-cols-1 w-full bg-gradient-to-r from-black to-blue-900 sm:py-36 sm:-mt-32'>
          {/* Background Image. */}
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

        {/* SECTION FIVE - REQUEST BETA */}
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
              <div className='text-black bg-white w-full mt-10 p-2 rounded mx-auto'>
                <form action='#' method='post'>
                  <div className='grid grid-cols-3 rounded-lg px-2'>
                    <div className='col-span-2 flex flex-nowrap'>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size='lg'
                        color='#d1d1d1'
                        // className='mt-1.5'
                      />
                      <input
                        type='email'
                        name='client-email'
                        id='client-email2'
                        className='pl-2 text-sm w-full'
                        placeholder='Enter email'
                      />
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='whitespace-nowrap text-pink-600 text-sm'
                      >
                        |<span className='pl-5'>Request Beta</span>
                      </button>
                    </div>
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
