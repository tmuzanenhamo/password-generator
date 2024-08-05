import React from "react";

interface SliderProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        id="password-length"
        type="range"
        value={value}
        min="0"
        max="25"
        onChange={onChange}
        className="w-full h-2 bg-very-dark-gray rounded-lg appearance-none cursor-pointer slider-thumb"
        style={
          {
            "--range-progress": `${(value / 25) * 100}%`,
          } as React.CSSProperties
        }
      />
      <style>{`
        .slider-thumb {
          --neon-green: #A4FFAF;
          --thumb-almost-white: #E6E5EA;
          --thumb-hover-bg: black;
          --thumb-hover-border: #A4FFAF;
          --track-height: 5px; 
        }
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background-color: var(--thumb-almost-white);
          border-radius: 50%;
          cursor: pointer;
          margin-top: calc(
            (var(--track-height) - 20px) / 2
          ); 
          border: 2px solid transparent;
        }
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background-color: var(--thumb-almost-white);
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid transparent;
        }
        .slider-thumb:hover::-webkit-slider-thumb {
          background-color: var(--thumb-hover-bg);
          border-color: var(--thumb-hover-border);
        }
        .slider-thumb:hover::-moz-range-thumb {
          background-color: var(--thumb-hover-bg);
          border-color: var(--thumb-hover-border);
        }
        .slider-thumb::-webkit-slider-runnable-track {
          height: var(--track-height);
          background: linear-gradient(
            to right,
            var(--neon-green) var(--range-progress),
            var(--neon-green) var(--range-progress),
            transparent var(--range-progress)
          );
          border-top-right-radius: calc(var(--track-height) / 2);
          border-bottom-right-radius: calc(var(--track-height) / 2);
        }
        .slider-thumb::-moz-range-track {
          height: var(--track-height);
          background: linear-gradient(
            to right,
            var(--neon-green) var(--range-progress),
            var(--neon-green) var(--range-progress),
            transparent var(--range-progress)
          );
          border-top-right-radius: calc(var(--track-height) / 2);
          border-bottom-right-radius: calc(var(--track-height) / 2);
        }
      `}</style>
    </div>
  );
};

export default Slider;
