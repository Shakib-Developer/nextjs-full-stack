const AboutInfo = () => {
  return (
    <section className="pt-20 pb-20 lg:pb-12 container">
      <div className="grid grid-cols-6 text-center xl:text-center xl:grid-cols-12 gap-[30px]">
        <div className="col-span-6 relative w-full  px-4 ">
          <div>
            <img
              className="h-[500px] w-full"
              src="https://images.pexels.com/photos/6177639/pexels-photo-6177639.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-6 ">
          <div className="  pt-8 lg:pt-0 max-w-2xl lg:max-w-lg text-center mx-5 lg:mx-0 lg:text-left">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
              <span>Make your</span>
              <span className="text-red-600">life easier</span>
              <span>for marketing sales and customer support</span>
            </h2>
            <p className="text-blueGray-400 leading-loose mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
            <a
              className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-red-600 hover:bg-red-700 rounded"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
