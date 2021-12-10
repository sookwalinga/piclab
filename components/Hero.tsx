import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 text-white pl-10 md:pt-5 md:pl-0'>
      {/* LEFT  COL */}
      <div className='sm:pl-20 pt-20 md:pl-8'>
        <div className='flex flex-row  sm:w-96 sm:pb-14 pb-10'>
          <Image src='/logo.png' alt='Logo' width={20} height={40} />
          <h1 className='pl-2 pt-2 font-bold'>PICLAB</h1>
        </div>

        <button className='border-2 rounded-lg border-black-500 p-0.5 text-xs font-Idlewild'>
          COMING SUMMER 2021
        </button>
        <p className='pt-4 text-xl'>Powerful image</p>
        <p className='text-xl font-bold'>asset management</p>
        <p className='text-xl'>for everyone.</p>
        <div className='sm:pt-16 pt-8 mr-8 sm:pb-48 pb-36'>
          <div className='border-l-2  border-black-500 text-sm flex'>
            <div className='ml-8'>
              <span className='font-bold mr-1'>
                Organize, transform, & serve
              </span>
              your entire photo library. The perfect image management app for
              freelancers, organizations & web developers.
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
            priority
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
            disabled
            className='border py-0.5 px-2 border-white rounded-full bg-gradient-to-r from-gray-600 to-gray-400 text-xs'
          >
            <span className='pr-1 text-gray-400'>#</span> Person
          </button>
        </span>
        <span className='absolute sm:top-16 sm:right-36 sm:mt-10 right-0 -mt-20'>
          <button
            disabled
            className='border py-0.5 px-3 border-white rounded-full bg-gray-800 text-xs'
          >
            <span className='pr-1 text-gray-400'>#</span> Pencils
          </button>
        </span>
        <span className='absolute sm:top-44 right-0 mt-0'>
          <button
            disabled
            className='border py-0.5 px-2 border-white rounded-full bg-gray-800 text-xs'
          >
            <span className='pr-1 text-gray-400'>#</span> Scenary
          </button>
        </span>

        <span className='absolute sm:top-96 sm:right-48 sm:mt-16 right-16 top-96 mt-60 md:mt-8 md:right-44'>
          <button
            disabled
            className='border py-0.5 px-3 border-white rounded-full bg-gradient-to-r from-blue-800 via-gray-400 to-blue-900 text-xs'
          >
            <span className='pr-1 text-gray-400'>#</span> Water
          </button>
        </span>

        <span className='absolute sm:top-96 sm:mt-5 sm:ml-44 sm:left-96 bottom-0 left-28'>
          <button
            disabled
            className='border py-0.5 px-3 border-white rounded-full bg-gradient-to-r from-white to-gray-600 text-xs'
          >
            <span className='pr-1 text-gray-400'>#</span> Desk
          </button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
