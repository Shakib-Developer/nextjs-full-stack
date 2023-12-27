import Link from "next/link";

const Footer = () => {
  return (
    <section className="relative border border-red-200">
      <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-gray-50" />
      <div className="container  mx-auto">
        <div className="relative flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
            <div className="mt-12 mb-16 lg:my-24">
              <p className="mb-4 text-lg text-gray-700 text-center lg:text-left">
                Subscribe and stay fully connected with me.
              </p>
              <div className="flex flex-wrap lg:flex-nowrap items-center">
                <div className="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-gray-50 rounded">
                  <svg
                    className="h-6 w-6 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <input
                    className="w-full py-4 pl-3 text-xs text-gray-600 bg-gray-200 outline-none"
                    type="text"
                    placeholder="Enter your E-mail"
                  />
                </div>
                <button
                  className="w-full lg:w-auto py-4 px-8 mx-5 lg:mx-0 lg:ml-6 text-xs text-white font-semibold leading-none bg-red-600 hover:bg-red-700 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="text-xs text-gray-400">
                © 2020. All rights reserved.
              </p>
              <div className="-mx-2 mt-4">
                <a className="inline-block px-2" href="#">
                  <img src="images/facebook-blue.svg" alt="" />
                </a>
                <a className="inline-block px-2" href="#">
                  <img src="images/twitter-blue.svg" alt="" />
                </a>
                <a className="inline-block px-2" href="#">
                  <img src="images/instagram-blue.svg" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 px-4 py-8 lg:py-18 lg:pl-12">
            <div className="flex flex-row flex-wrap justify-around mb-12 ml-10 lg:ml-0">
              <div className="w-1/2 lg:w-auto mb-12">
                <h5 className="mb-6 text-lg font-bold font-heading">
                  Category
                </h5>
                <ul className="space-y-3">
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Men's
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Women's
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Children
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Youngster
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 lg:w-auto mb-12">
                <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                <ul className="space-y-3">
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      World Wise
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Country
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Budget
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-auto mb-4">
                <h5 className="mb-6 text-lg font-bold font-heading">Service</h5>
                <ul className="space-y-3">
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Expert Design
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Fresh Code
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-lg text-gray-400 hover:text-gray-500"
                      href="#"
                    >
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
