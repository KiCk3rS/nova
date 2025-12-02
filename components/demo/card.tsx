"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Card({ title, icon, children, className }: CardProps) {
  return (
    <div className={cn(
      "rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm",
      className
    )}>
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
            {icon}
          </div>
        )}
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
          {title}
        </h2>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}




