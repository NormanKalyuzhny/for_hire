import React from "react";

export default function DicePost() {
  return (
    <div className="dicePost flex justify-between rounded-2xl shadow-container bg-container p-[1rem] w-[530px]">
      <div className="overflow-hidden rounded-[1rem] min-w-[200px] h-[200px]">
        <img className="w-full h-full object-cover"
          src="https://t3.ftcdn.net/jpg/00/79/09/92/240_F_79099297_Iskkn2BTJEnwtYIJtePnTXURMYfs3tAC.jpg"
          alt="dive value image"
        />
      </div>
      <div className="dicePostText flex w-[300px] text-[1.2rem] pl-[1rem] items-center">
        <p>One dice maximum number is 6. Two dice is 12. What about 999? With a simple but elegant input, you can set the maximum number up to 999! No need to carry around a dice bag.</p>
      </div>
    </div>
  );
}
