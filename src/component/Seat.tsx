import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { SeatLayout } from '../types/index';
import {
  layoutImage,
  selectedSeatColor,
  seatheight,
  seatSize,
  disableButton,
  blockedSource,
} from '../styles';
import { Image, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { Text } from 'react-native';

export interface SeatProps {
  seatData: SeatLayout;
  isDisable: boolean;
  isSleeperLayout?: boolean;
  onSeatSelect?: () => void;
}

export const seatHeightConst = 45;
export const seatSleeperHeightConst = 65;
export const seatWidthConst = Dimensions.get('screen').width / 6 - 20;

const Seat: React.FC<SeatProps> = ({
  seatData,
  isDisable,
  isSleeperLayout,
  onSeatSelect,
}) => {
  return (
    <TouchableOpacity
      disabled={disableButton[seatData.type]}
      onPress={() => {
        if (!isDisable) {
          onSeatSelect && onSeatSelect();
        } else if (seatData.isStatusChange) {
          onSeatSelect && onSeatSelect();
        }
      }}
      style={{
        height:
          seatData.type == 'driver'
            ? 35
            : isSleeperLayout
            ? seatheight[seatData.type]
            : seatHeightConst,
        width: seatData.type == 'driver' ? 35 : seatWidthConst,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {seatData.type != 'emptySpace' && (
        <>
          <ImageBackground
            source={layoutImage[seatData.type]}
            style={{
              // height: seatSize[seatData.type],
              // width: seatSize[seatData.type],
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            imageStyle={{
              tintColor: selectedSeatColor[seatData.type],
              alignSelf: 'center',
            }}
            resizeMode="cover"
          >
            {seatData.type != 'driver' && seatData.type == 'booked' && (
              <Text
                style={{
                  marginTop: -5,
                  fontWeight: '500',
                  fontSize: 8,
                }}
              >
                {seatData.seatNo}
              </Text>
            )}
            {seatData.type == 'blocked' && (
              <Image
                source={blockedSource}
                style={{
                  height: '45%',
                  width: '45%',
                }}
              />
            )}
          </ImageBackground>
        </>
      )}
    </TouchableOpacity>
  );
};

const areEqual = (prevProps: SeatProps, nextProps: SeatProps) => {
  const { seatData } = nextProps;
  const { seatData: prevData } = prevProps;
  console.log(' >>>>>', seatData, prevData);
  const isSelectedEqual = seatData === prevData;

  return isSelectedEqual;
};

export default React.memo(Seat, areEqual);
