import Link from 'next/link'
import { Button } from '../atoms/Button'
import { MenuButton, PathLink } from './styles'
import { IoIosArrowForward } from 'react-icons/io'

interface SidebarProps {
  path: string
  title: string
  icon: any
  pathname: string
}

export function SidebarButton({ path, icon, title, pathname }: SidebarProps) {
  const isActive = pathname === path

  return (
    <PathLink href={path}>
      <MenuButton isActive={isActive} rounding="rounded" hug={false}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          {icon}
          {title}
        </div>
        {isActive && <IoIosArrowForward size={24} />}
      </MenuButton>
    </PathLink>
  )
}
