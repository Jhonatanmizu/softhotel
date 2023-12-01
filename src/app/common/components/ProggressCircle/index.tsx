import React from "react";

const ProgressCircle = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-6 h-6 rounded-full bg-success"></div>
      <div className="w-6 h-6 rounded-full bg-success opacity-60"></div>
    </div>
  );
};

export default ProgressCircle;
