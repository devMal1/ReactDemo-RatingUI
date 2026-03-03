import type { ReactNode } from "react"

interface ButtonProps {
  className: string
  disabled: boolean
  handleClick: () => void
  children: ReactNode
}

export const Button = ({
  className,
  disabled,
  handleClick,
  children,
}: ButtonProps) => {
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  )
}
