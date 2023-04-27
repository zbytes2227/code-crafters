import React from 'react'

function Dashboardbox(props) {
    return (
        <>
            <a href={props.link} class="p-4 w-full cursor-pointer">
                <div class="flex border-2 hover:bg-gray-100 mx-4 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col">
                    <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{props.title1}</h2>
                        <p class="leading-relaxed text-base">{props.title2}</p>
                        <p class="leading-relaxed text-base">{props.title3}</p>
                        {props.function && <button class={`text-white bg-${props.btnColor}-500 border-0 py-1 px-4 focus:outline-none hover:bg-${props.btnColor}-600 rounded mt-2`} onClick={() => props.function(props._id)}>{props.Loading ? "" : `${props.btnData}`}   <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="ml-2 animate-spin"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                            hidden={props.Loading ? false : true}
                        >
                            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65s.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                        </svg></button>}
                    </div>
                    {props.displayBadges &&

                        <div class="flex flex-wrap items-center gap-4">
                            {
                                props.Status.some(item => item._id === props._id) ? (
                                    <span className="px-3 py-1 text-base rounded-full text-green-600 bg-green-200">
                                        Done
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 text-base rounded-full text-red-600 bg-red-200">
                                        Pending
                                    </span>
                                )
                            }
                        </div>
                    }

                </div>
            </a>

        </>
    )
}

export default Dashboardbox