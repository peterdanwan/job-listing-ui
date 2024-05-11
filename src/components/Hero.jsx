// We destructure the `props` object's
// elements passed to the Hero component.
//
// Notice how the props are named EXACTLY the same as
// what you pass the component.
//
// We don't need to pass the props in the same order that they are passed in
const Hero = ({
  subtitle = 'Find a React Job',
  title = 'Become a React Dev',
}) => {
  return (
    <section className='bg-indigo-700 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
