import { routes } from '@/shared/sidebarPaths'
import * as S from './styles'
import { SidebarButton } from '../SidebarButton'
import { IoLocationSharp } from 'react-icons/io5'
import { Text } from '../atoms/Text'
import { usePathname } from 'next/navigation'
import { Button } from '../atoms/Button'
import { IoExitOutline } from 'react-icons/io5'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <S.SidebarWrapper>
      <S.SidebarBody>
        <div>
          <S.LogoContainer>
            <h3>
              Easy<span>alvim</span>
            </h3>
          </S.LogoContainer>
          <S.ChooseRestaurant>
            <S.ChooseWrapper>
              <div>
                <Text size="sm">Unidade</Text>
                <IoLocationSharp size={16} color="rgba(236, 31, 38, 1)" />
              </div>
              <select>
                <option value="">Arthur Alvim </option>
              </select>
            </S.ChooseWrapper>
          </S.ChooseRestaurant>
          <S.Buttons>
            {routes.map((btn, i) => {
              return (
                <SidebarButton
                  key={i}
                  title={btn.title}
                  path={btn.path}
                  icon={btn.icon}
                  pathname={pathname} // Passe o pathname atual
                />
              )
            })}
          </S.Buttons>
        </div>
        <S.ProfileLogout>
          <S.MyProfileButton rounding="rounded" color="primary">
            <IoExitOutline size={20} />
            Sair
          </S.MyProfileButton>
        </S.ProfileLogout>
      </S.SidebarBody>
    </S.SidebarWrapper>
  )
}
