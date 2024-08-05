import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="w-full bg-neon-green text-black font-bold py-2 px-4 flex items-center justify-center transition-all duration-300 hover:bg-transparent hover:border hover:border-neon-green hover:text-neon-green"
      onClick={onClick}
    >
      GENERATE
      <span className="ml-2">→</span>
    </button>
  );
};

export default Button;
