import React from "react";

const NameCard = (props) => {
  let winner = "";
  if (props.win) {
    winner = "flex justify-center";
  }
  return (
    <div className={"flex justify-around items-center p-2"}>
      <div
        className={` ${winner} w-10/12 h-10 max-w-lg border-white border rounded-2xl align-middle bg-black items-center`}
      >
        {props.win && (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path
              d="M2 12L0 1L5.5 6L9 0L12.5 6L18 1L16 12H2ZM16 15C16 15.6 15.6 16 15 16H3C2.4 16 2 15.6 2 15V14H16V15Z"
              fill="#E4A951"
            />
          </svg>
        )}

        <div className="text-center text-secondary text-xl font-inter font-normal tracking-normal justify-center">
          {props.name}
        </div>
      </div>
    </div>
  );
};

export default NameCard;
