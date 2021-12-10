import Image from 'next/image';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const RequestBeta = () => {
  return (
    <div className='fixed bottom-0 sm:right-12 mb-2 bg-white rounded-lg grid sm:grid-cols-4 sm:w-11/12 w-full  p-2 z-30  text-xs'>
      <div className='text-black col-span-2'>
        <form action='#' method='post'>
          <div className='rounded-lg  justify-between flex flex-nowrap sm:pr-16 sm:pl-4'>
            <FontAwesomeIcon
              icon={faEnvelope}
              size='lg'
              color='#d1d1d1'
              style={{ maxWidth: '2rem' }}
            />
            <input
              type='email'
              name='client-email'
              id='client-email1'
              className='pl-2 text-sm w-11/12 '
              placeholder='Enter email'
            />
            <button
              type='submit'
              className='whitespace-nowrap text-pink-600 text-sm mt-2'
            >
              |<span className='pl-5'>Request Beta</span>
            </button>
          </div>
        </form>
      </div>
      <div className='text-black justify-self-start sm:mt-0 mt-2 flex flex-nowrap'>
        <Image src='/logo-red.png' alt='Logo' width={10} height={20} />
        <h1 className='pl-2 pt-4'>PICLAB</h1>
      </div>
      <div className='pt-2 justify-self-end mr-5 md:pt-0.5 flex flex-nowrap'>
        <button
          type='submit'
          className='text-pink-600 flex flex-nowrap'
          style={{ minWidth: '5rem', maxWidth: '5rem' }}
        >
          <FontAwesomeIcon
            icon={faSignInAlt}
            size='lg'
            className='mt-0.5'
            style={{ maxWidth: '1.5rem' }}
          />
          <span className='mt-1 ml-2 text-sm'>Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default RequestBeta;
