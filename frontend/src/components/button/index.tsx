import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'border rounded p-2 bg-green-500 text-white hover:brightness-110 outline-none focus:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
