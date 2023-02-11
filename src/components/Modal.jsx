import ScreenshotIcon from "./Icons/ScreenshotIcon";
import Carousel from "./Carousel";

export default function Modal() {
  return (
    <>
      <button type="button" target="_blank" data-modal-target="defaultModal" data-modal-toggle="defaultModal" className={`float-right inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out hover:scale-95 hover:shadow-yellow-200 hover:text-yellow-300 `} rel="noreferrer"><ScreenshotIcon />Screenshots</button>

      <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-3 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full h-modal">
        <div className="relative w-10/12 max-w-7xl">
          <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
            <div className="relative flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">

              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}