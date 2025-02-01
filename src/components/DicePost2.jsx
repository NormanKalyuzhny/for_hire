import React from "react";

export default function DicePost2() {
  return (
    <div className="dicePost text-shadow flex justify-between rounded-2xl shadow-container bg-container p-[1rem] w-[530px]">
      <div className="overflow-hidden rounded-l-[1rem] min-w-[200px] h-[200px]">
        <img className="full-size object-contain"
          srcSet="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
          alt="dive value image"
        />
      </div>
      <div className="dicePostText flex w-[300px] text-[1.2rem] pl-[1rem] items-center">
        <p>Tested on own Pixel 3A and different emulated devices in Android Studio, tablets included!</p>
      </div>
    </div>
  );
}
