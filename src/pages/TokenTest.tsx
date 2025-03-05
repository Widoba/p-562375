import React from "react";
import { Link } from "react-router-dom";

const TokenTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8 font-['Open_Sans']">
      <h1 className="text-2xl font-bold mb-8">Design Token Test Page</h1>
      <p className="mb-6">This page contains hardcoded design tokens for testing token transformer scripts.</p>
      
      <div className="mb-8 flex space-x-4">
        <Link to="/" className="text-[#25C9D0] hover:underline">← Back to Design System</Link>
        <Link to="/token-transform-table" className="text-[#25C9D0] hover:underline">View Token Transformation Table →</Link>
      </div>
      
      {/* Colors Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Hardcoded Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Base colors */}
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#FFFFFF] border border-gray-200 mb-2"></div>
            <span className="text-xs">white: #FFFFFF</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#555555] mb-2"></div>
            <span className="text-xs">charcoal: #555555</span>
          </div>
          
          {/* Olivia Blue */}
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#25C9D0] mb-2"></div>
            <span className="text-xs">oliviaBlue: #25C9D0</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#0BB4BA] mb-2"></div>
            <span className="text-xs">oliviaBlueDarker: #0BB4BA</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#BDE6E8] mb-2"></div>
            <span className="text-xs">oliviaBlueT600: #BDE6E8</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#CCF4F3] mb-2"></div>
            <span className="text-xs">oliviaBlueT700: #CCF4F3</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#E5FCFB] mb-2"></div>
            <span className="text-xs">oliviaBlueT900: #E5FCFB</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#F7FFFF] mb-2"></div>
            <span className="text-xs">oliviaBlueT950: #F7FFFF</span>
          </div>
          
          {/* Teal & Grey */}
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#395E66] mb-2"></div>
            <span className="text-xs">midnightTeal: #395E66</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#A9A9A9] mb-2"></div>
            <span className="text-xs">earlGrey: #A9A9A9</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#DADCE0] mb-2"></div>
            <span className="text-xs">steelGrey: #DADCE0</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#EDEDED] mb-2"></div>
            <span className="text-xs">glitterGrey: #EDEDED</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#F2F2F2] mb-2"></div>
            <span className="text-xs">discoGrey: #F2F2F2</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#F8F8F8] mb-2"></div>
            <span className="text-xs">fogGrey: #F8F8F8</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#FCFCFC] mb-2"></div>
            <span className="text-xs">mistGrey: #FCFCFC</span>
          </div>
          
          {/* Alert colors */}
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#E52D2D] mb-2"></div>
            <span className="text-xs">dangerRed: #E52D2D</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#BF1818] mb-2"></div>
            <span className="text-xs">dangerRedDark: #BF1818</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#FAC4C4] mb-2"></div>
            <span className="text-xs">dangerRedT300: #FAC4C4</span>
          </div>
          <div className="flex flex-col">
            <div className="w-20 h-20 bg-[#FDEDED] mb-2"></div>
            <span className="text-xs">dangerRedT900: #FDEDED</span>
          </div>
        </div>
      </section>
      
      {/* Shadows Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Hardcoded Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 bg-white" 
              style={{ boxShadow: "0px 3px 9px 0px rgba(0,0,0,0.50)" }}
            ></div>
            <span className="text-xs mt-2">shadow1: 0px 3px 9px 0px rgba(0,0,0,0.50)</span>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 bg-white" 
              style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.28)" }}
            ></div>
            <span className="text-xs mt-2">shadow2: 0px 4px 16px 0px rgba(0,0,0,0.28)</span>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 bg-white" 
              style={{ boxShadow: "0px 6px 12px 0px rgba(0,0,0,0.18)" }}
            ></div>
            <span className="text-xs mt-2">shadow3: 0px 6px 12px 0px rgba(0,0,0,0.18)</span>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 bg-white" 
              style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.20)" }}
            ></div>
            <span className="text-xs mt-2">shadow4: 0px 2px 8px 0px rgba(0,0,0,0.20)</span>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 bg-white" 
              style={{ boxShadow: "0px 2px 10px 2px rgba(0,0,0,0.10)" }}
            ></div>
            <span className="text-xs mt-2">shadow5: 0px 2px 10px 2px rgba(0,0,0,0.10)</span>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 bg-white" 
              style={{ boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.10)" }}
            ></div>
            <span className="text-xs mt-2">shadow6: 0px 1px 3px 0px rgba(0,0,0,0.10)</span>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-32 h-32 bg-white" 
              style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.20) inset" }}
            ></div>
            <span className="text-xs mt-2">shadow7: 0px 1px 2px 0px rgba(0,0,0,0.20) inset</span>
          </div>
        </div>
      </section>
      
      {/* Border Radius Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Hardcoded Border Radius</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F8F8F8] border border-[#DADCE0] rounded-sm"></div>
            <span className="text-xs mt-2">xs3: rounded-sm (0.125rem)</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F8F8F8] border border-[#DADCE0] rounded"></div>
            <span className="text-xs mt-2">xs2: rounded (0.25rem)</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F8F8F8] border border-[#DADCE0] rounded-lg"></div>
            <span className="text-xs mt-2">xs1: rounded-lg (0.5rem)</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F8F8F8] border border-[#DADCE0] rounded-xl"></div>
            <span className="text-xs mt-2">small: rounded-xl (0.75rem)</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F8F8F8] border border-[#DADCE0] rounded-2xl"></div>
            <span className="text-xs mt-2">medium: rounded-2xl (1rem)</span>
          </div>
        </div>
      </section>
      
      {/* Typography Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Hardcoded Typography</h2>
        <div className="space-y-8">
          <div>
            <div className="text-xl font-semibold leading-7">Big title!</div>
            <span className="text-xs text-gray-500">bigTitle: text-xl font-semibold leading-7</span>
          </div>
          <div>
            <div className="text-base font-semibold leading-[22px]">This is a header!</div>
            <span className="text-xs text-gray-500">header: text-base font-semibold leading-[22px]</span>
          </div>
          <div>
            <div className="text-sm font-semibold leading-5">This is a smaller header!!</div>
            <span className="text-xs text-gray-500">smallHeader: text-sm font-semibold leading-5</span>
          </div>
          <div>
            <div className="text-sm font-normal leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus est pulvinar diam sed tortor amet eget iaculis blandit.
            </div>
            <span className="text-xs text-gray-500">bodyText: text-sm font-normal leading-5</span>
          </div>
          <div>
            <div className="text-sm font-semibold leading-5">Click here</div>
            <span className="text-xs text-gray-500">clickText: text-sm font-semibold leading-5</span>
          </div>
          <div>
            <div className="text-xs font-semibold leading-[17px]">Click here too</div>
            <span className="text-xs text-gray-500">clickTextSmall: text-xs font-semibold leading-[17px]</span>
          </div>
          <div>
            <div className="text-sm font-semibold leading-5 underline">Inline link</div>
            <span className="text-xs text-gray-500">inlineLink: text-sm font-semibold leading-5 underline</span>
          </div>
          <div>
            <div className="text-xs font-semibold leading-[17px] uppercase">Subtitle with uppercase twist.</div>
            <span className="text-xs text-gray-500">uppercaseSubtitle: text-xs font-semibold leading-[17px] uppercase</span>
          </div>
          <div>
            <div className="text-base font-normal leading-[22px]">Add some values</div>
            <span className="text-xs text-gray-500">valueText: text-base font-normal leading-[22px]</span>
          </div>
          <div>
            <div className="text-xs font-semibold leading-[17px]">Hi Cory, Welcome Back!</div>
            <span className="text-xs text-gray-500">welcomeText: text-xs font-semibold leading-[17px]</span>
          </div>
          <div>
            <div className="text-xs font-bold leading-[17px]">Avatar label</div>
            <span className="text-xs text-gray-500">avatarLabel: text-xs font-bold leading-[17px]</span>
          </div>
          <div>
            <div className="text-[10px] font-normal leading-[14px]">Hi Cory, Welcome Back!</div>
            <span className="text-xs text-gray-500">welcomeTextSmall: text-[10px] font-normal leading-[14px]</span>
          </div>
          <div>
            <div className="text-xs font-normal leading-[17px]">Hi Cory, Welcome Back!</div>
            <span className="text-xs text-gray-500">welcomeTextMedium: text-xs font-normal leading-[17px]</span>
          </div>
        </div>
      </section>
      
      <div className="mt-8 flex space-x-4">
        <Link to="/" className="text-[#25C9D0] hover:underline">← Back to Design System</Link>
        <Link to="/token-transform-table" className="text-[#25C9D0] hover:underline">View Token Transformation Table →</Link>
      </div>
    </div>
  );
};

export default TokenTest;
