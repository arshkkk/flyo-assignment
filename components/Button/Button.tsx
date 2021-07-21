import React from 'react';
import { ActivityIndicator, ButtonProps } from 'react-native';
import { CustomButtonWrapper, CustomButtonText } from './Button.styles';
import { COLORS } from '../../theme/colors';

interface CustomButtonPropType extends ButtonProps {
  isLoading?: boolean;
}

export const Button = ({
  isLoading,
  title,
  onPress,
  ...props
}: CustomButtonPropType) => (
  <CustomButtonWrapper
    onPressIn={onPress}
    {...props}
    disabled={props.disabled || isLoading}
  >
    {isLoading ? (
      <ActivityIndicator size="small" color={COLORS.WHITE} />
    ) : (
      <CustomButtonText>{title}</CustomButtonText>
    )}
  </CustomButtonWrapper>
);
