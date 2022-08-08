import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useSeat } from './useSeat';
import {
  bookingSeatNumberStyle,
  disableButton,
  imgBackgroundStyle,
  seatHeight,
} from '../../../styles';
import type { SeatProps } from '../../../types/index';

const Seat = (props: SeatProps) => {
  const {
    isDisable,
    isSleeperLayout,
    numberTextStyle,
    seatData,
    seatHeightConst,
    seatWidthConst,
    onSeatSelect,
    getTintColorImage,
    getSourceImage,
  } = useSeat(props);
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
            ? seatHeight[seatData.type]
            : seatHeightConst,
        width: seatData.type == 'driver' ? 35 : seatWidthConst,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {seatData.type !== 'emptySpace' && (
        <>
          <ImageBackground
            source={getSourceImage()}
            style={imgBackgroundStyle}
            imageStyle={{
              tintColor: getTintColorImage(),
              alignSelf: 'center',
            }}
            resizeMode="cover"
          >
            {seatData.type !== 'driver' &&
              seatData.type === 'booked' &&
              seatData.isStatusChange && (
                <Text style={[bookingSeatNumberStyle, numberTextStyle]}>
                  {seatData.seatNo}
                </Text>
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
  const isSelectedEqual = seatData === prevData;
  return isSelectedEqual;
};

export default React.memo(Seat, areEqual);
