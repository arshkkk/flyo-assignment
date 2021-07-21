import styled, { css } from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../theme/colors';
import { FONT_FAMILY } from '../../theme/fonts';

const StyledCustomButtonDisabled = css`
  opacity: 0.5;
`;

export const CustomButtonWrapper = styled(TouchableOpacity)`
  padding: ${hp(1.9)}px 0;
  margin-top: ${hp(1.2)}px;
  background-color: ${COLORS.ORANGE};
  border-radius: ${hp(1)}px;
  overflow: hidden;
  z-index: 999999999;

  ${({ disabled }: { disabled?: boolean }) =>
    disabled && StyledCustomButtonDisabled};
`;

export const CustomButtonText = styled(Text)`
  color: white;
  font-size: ${hp(1.6)}px;
  text-align: center;
  font-family: ${FONT_FAMILY.Poppins.MEDIUM};
`;
