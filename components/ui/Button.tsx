"use client";

import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "filled",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
  className,
}: ButtonProps) {
  const baseClasses =
    "font-bold uppercase h-[44px] transition duration-200 ease-in-out";

  const variantClasses = clsx({
    "bg-primary text-secondary hover:bg-primary-light": variant === "filled",
    "border border-white text-white hover:border-primary hover:text-primary":
      variant === "outlined",
    "opacity-50 cursor-not-allowed": disabled,
  });

  const sizeClasses = clsx({
    "px-3 text-sm": size === "sm",
    "px-4 text-md": size === "md",
    "px-6 text-lg": size === "lg",
  });

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses,
        sizeClasses,
        {
          "w-full": fullWidth,
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
