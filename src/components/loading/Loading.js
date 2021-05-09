import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/book.json";

const Loading = ({ location }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`flex items-center justify-center flex-col `}>
      <Lottie options={defaultOptions} height={300} width={300} />

      <p className="text-4xl animate-pulse font-bold">Loading . . . </p>
    </div>
  );
};

export default Loading;
