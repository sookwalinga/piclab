const Cards = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary pt-10 pb-10 '>
      <h1 className='m-auto text-2xl justify-center flex flex-nowrap '>
        Why <span className='font-bold px-2'>PicLab</span> is the perfect
      </h1>
      <h1 className='text-2xl font-Inter justify-center flex flex-nowrap '>
        lorem ipsum for you.
      </h1>
      <div className='m-2 sm:grid sm:grid-cols-2'>
        {/* CARD 1 */}
        <div className='bg-white rounded-lg px-2 pt-8 sm:ml-2 mb-4'>
          <div className='px-10 text-gray-400'>All-in-one</div>
          <div className='text-2xl font-medium py-5 px-10'>
            <p className='text-gray-600'>
              Lorem
              <span className='text-pink-600 pr-1.5'> all of your file</span>
              management on PicLab ipsum.
            </p>
          </div>

          <div className='text-xl font-normal px-10 text-gray-400 pb-10'>
            <span className='text-gray-600'> No more need to </span> lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </div>
          <img
            className='w-screen shadow rounded h-auto align-middle border-none px-0 mt-10 pb-2'
            src='/carousel-image-1.png'
            alt='image'
          />
        </div>

        {/* CARD 2 */}
        <div className='bg-white rounded-lg px-2 pt-8 sm:ml-8'>
          <div className='px-10 text-gray-400'>Organization</div>
          <div className='text-2xl font-medium pt-5 xl:pb-12 pb-5 px-10'>
            <p className='text-gray-600'>
              Lorem ipsum
              <span className='text-pink-600 px-1.5'>organization</span>
              dor sit epsilon.
            </p>
          </div>

          <div className='text-xl font-normal px-10 text-gray-400'>
            <span className='text-gray-600'> Easily organize </span> all of
            lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
          </div>
          <img
            className='w-screen shadow rounded h-auto align-middle border-none px-0 mt-20 pb-2'
            src='/carousel-image-2.png'
            alt='image'
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
