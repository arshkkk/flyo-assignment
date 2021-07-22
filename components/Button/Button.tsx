import React from "react";
import {
  ActivityIndicator,
  ButtonProps,
  TouchableOpacityComponent,
  Text,
} from "react-native";
import { COLORS } from "../../theme/colors";

interface CustomButtonPropType extends ButtonProps {
  isLoading?: boolean;
}

export const Button = ({
  isLoading,
  title,
  onPress,
  ...props
}: CustomButtonPropType) => (
  <TouchableOpacityComponent
    onPressIn={onPress}
    {...props}
    disabled={props.disabled || isLoading}
    style={{ backgroundColor: "green", padding: 100 }}
  >
    {isLoading ? (
      <ActivityIndicator size="small" color={COLORS.WHITE} />
    ) : (
      <Text>{title}</Text>
    )}
  </TouchableOpacityComponent>
);
