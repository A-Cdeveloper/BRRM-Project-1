import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextareaProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
  rows?: number;
};

export const Textarea = ({
  label,
  placeholder,
  required = false,
  className = "",
  error,
  register,
  rows = 4,
}: TextareaProps) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {" "}
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-300">
          {label} {required && <span className="text-accent">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        rows={rows}
        {...register}
        className={`w-full px-1.5 py-1 bg-secondary text-white placeholder-border/70
          focus:outline-none focus:border-border transition resize-none border
          ${
            error ? "border-accent focus:border-accent" : "border-transparent"
          }`}
      />
      {error && <p className="text-accent text-xs mt-[3px]">{error.message}</p>}
    </div>
  );
};

export default Textarea;
