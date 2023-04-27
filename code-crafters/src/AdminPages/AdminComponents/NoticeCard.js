import React from "react";

function NoticeCard(props) {
  return (
    <div class="dark:bg-gray-800 m-2 border rounded-md">
      <div class="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center flex-1 w-0">
            <p class="ml-3 font-medium ">{props.notice.title}</p>
          </div>
          {/* <div class="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                <a href="/" class="flex items-center justify-center px-4 py-2 text-sm font-medium text-pink-600 bg-white border border-transparent rounded-md shadow-sm dark:text-gray-800 hover:bg-pink-50">
                    DELETE
                </a>
            </div> */}
          <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={(e) => props.deleteNotice(props.notice._id)}
              class="flex p-2 bg-rose-600 -mr-1 rounded-md hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span class="sr-only">Dismiss</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-6 h-6 text-white"
                viewBox="0 0 1792 1792"
              >
                <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeCard;
