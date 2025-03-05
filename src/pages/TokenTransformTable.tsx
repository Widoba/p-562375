
import React from "react";
import { Link } from "react-router-dom";

interface TokenMappingProps {
  hardcodedValue: string;
  tokenName: string;
  tokenValue: string;
  category: string;
}

const TokenMapping: React.FC<TokenMappingProps> = ({
  hardcodedValue,
  tokenName,
  tokenValue,
  category,
}) => {
  return (
    <tr className="border-b border-[#EDEDED]">
      <td className="py-2 px-4">{category}</td>
      <td className="py-2 px-4">{hardcodedValue}</td>
      <td className="py-2 px-4">{tokenName}</td>
      <td className="py-2 px-4">{tokenValue}</td>
      <td className="py-2 px-4">
        {category === "Color" && (
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-sm border border-[#DADCE0]"
              style={{ backgroundColor: hardcodedValue }}
            ></div>
            <div
              className="w-6 h-6 rounded-sm border border-[#DADCE0]"
              style={{ backgroundColor: `var(${tokenValue})` }}
            ></div>
          </div>
        )}
      </td>
    </tr>
  );
};

const TokenTransformTable: React.FC = () => {
  // Color mappings
  const colorMappings = [
    {
      hardcodedValue: "#FFFFFF",
      tokenName: "white",
      tokenValue: "--white",
      category: "Color",
    },
    {
      hardcodedValue: "#555555",
      tokenName: "charcoal",
      tokenValue: "--charcoal",
      category: "Color",
    },
    {
      hardcodedValue: "#25C9D0",
      tokenName: "oliviaBlue",
      tokenValue: "--olivia-blue",
      category: "Color",
    },
    {
      hardcodedValue: "#0BB4BA",
      tokenName: "oliviaBlueDarker",
      tokenValue: "--olivia-blue-dark",
      category: "Color",
    },
    {
      hardcodedValue: "#BDE6E8",
      tokenName: "oliviaBlueT600",
      tokenValue: "--olivia-blue-t600",
      category: "Color",
    },
    {
      hardcodedValue: "#CCF4F3",
      tokenName: "oliviaBlueT700",
      tokenValue: "--olivia-blue-t700",
      category: "Color",
    },
    {
      hardcodedValue: "#E5FCFB",
      tokenName: "oliviaBlueT900",
      tokenValue: "--olivia-blue-t900",
      category: "Color",
    },
    {
      hardcodedValue: "#F7FFFF",
      tokenName: "oliviaBlueT950",
      tokenValue: "--olivia-blue-t950",
      category: "Color",
    },
    {
      hardcodedValue: "#395E66",
      tokenName: "midnightTeal",
      tokenValue: "--midnight-teal",
      category: "Color",
    },
    {
      hardcodedValue: "#A9A9A9",
      tokenName: "earlGrey",
      tokenValue: "--earl-grey",
      category: "Color",
    },
    {
      hardcodedValue: "#DADCE0",
      tokenName: "steelGrey",
      tokenValue: "--steel-grey",
      category: "Color",
    },
    {
      hardcodedValue: "#EDEDED",
      tokenName: "glitterGrey",
      tokenValue: "--glitter-grey",
      category: "Color",
    },
    {
      hardcodedValue: "#F2F2F2",
      tokenName: "discoGrey",
      tokenValue: "--disco-grey",
      category: "Color",
    },
    {
      hardcodedValue: "#F8F8F8",
      tokenName: "fogGrey",
      tokenValue: "--fog-grey",
      category: "Color",
    },
    {
      hardcodedValue: "#FCFCFC",
      tokenName: "mistGrey",
      tokenValue: "--mist-grey",
      category: "Color",
    },
    {
      hardcodedValue: "#E52D2D",
      tokenName: "dangerRed",
      tokenValue: "--danger-red",
      category: "Color",
    },
    {
      hardcodedValue: "#BF1818",
      tokenName: "dangerRedDark",
      tokenValue: "--danger-red-dark",
      category: "Color",
    },
    {
      hardcodedValue: "#FAC4C4",
      tokenName: "dangerRedT300",
      tokenValue: "--danger-red-t300",
      category: "Color",
    },
    {
      hardcodedValue: "#FDEDED",
      tokenName: "dangerRedT900",
      tokenValue: "--danger-red-t900",
      category: "Color",
    },
    {
      hardcodedValue: "#F9BC4F",
      tokenName: "cautionYellow",
      tokenValue: "--caution-yellow",
      category: "Color",
    },
    {
      hardcodedValue: "#39D279",
      tokenName: "goGreen",
      tokenValue: "--go-green",
      category: "Color",
    },
  ];

  // Shadow mappings
  const shadowMappings = [
    {
      hardcodedValue: "0px 3px 9px 0px rgba(0,0,0,0.50)",
      tokenName: "shadow1",
      tokenValue: "--shadow-border",
      category: "Shadow",
    },
    {
      hardcodedValue: "0px 4px 16px 0px rgba(0,0,0,0.28)",
      tokenName: "shadow2",
      tokenValue: "N/A",
      category: "Shadow",
    },
    {
      hardcodedValue: "0px 6px 12px 0px rgba(0,0,0,0.18)",
      tokenName: "shadow3",
      tokenValue: "N/A",
      category: "Shadow",
    },
    {
      hardcodedValue: "0px 2px 8px 0px rgba(0,0,0,0.20)",
      tokenName: "shadow4",
      tokenValue: "N/A",
      category: "Shadow",
    },
    {
      hardcodedValue: "0px 2px 10px 2px rgba(0,0,0,0.10)",
      tokenName: "shadow5",
      tokenValue: "N/A",
      category: "Shadow",
    },
    {
      hardcodedValue: "0px 1px 3px 0px rgba(0,0,0,0.10)",
      tokenName: "shadow6",
      tokenValue: "N/A",
      category: "Shadow",
    },
    {
      hardcodedValue: "0px 1px 2px 0px rgba(0,0,0,0.20) inset",
      tokenName: "shadow7",
      tokenValue: "N/A",
      category: "Shadow",
    },
  ];

  // Border radius mappings
  const borderRadiusMappings = [
    {
      hardcodedValue: "rounded-sm (0.125rem)",
      tokenName: "xs3",
      tokenValue: "--border-radius-3xs",
      category: "Border Radius",
    },
    {
      hardcodedValue: "rounded (0.25rem)",
      tokenName: "xs2",
      tokenValue: "--border-radius-2xs",
      category: "Border Radius",
    },
    {
      hardcodedValue: "rounded-lg (0.5rem)",
      tokenName: "xs1",
      tokenValue: "--border-radius-xs",
      category: "Border Radius",
    },
    {
      hardcodedValue: "rounded-xl (0.75rem)",
      tokenName: "small",
      tokenValue: "--border-radius-sm",
      category: "Border Radius",
    },
    {
      hardcodedValue: "rounded-2xl (1rem)",
      tokenName: "medium",
      tokenValue: "--border-radius-md",
      category: "Border Radius",
    },
  ];

  // Typography mappings
  const typographyMappings = [
    {
      hardcodedValue: "text-xl font-semibold leading-7",
      tokenName: "bigTitle",
      tokenValue: "--text-h1",
      category: "Typography",
    },
    {
      hardcodedValue: "text-base font-semibold leading-[22px]",
      tokenName: "header",
      tokenValue: "--text-h2",
      category: "Typography",
    },
    {
      hardcodedValue: "text-sm font-semibold leading-5",
      tokenName: "smallHeader",
      tokenValue: "--text-subtitle",
      category: "Typography",
    },
    {
      hardcodedValue: "text-sm font-normal leading-5",
      tokenName: "bodyText",
      tokenValue: "--text-body",
      category: "Typography",
    },
    {
      hardcodedValue: "text-sm font-semibold leading-5",
      tokenName: "clickText",
      tokenValue: "--text-button",
      category: "Typography",
    },
    {
      hardcodedValue: "text-xs font-semibold leading-[17px]",
      tokenName: "clickTextSmall",
      tokenValue: "--text-button-sm",
      category: "Typography",
    },
    {
      hardcodedValue: "text-sm font-semibold leading-5 underline",
      tokenName: "inlineLink",
      tokenValue: "--text-link",
      category: "Typography",
    },
    {
      hardcodedValue: "text-xs font-semibold leading-[17px] uppercase",
      tokenName: "uppercaseSubtitle",
      tokenValue: "--text-subtitle-mini",
      category: "Typography",
    },
    {
      hardcodedValue: "text-base font-normal leading-[22px]",
      tokenName: "valueText",
      tokenValue: "--text-input-lg",
      category: "Typography",
    },
    {
      hardcodedValue: "text-xs font-semibold leading-[17px]",
      tokenName: "welcomeText",
      tokenValue: "--text-tab-label",
      category: "Typography",
    },
    {
      hardcodedValue: "text-xs font-bold leading-[17px]",
      tokenName: "avatarLabel",
      tokenValue: "--text-avatar",
      category: "Typography",
    },
    {
      hardcodedValue: "text-[10px] font-normal leading-[14px]",
      tokenName: "welcomeTextSmall",
      tokenValue: "--text-avatar-sm",
      category: "Typography",
    },
  ];

  const allMappings = [
    ...colorMappings,
    ...shadowMappings,
    ...borderRadiusMappings,
    ...typographyMappings,
  ];

  return (
    <div className="min-h-screen bg-white p-8 font-['Open_Sans']">
      <h1 className="text-2xl font-bold mb-8">Design Token Transformation Table</h1>
      <p className="mb-6">
        This table maps hardcoded design values to their corresponding CSS
        variables. Use this to verify your token transformer script is working
        correctly.
      </p>

      <div className="mb-8 flex space-x-4">
        <Link
          to="/"
          className="px-4 py-2 bg-[#25C9D0] text-white rounded hover:bg-[#0BB4BA] transition-colors"
        >
          View Design System
        </Link>
        <Link
          to="/token-test"
          className="px-4 py-2 bg-[#F2F2F2] text-[#555] rounded hover:bg-[#EDEDED] transition-colors"
        >
          View Token Test Page
        </Link>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full border border-collapse border-[#DADCE0]">
          <thead className="bg-[#F8F8F8]">
            <tr>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Hardcoded Value</th>
              <th className="py-3 px-4 text-left">Token Name</th>
              <th className="py-3 px-4 text-left">CSS Variable</th>
              <th className="py-3 px-4 text-left">Visual Comparison</th>
            </tr>
          </thead>
          <tbody>
            {allMappings.map((mapping, index) => (
              <TokenMapping key={index} {...mapping} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">How to Use This Table</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Run your token transformer script on the codebase.
          </li>
          <li>
            Compare the transformed styles with the expected token values in this table.
          </li>
          <li>
            For colors, a visual comparison is provided (left: hardcoded color, right: token color).
          </li>
          <li>
            Verify that all mappings are correctly transformed by your script.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TokenTransformTable;
