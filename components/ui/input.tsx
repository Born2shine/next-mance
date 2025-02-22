import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  isRequired?: boolean;
  id: string;
  name: string;
  value?: string;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  touched?: boolean;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      labelClass,
      id,
      name,
      isRequired,
      onChange,
      error,
      value,
      touched,
      handleBlur,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={label}
            className={cn(
              "block text-xs text-[#6E7C87] font-normal pb-2",
              labelClass
            )}
          >
            {" "}
            {label}
            {isRequired && (
              <span className="inline-block text-red-400 text-lg pl-1 mt-">
                *
              </span>
            )}{" "}
          </label>
        )}
        <input
          type={type}
          onBlur={handleBlur}
          onChange={onChange}
          id={id}
          name={name}
          value={value}
          className={cn(
            "flex h-9 w-full rounded-sm border border-primary bg-transparent px-3 py-1 text-sm  transition-colors bg-[#F6F8F9] focus-visible:ring-primary placeholder:font-light placeholder:text-sm placeholder:text-#6E7C87 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 border-[#E5E9EB] placeholder:text-#6E7C87",
            className,
            error &&
              touched &&
              "border-red-500 focus-visible:ring-transparent focus-visible:ring-0"
          )}
          ref={ref}
          {...props}
        />
        <span className={cn("text-xs text-red-500 hidden", error && "block")}>
          {error && touched && error}
        </span>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
