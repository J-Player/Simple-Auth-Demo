import { forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '../../utils/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, ...props }: InputProps, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'border p-2 rounded disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}>
        {children}
      </input>
    )
  },
)

export default Input
