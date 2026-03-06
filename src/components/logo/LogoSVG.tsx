import React from "react";

interface LogoSVGProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const LogoSVG: React.FC<LogoSVGProps> = ({
  size = 32,
  color = "#3B82F6",
  strokeWidth = 6,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Core Seed - The Teacher */}
    <rect
      x="42"
      y="42"
      width="16"
      height="16"
      rx="4"
      transform="rotate(45 50 50)"
      fill={color}
    />

    {/* Inner Growth Layer */}
    <path
      d="M50 22C34.536 22 22 34.536 22 50C22 65.464 34.536 78 50 78"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Outer Expansion Layer */}
    <path
      d="M50 22C65.464 22 78 34.536 78 50C78 65.464 65.464 78 50 78"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      style={{ opacity: 0.35 }}
    />

    {/* The Limitless Boundary (Dotted) */}
    <circle
      cx="50"
      cy="50"
      r="44"
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="4 6"
      style={{ opacity: 0.2 }}
    />
  </svg>
);

export default LogoSVG;
