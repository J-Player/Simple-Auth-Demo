import { LabelHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

import './index.css'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label className={cn(className)} {...props}>
      {children}
    </label>
  )
}

export default Label
