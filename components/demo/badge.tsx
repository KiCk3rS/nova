"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "info"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export function Badge({
  variant = "default",
  size = "md",
  children,
  className
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full"
  
  const variantStyles = {
    default: "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100",
    success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    warning: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
    error: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
    info: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
  }
  
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
  }

  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}




