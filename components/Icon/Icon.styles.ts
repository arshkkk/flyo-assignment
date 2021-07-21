import styled from 'styled-components';
import { TouchableHighlight } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../theme/colors';

export const BackIconWrapper = styled(TouchableHighlight)`
  background-color: ${COLORS.ORANGE};
  border-radius: ${hp(0.5)}px;
  width: ${hp(3)}px;
  height: ${hp(3)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
