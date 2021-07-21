import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components';
import MapView from 'react-native-maps';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../theme/colors';
import { FONT_FAMILY } from '../../theme/fonts';

export const Heading = styled(Text)`
  font-size: ${hp(2)}px;
  margin: ${hp(1.2)}px 0 ${hp(1)}px;
  color: ${COLORS.BLACK};
  font-family: ${FONT_FAMILY.Poppins.BOLD};
`;

export const TermsAndConditionsText = styled(Text)`
  font-size: ${hp(1.4)}px;
  margin-left: ${wp(1.2)}px;
`;
styled(TermsAndConditionsText)`
  color: ${COLORS.ORANGE};
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: ${COLORS.ORANGE};
`;

export const MessageText = styled(Text)`
  margin-top: ${hp(1.4)}px;
  font-size: ${hp(1.4)}px;
  line-height: ${hp(1.9)}px;
`;

export const HomepageWrapper = styled(SafeAreaView)`
  flex: 1;
  width: ${wp(100)}px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const StyledMapView = styled(MapView)`
  width: ${wp(100)}px;
  height: ${hp(100)}px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BottomDrawer = styled(View)`
  height: ${hp(30)}px;
  width: ${wp(100)}px;
  background: ${COLORS.WHITE};
  position: absolute;
  z-index: 99999;
  left: 0;
  bottom: 0;
  padding: ${hp(5)}px ${wp(5)}px;
`;
