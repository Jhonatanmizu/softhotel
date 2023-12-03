import React from "react";

interface ItemAction {
  onClick: () => void;
}
interface Props {
  currentStep: "first" | "second";
}

const ProgressCircle = ({ currentStep = "first" }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="w-6 h-6 rounded-full bg-success"></div>
      <div
        className={`w-6 h-6 rounded-full bg-success ${
          currentStep === "first" ? "opacity-60" : ""
        }`}
      ></div>
    </div>
  );
};

export default ProgressCircle;
