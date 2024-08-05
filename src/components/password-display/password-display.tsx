import React, { useState, useCallback } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface PasswordDisplayProps {
  value: string;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ value }) => {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);

  const emptyPassword = value === "";

  const handleCopy = useCallback(() => {
    if (!emptyPassword) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }, [emptyPassword]);

  return (
    <div className="relative bg-dark-gray h-16 md:h-20 w-[343px] md:w-[540px] md:max-w-[540px] px-4 md:px-8 py-4 md:py-5 flex justify-between items-center">
      <div
        className={`${
          emptyPassword ? "text-almost-white opacity-25" : "text-almost-white"
        } text-2xl font-bold leading-10`}
      >
        {emptyPassword ? "P4$5W0rD!" : value}
      </div>
      <div className="flex justify-center items-center">
        {copied && (
          <div className={`text-neon-green px-2 py-1 animate-fade-in-out`}>
            COPIED
          </div>
        )}
        <CopyToClipboard text={value} onCopy={handleCopy}>
          <button
            className="text-neon-green text-lg font-bold ml-2 relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={hover ? "/assets/copy-hover.svg" : "/assets/copy.svg"}
              alt="copy-icon"
              className={`transition-opacity duration-200`}
            />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default PasswordDisplay;
