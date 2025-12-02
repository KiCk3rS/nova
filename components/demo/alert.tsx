"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, AlertCircle, Info, XCircle } from "lucide-react"

export interface AlertProps {
  variant?: "success" | "error" | "warning" | "info"
  title?: string
  children: React.ReactNode
  className?: string
}

const variantConfig = {
  success: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-800 dark:text-green-200",
    icon: CheckCircle,
    iconColor: "text-green-600 dark:text-green-400"
  },
  error: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-800 dark:text-red-200",
    icon: XCircle,
    iconColor: "text-red-600 dark:text-red-400"
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-200 dark:border-yellow-800",
    text: "text-yellow-800 dark:text-yellow-200",
    icon: AlertCircle,
    iconColor: "text-yellow-600 dark:text-yellow-400"
  },
  info: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-800 dark:text-blue-200",
    icon: Info,
    iconColor: "text-blue-600 dark:text-blue-400"
  }
}

export function Alert({
  variant = "info",
  title,
  children,
  className
}: AlertProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        config.bg,
        config.border,
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn("font-semibold mb-1", config.text)}>
              {title}
            </h4>
          )}
          <p className={cn("text-sm", config.text)}>
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}




