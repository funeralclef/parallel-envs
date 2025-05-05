import * as React from "react"

// Button component override
export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "secondary" | "ghost" | "destructive"
  }
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
        ${variant === "default" ? "btn-primary" : ""}
        ${variant === "secondary" ? "btn-secondary" : ""}
        ${variant === "ghost" ? "btn-ghost" : ""}
        ${variant === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
        ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

// Card component override
export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`custom-card ${className}`}
      {...props}
    />
  )
})
Card.displayName = "Card"

// Input component override
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={`custom-input ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// Select component override
export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      className={`custom-select ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Select.displayName = "Select" 