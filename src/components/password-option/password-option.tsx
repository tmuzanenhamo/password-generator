import React from "react";

interface PasswordOptionProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordOption: React.FC<PasswordOptionProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center mb-2 text-base md:text-lg font-medium text-almost-white cursor-pointer">
      <div className="relative mr-2">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className="w-5 h-5 border-2 rounded-sm bg-black border-almost-white check-bg"></div>
        <div className="absolute inset-0 flex items-center justify-center check-mark">
          <svg
            className="w-3 h-3 text-[#18171F] pointer-events-none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            />
          </svg>
        </div>
      </div>
      {label}
      <style>{`
        .check-bg {
          transition: all 0.2s ease-in-out;
        }
        input:checked ~ .check-bg {
          background-color: #A4FFAF;
          border-color: #A4FFAF;
        }
        .check-mark {
          opacity: 0;
          transform: scale(0);
          transition: all 0.2s ease-in-out;
        }
        input:checked ~ .check-mark {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </label>
  );
};

export default PasswordOption;
