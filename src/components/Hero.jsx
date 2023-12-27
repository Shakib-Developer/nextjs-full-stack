const Hero = () => {
  return (
    <section className="relative">
      <div
        className="hidden lg:block absolute inset-0 w-1/2 ml-auto  z-0"
        style={{ zIndex: -1 }}
      />
      <div className="container  mx-auto">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="py-12">
              <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                  <span> The blog </span>
                  <span className="text-red-600"> brown fox</span>
                  <span> jumps lazy magazine.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                  auctor arcu vitae, luctus nisi.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <a
                  className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-600 hover:bg-red-700 rounded"
                  href="#"
                >
                  Check Now
                </a>
                <a
                  className="block sm:inline-block py-4 px-8 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3  mb-12 lg:mb-0">
            <div className="flex items-center justify-center">
              <img
                className="lg:max-w-lg rounded-xl"
                src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=740&t=st=1698749021~exp=1698749621~hmac=a4892c3eb4df0b1ebc08f12b1db1548b5d784706d5e352a594c452323e0417b9"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
