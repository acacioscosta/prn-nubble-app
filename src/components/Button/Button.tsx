import { Text } from "../Text/Text"
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box"
import { ButtonPreset, buttonPresets } from "./buttonPresets"
import { ActivityIndicator } from "../ActivityIndicator/ActivityIndicator"

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string
  loading?: boolean
  preset?: ButtonPreset
}

export const Button = ({ title, loading, preset = 'primary', disabled, ...touchableOpacityBoxProps }: ButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default']

  return (
    <TouchableOpacityBox
      paddingHorizontal='s20'
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {loading
        ? <ActivityIndicator color={buttonPreset.content} />
        : <Text 
            preset="paragraphMedium"
            bold
            color={buttonPreset.content}
          >
            {title}
          </Text>}
    </TouchableOpacityBox>
  )
}