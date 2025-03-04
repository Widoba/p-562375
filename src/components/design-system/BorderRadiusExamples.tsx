import React from "react";
import { borderRadius } from "@/lib/design-tokens";

interface BorderRadiusBoxProps {
  radiusClass: string;
  name: string;
}

const BorderRadiusBox: React.FC<BorderRadiusBoxProps> = ({
  radiusClass,
  name,
}) => {
  return (
    <div
      className={`w-44 h-[136px] border bg-[#F8F8F8] ${radiusClass} border-solid border-[#DADCE0]`}
      title={name}
    />
  );
};

const BorderRadiusExamples: React.FC = () => {
  return (
    <section
      aria-labelledby="border-radius-heading"
      className="ml-[354px] max-sm:ml-0"
    >
      <h2 id="border-radius-heading" className="text-lg font-semibold mb-4">
        Border Radius Examples
      </h2>
      <div className="flex flex-col gap-9 w-44 max-sm:w-full">
        <BorderRadiusBox
          radiusClass={borderRadius.xs3}
          name="3x-Small Radius"
        />
        <BorderRadiusBox
          radiusClass={borderRadius.xs2}
          name="2x-Small Radius"
        />
        <BorderRadiusBox
          radiusClass={borderRadius.xs1}
          name="1x-Small Radius"
        />
        <BorderRadiusBox radiusClass={borderRadius.small} name="Small Radius" />
        <BorderRadiusBox
          radiusClass={borderRadius.medium}
          name="Medium Radius"
        />
      </div>
    </section>
  );
};

export default BorderRadiusExamples;
