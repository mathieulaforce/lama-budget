import React from 'react';

interface InputProps { };

// input {
//   height: 48px;
//   width: 280px;
//   border: 1px solid #c0c0c0;
//   border-radius: 4px;
//   box-sizing: border-box;
//   padding: 16px;
// }

// .label {
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 16px;
//   display: flex;
//   align-items: center;
//   pointer-events: none;
// }

// input, .label .text {
//   font-family: 'Segoe UI';
//   font-size: 16px;
// }

// .label .text {
//   transition: all 0.15s ease-out;
//   color: grey;
// }

// input:focus {
//   outline: none;
//   border: 2px solid blue;
// }

// input:focus + .label .text, :not(input[value=""]) + .label .text {
//   font-size: 12px;
//   transform: translate(0, -150%);
//   background-color: white;
//   padding-left: 4px;
//   padding-right: 4px;
// }

// input:focus + .label .text {
//   color: blue;
// }

// .label .text {
//   transition: all 0.15s ease-out;
//   color: grey;
// }

const TextField: React.FC<InputProps> = (props) => {
  return <div className="relative">
    <input
      type="text"
      id="fname"
      name="fname"
      value=""
      aria-labelledby="label-fname"
    />
    <label className="absolute flex items-center pointer-events-none top-0 bottom-0 left-4" htmlFor="fname" id="label-fname">
      <div className="text transition-all ease-out">First Name</div>
    </label>
  </div>
};

export default TextField;