import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps
} from 'react-native'
import { ThemeColors } from '../../theme/theme'
import { useAppTheme } from '../../hooks/useAppTheme'

interface ActivityIndicatorProps extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors
}

export const ActivityIndicator = ({ color }: ActivityIndicatorProps) => {
  const { colors } = useAppTheme()

  return (
    <RNActivityIndicator color={colors[color]}>

    </RNActivityIndicator>
  )
}