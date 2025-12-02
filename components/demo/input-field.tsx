"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helpText?: string
  error?: string
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, helpText, error, className, id, disabled, ...props }, ref) => {
    const uniqueId = React.useId()
    const inputId = id || uniqueId
    const helpTextId = `${inputId}-help`
    const errorId = `${inputId}-error`

    return (
      <div className="w-full flex flex-col gap-1.5 items-start group">
        {label && (
          <LabelPrimitive.Root
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              "text-neutral-700 dark:text-neutral-300 cursor-pointer",
              error && "text-red-600 dark:text-red-400"
            )}
          >
            {label}
          </LabelPrimitive.Root>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={cn(
            // Layout & Base
            "flex h-12 w-full rounded-lg border px-[14px] py-[14px] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium",
            
            // Colors (Figma Match)
            "bg-white dark:bg-neutral-900",
            "border-[#d1d5db] dark:border-neutral-700",
            "text-[#6b7280] dark:text-neutral-300",
            "placeholder:text-[#6b7280] dark:placeholder:text-neutral-500",
            
            // Shadow
            "shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]",

            // Focus State
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500",
            
            // Disabled State
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-neutral-50 dark:disabled:bg-neutral-800",
            
            // Error State overrides
            error && "border-red-500 focus-visible:ring-red-500 text-red-900 dark:text-red-100 placeholder:text-red-300",
            
            className
          )}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helpText ? helpTextId : undefined}
          {...props}
        />

        {error ? (
          <p
            id={errorId}
            className="text-[0.8rem] font-medium text-red-600 dark:text-red-400 animate-in slide-in-from-top-1"
          >
            {error}
          </p>
        ) : helpText ? (
          <p
            id={helpTextId}
            className="text-[0.8rem] text-neutral-500 dark:text-neutral-400"
          >
            {helpText}
          </p>
        ) : null}
      </div>
    )
  }
)
InputField.displayName = "InputField"
