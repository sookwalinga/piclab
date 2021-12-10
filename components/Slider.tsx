// Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
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
            lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna.
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
            <span className='text-gray-600'> No more need to </span> lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna.
          </div>
          <img
            className='w-auto shadow rounded h-auto align-middle border-none px-0 mt-10 pb-2'
            src='/carousel-image-3.png'
            alt='image'
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
