import React from "react";

function Alert(props) {
  return (
    <div
      class="bg-green-200 border-green-600 text-green-600 border-l-4 p-4 mb-2"
      role="alert"
    >
      {/* <p class="font-bold">Success</p> */}
      <p>{props.text}</p>
    </div>
  );
}

export default Alert;
