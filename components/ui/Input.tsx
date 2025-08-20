import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label?: string;
  type?: "text" | "email" | "phone" | "password";
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
};

export const Input = ({
  label,
  type = "text",
  placeholder,
  required = false,
  className = "",
  error,
  register,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-300">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full px-1.5 py-1 bg-secondary text-white placeholder-border/70  focus:outline-none
         focus:border-border transition border ${
           error ? "border-accent focus:border-accent" : "border-transparent"
         } ${className}`}
      />

      {error && <p className="text-accent text-xs mt-[3px]">{error.message}</p>}
    </div>
  );
};

export default Input;
