import Head from 'next/head';
import Image from 'next/image';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

// Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Home() {
  var carouselSettings = {
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-primary via-blue-900 to-secondary font-Inter text-white'>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        <script
          type='text/javascript'
          src='https://kit.fontawesome.com/117bcfe378.js'
        ></script>
      </Head>

      {/* HERO SECTION */}
      <main className='flex flex-col  w-full'>
        <div className='flex flex-row  w-full'>
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
                <div className='ml-8'>
                  <span className='font-bold mr-1'>
                    Organize, transform, & serve
                  </span>
                  your entire photo library. The perfect image management app
                  for freelancers, organizations & web developers.
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

          {/* REQUEST BETA FIXED FORM */}
          <div className='fixed bottom-0  mb-2 bg-white rounded-lg justify-evenly flex w-full p-2 z-10'>
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
              {/* <FontAwesomeIcon icon={faSignInAlt} size='lg' /> */}
              <i className='fal fa-sign-in'></i>
              <span className='pl-2'> Sign In</span>
            </button>
          </div>
        </div>

        {/* SECTION TWO */}
        <div className='flex flex-row  w-full bg-gradient-to-r from-black to-blue-900 pt-20'>
          <img
            className='w-screen shadow rounded max-w-20 h-screen align-middle border-none pr-72'
            src='/asset2.png'
            alt='image'
          />
          <div className='sticky bottom-0 right-20 mb-0 bg-white rounded-lg justify-evenly pr-10 pl-10 pt-8'>
            <div>
              <p className='text-gray-400 whitespace-nowrap '>
                Artificial Intelligence
              </p>
            </div>
            <div className='text-4xl font-medium'>
              <p className='text-gray-600 whitespace-nowrap pt-10 '>
                Let <span className='text-pink-600'>A.I.</span> handle lorem
              </p>
              <p className='text-gray-600 whitespace-nowrap'>
                ipsum dolor sit.
              </p>
            </div>
            <img
              className='w-36 shadow rounded h-auto align-middle border-none mx-auto my-20'
              src='/ai.png'
              alt='image'
            />

            <div className='text-2xl font-normal'>
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
          <Slider
            {...carouselSettings}
            className='pt-10 px-10 mx-5 slick-slide'
          >
            <div className='bg-white rounded-lg px-2 pt-8'>
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
            <div className='bg-white rounded-lg px-2 pt-8'>
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
            <div className='bg-white rounded-lg px-2 pt-8'>
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
          </Slider>
        </div>

        {/* SECTION FOUR - NEWS */}

        {/* SECTION FIVE - WITH MODAL */}
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
