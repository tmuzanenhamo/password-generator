import React, { useState } from "react";
import Slider from "../slider/slider";
import PasswordDisplay from "../password-display/password-display";
import PasswordOption from "../password-option/password-option";
import Button from "../button/button";

interface PasswordOptions {
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

const generatePassword = (length: number, options: PasswordOptions): string => {
  const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } =
    options;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characters = "";
  if (includeUppercase) characters += uppercaseChars;
  if (includeLowercase) characters += lowercaseChars;
  if (includeNumbers) characters += numberChars;
  if (includeSymbols) characters += symbolChars;

  if (characters.length === 0) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
};

const getPasswordStrength = (length: number): string => {
  if (length < 8) return "Too Weak!";
  if (length < 12) return "Weak";
  if (length < 16) return "Medium";
  return "Strong";
};

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState<number>(12);
  const [password, setPassword] = useState<string>(
    generatePassword(12, {
      includeUppercase: true,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: true,
    })
  );
  const [strength, setStrength] = useState<string>(getPasswordStrength(12));
  const [options, setOptions] = useState<PasswordOptions>({
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
  });

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLength = parseInt(e.target.value);
    setLength(newLength);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
    const newPassword = generatePassword(length, {
      ...options,
      [name]: checked,
    });
    setPassword(newPassword);
    setStrength(getPasswordStrength(length));
  };

  const getStrengthBarColor = (strength: string, index: number) => {
    switch (strength) {
      case "Too Weak!":
        return index === 0 ? "bg-red border-red" : "border-almost-white";
      case "Weak":
        return index <= 1 ? "bg-orange border-orange" : "border-almost-white";
      case "Medium":
        return index <= 2 ? "bg-yellow border-yellow" : "border-almost-white";
      case "Strong":
        return "bg-neon-green border-neon-green";
      default:
        return "border-almost-white";
    }
  };

  const getRandomLength = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onGenerate = () => {
    const finalLength = length || getRandomLength(4, 32);
    const finalOptions = Object.values(options).some((opt) => opt)
      ? options
      : {
          includeUppercase: true,
          includeLowercase: true,
          includeNumbers: true,
          includeSymbols: true,
        };

    setOptions(finalOptions);
    setLength(finalLength);

    const newPassword = generatePassword(finalLength, finalOptions);
    setPassword(newPassword);
    setStrength(getPasswordStrength(finalLength));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-base md:text-2xl text-gray font-bold mb-4 md:mb-[30px]">
        Password Generator
      </div>
      <PasswordDisplay value={password} />
      <div className="mt-4 md:mt-6 px-4 md:px-8 py-4 md:py-6 bg-dark-gray w-[343px] md:max-w-[540px] md:w-[540px]">
        <>
          <div className="flex justify-between items-center mb-4 md:mt-4">
            <div className="text-base md:text-lg font-bold text-almost-white leading-6">
              Character Length
            </div>
            <div className="text-neon-green text-2xl md:text-3xl font-bold">
              {length}
            </div>
          </div>
          <div className="mb-4 md:mt-4">
            <Slider value={length} onChange={handleSliderChange} />
          </div>

          <PasswordOption
            label="Include Uppercase"
            name="includeUppercase"
            checked={options.includeUppercase}
            onChange={handleOptionChange}
          />

          <PasswordOption
            label="Include Lowercase"
            name="includeLowercase"
            checked={options.includeLowercase}
            onChange={handleOptionChange}
          />
          <PasswordOption
            label="Include Numbers"
            name="includeNumbers"
            checked={options.includeNumbers}
            onChange={handleOptionChange}
          />
          <PasswordOption
            label="Include Symbols"
            name="includeSymbols"
            checked={options.includeSymbols}
            onChange={handleOptionChange}
          />

          <div className="mt-4 md:mt-7 bg-black w-full h-14 md:h-[72px] flex items-center justify-between px-4 md:px-8 py-[14px] md:py-5">
            <div className="text-gray text-base md:text-lg font-bold">
              STRENGTH
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-almost-white text-lg md:text-2xl mr-3">
                {strength}
              </p>
              <div className="flex gap-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-7 border-2 ${getStrengthBarColor(
                      strength,
                      index
                    )}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-7 w-full">
            <Button onClick={onGenerate} />
          </div>
        </>
      </div>
    </div>
  );
};

export default PasswordGenerator;
