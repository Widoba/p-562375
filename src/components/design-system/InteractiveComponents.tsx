import React, { useState } from "react";
import { colors } from "@/lib/design-tokens";

const InteractiveComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <section aria-labelledby="interactive-components-heading" className="mt-16">
      <h2
        id="interactive-components-heading"
        className="text-xl font-semibold mb-6"
      >
        Interactive Components
      </h2>

      <div className="space-y-12">
        {/* Tabs */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-3">Tabs</h3>
          <div className="border-b border-[#DADCE0]">
            <div className="flex">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 font-semibold text-sm focus:outline-none ${
                    activeTab === index
                      ? "text-[#25C9D0] border-b-2 border-[#25C9D0]"
                      : "text-[#555] hover:text-[#0BB4BA]"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 border border-t-0 border-[#DADCE0] rounded-b">
            <p className="text-sm">Content for {tabs[activeTab]}</p>
          </div>
        </div>

        {/* Counter */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-3">Counter</h3>
          <div className="flex items-center space-x-4">
            <button
              className="w-8 h-8 flex items-center justify-center bg-[#F2F2F2] rounded text-[#555] hover:bg-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-[#25C9D0]"
              onClick={() => setCounter((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <span className="text-base font-semibold">{counter}</span>
            <button
              className="w-8 h-8 flex items-center justify-center bg-[#F2F2F2] rounded text-[#555] hover:bg-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-[#25C9D0]"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Modal */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-3">Modal</h3>
          <button
            className="px-4 py-2 bg-[#25C9D0] text-white font-semibold rounded hover:bg-[#0BB4BA] focus:outline-none focus:ring-2 focus:ring-[#0BB4BA] focus:ring-offset-2 transition-colors"
            onClick={() => setIsModalOpen(true)}
          >
            Open Modal
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">Modal Title</h4>
                  <button
                    className="text-[#555] hover:text-black focus:outline-none"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-[#555] mb-4">
                    This is a sample modal dialog. You can include any content
                    here.
                  </p>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    className="px-4 py-2 bg-[#F2F2F2] text-[#555] font-semibold rounded hover:bg-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-[#DADCE0] transition-colors"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-[#25C9D0] text-white font-semibold rounded hover:bg-[#0BB4BA] focus:outline-none focus:ring-2 focus:ring-[#0BB4BA] transition-colors"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tooltip */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-3">Tooltip</h3>
          <div className="relative inline-block">
            <button
              className="px-4 py-2 bg-[#F2F2F2] text-[#555] font-semibold rounded hover:bg-[#EDEDED] focus:outline-none focus:ring-2 focus:ring-[#DADCE0] transition-colors"
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
            >
              Hover me
            </button>
            {tooltipVisible && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-[#555] text-white text-xs rounded whitespace-nowrap">
                This is a tooltip
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#555]"></div>
              </div>
            )}
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-3">Toggle Switch</h3>
          <ToggleSwitch />
        </div>
      </div>
    </section>
  );
};

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <div
        className={`relative w-10 h-6 rounded-full transition-colors ${isOn ? "bg-[#25C9D0]" : "bg-[#DADCE0]"}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${isOn ? "translate-x-5" : "translate-x-1"}`}
        />
      </div>
      <span className="ml-3 text-sm font-medium text-[#555]">
        {isOn ? "On" : "Off"}
      </span>
    </label>
  );
};

export default InteractiveComponents;
