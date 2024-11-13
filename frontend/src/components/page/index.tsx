import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import './index.css'

type Props = HTMLAttributes<HTMLDivElement>

const Page = ({ children, ...props }: Props) => {
  return (
    <div
      className={cn(
        'h-full',
        'flex flex-col items-center justify-center bg-green-50',
      )}
      {...props}>
      {children}
    </div>
  )
}

export default Page
