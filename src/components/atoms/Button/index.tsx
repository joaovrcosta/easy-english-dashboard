import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import { ColorThemeType } from '@/core/constants/theme'
import { Spinner } from '../Spinner'
import { AnimatePresence, motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: ColorThemeType
  variant?: S.sizeVariants
  rounding?: S.roundingVariants
  fill?: S.fillVariants
  boxShadow?: boolean
  hug?: boolean
  loading?: boolean
  children: React.ReactNode
  color?: ColorThemeType
}

export function Button({
  backgroundColor = 'white',
  color = 'black',
  variant = 'sm',
  rounding = 'rounded-full',
  fill = 'contained',
  boxShadow = false,
  hug = false,
  loading = false,
  children = 'Button',
  ...props
}: ButtonProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      color={color}
      rounding={rounding}
      fill={fill}
      variant={variant}
      boxShadow={boxShadow}
      hug={hug}
      loading={loading || !!props?.disabled}
      {...props}
    >
      {children}
      <AnimatePresence>
        {loading && (
          <motion.div
            style={{ display: 'flex' }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, x: -20, opacity: 0 }}
          >
            <Spinner variant="secondary" size="sm" baseColor="white" />
          </motion.div>
        )}
      </AnimatePresence>
    </S.Button>
  )
}
