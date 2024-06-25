import Link from 'next/link'
import { Button } from '../atoms/Button'
import { MenuButton, PathLink } from './styles'

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
        {icon}
        {title}
      </MenuButton>
    </PathLink>
  )
}
