import React from "react";
import { shadows } from "@/lib/design-tokens";

interface ShadowBoxProps {
  shadow: string;
  name: string;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({ shadow, name }) => {
  return (
    <div
      className="w-44 h-[136px] bg-white"
      style={{ boxShadow: shadow }}
      title={name}
    />
  );
};

const ShadowExamples: React.FC = () => {
  return (
    <section
      aria-labelledby="shadow-examples-heading"
      className="ml-[109px] max-sm:ml-0"
    >
      <h2 id="shadow-examples-heading" className="text-lg font-semibold mb-4">
        Shadow Examples
      </h2>
      <div className="flex flex-col gap-9 w-44 max-sm:w-full">
        <ShadowBox shadow={shadows.shadow1} name="Shadow 1" />
        <ShadowBox shadow={shadows.shadow2} name="Shadow 2" />
        <ShadowBox shadow={shadows.shadow3} name="Shadow 3" />
        <ShadowBox shadow={shadows.shadow4} name="Shadow 4" />
        <ShadowBox shadow={shadows.shadow5} name="Shadow 5" />
        <ShadowBox shadow={shadows.shadow6} name="Shadow 6" />
        <ShadowBox shadow={shadows.shadow7} name="Shadow 7" />
      </div>
    </section>
  );
};

export default ShadowExamples;
