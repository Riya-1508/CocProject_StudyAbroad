import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between p-6 bg-gray-400">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center space-x-4">
          {/* Example buttons */}
          <a
            href="#!"
            className="text-gray-600 bg-white px-4 py-2 rounded-full hover:bg-gray-200"
          >
            Facebook
          </a>
          <a
            href="#!"
            className="text-gray-600 bg-white px-4 py-2 rounded-full hover:bg-gray-200"
          >
            Twitter
          </a>
          <a
            href="#!"
            className="text-gray-600 bg-white px-4 py-2 rounded-full hover:bg-gray-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="uppercase font-semibold mb-4">
              Study Abroad
            </h6>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4">
              Useful links
            </h6>
            <ul>
              <li><a href="#!" className="text-gray-600">Google Map</a></li>
              <li><a href="#!" className="text-gray-600">Jobs</a></li>
              <li><a href="#!" className="text-gray-600">Manage Expense</a></li>
              <li><a href="#!" className="text-gray-600">Language</a></li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4">
              Website
            </h6>
            <ul>
              <li><a href="#!" className="text-gray-600">Home</a></li>
              <li><a href="#!" className="text-gray-600">Graduation</a></li>
              <li><a href="#!" className="text-gray-600">Post Graduation</a></li>
              <li><a href="#!" className="text-gray-600">Help</a></li>
            </ul>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor"
                  d="M280.37 148.26L96 400.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V400L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 401l235.22-193.74a12.19 12.19 0 0 1 15.3 0L540.9 401a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                </path>
              </svg>
              Mumbai, 500320, India
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 0 42-18.8 42-42s-18.8-42-42-42-42 18.8-42 42 18.8 42 42 42zm240-80V192c0-61.9-50.1-112-112-112H128C66.1 80 16 130.1 16 192v48c0 17.7 14.3 32 32 32h32v137.4c0 7.1 8.5 10.7 13.5 5.7L256 298.3l102.5 76.8c5 3.8 13.5 1.4 13.5-5.7V272h32c17.7 0 32-14.3 32-32zm0-87.2c-10.9 8.2-23.7 18-46.6 36.6-7.7 6.1-19.2 1.5-19.2-8.8V196l59.2 44.2c4.9 3.6 5 10.7.2 14.6z">
                </path>
              </svg>
              contact@example.com
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M496 64c-27.2 0-52 11.3-70.2 29.4l-50.5 50.6c-12.4-5.1-27.3-8.6-43.2-10V64c0-35.3-28.7-64-64-64S224 28.7 224 64v80.8c-15.9 1.4-30.8 4.9-43.2 10L86.2 93.4C68 75.3 43.2 64 16 64C7.2 64 .3 71.5 0 80.3c-.3 7.9 3.4 15.6 9.7 21.9l50.5 50.6c-17.1 23.4-28.2 51.2-31.3 80.3-4.5 46.7 13.7 93.6 47.3 127.2 33.6 33.6 80.5 51.8 127.2 47.3 29.2-3.1 57-14.2 80.3-31.3l50.6 50.6c6.3 6.3 14 10 21.9 9.7 8.8-.3 16.3-7.2 16.6-16 .5-39.7-3.9-78.9-13.1-116.7-5.1-24.5-11.7-48-19.9-71.1-8.1-23-17.5-45.3-28-66.9-10.3-21.5-21.9-41.8-34.7-60.8-12.8-18.9-26.8-35.7-41.7-50.6C390.6 3.1 374.4-7.8 357.2 1l-50.6 50.5C340.5 59.3 355 64 369.6 64c11.1 0 21.8-2.7 31.5-7.9 9.8-5.3 18.6-12.3 26.3-20 7.8-7.8 14.8-16.5 20-26.3C456.3 21.8 459 11.1 459 0c-.3-8.8-7.8-16-16.6-16z">
                </path>
              </svg>
              +1 (800) 555-1234
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2023 Study Abroad. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
