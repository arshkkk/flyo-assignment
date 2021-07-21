import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { BackIconWrapper } from './Icon.styles';
import { COLORS } from '../../theme/colors';

interface IconPropType {
  icon: any;
  size?: number;
  color?: string;
  underLayColor?: string;
  onPress: () => void;
}

export const Icon = ({
  icon,
  size = 20,
  color = COLORS.WHITE,
  onPress,
  underLayColor = COLORS.ORANGE_DARK,
}: IconPropType) => (
  <BackIconWrapper onPress={onPress} underlayColor={underLayColor}>
    <MaterialIcons name={icon} size={size} color={color} />
  </BackIconWrapper>
);
