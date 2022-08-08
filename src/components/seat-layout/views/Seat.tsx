import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import type { SeatProps } from '../../../types';
import {
  bookingSeatNumberStyle,
  disableButton,
  imgBackgroundStyle,
  layoutImage,
  seatHeight,
  selectedSeatColor,
} from '../../../styles';

export const seatHeightConst = 45;
export const seatSleeperHeightConst = 85;
export const seatWidthConst = Dimensions.get('screen').width / 6 - 20;

const Seat: React.FC<SeatProps> = ({
  seatData,
  isDisable,
  isSleeperLayout,
  seatImage = undefined,
  driverImage = undefined,
  blockedSeatImage = undefined,
  numberTextStyle,
  onSeatSelect,
}) => {
  const getSourceImage = () => {
    if (seatData.type === 'driver' && driverImage !== undefined) {
      return driverImage.image;
    } else if (
      (seatData.type === 'available' ||
        seatData.type === 'women' ||
        seatData.type === 'booked') &&
      seatImage !== undefined
    ) {
      return seatImage.image;
    } else if (seatData.type === 'blocked' && blockedSeatImage !== undefined) {
      return blockedSeatImage.image;
    } else {
      return layoutImage[seatData.type];
    }
  };

  const getTintColorImage = () => {
    if (seatData.type === 'driver' && driverImage !== undefined) {
      return driverImage.tintColor;
    } else if (seatData.type === 'available' && seatImage !== undefined) {
      return seatImage.tintColor;
    } else if (seatData.type === 'women') {
      return selectedSeatColor[seatData.type];
    } else if (seatData.type === 'booked') {
      return selectedSeatColor[seatData.type];
    } else if (seatData.type === 'blocked' && blockedSeatImage !== undefined) {
      return blockedSeatImage.tintColor;
    } else {
      return selectedSeatColor[seatData.type];
    }
  };

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
      {seatData.type != 'emptySpace' && (
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
            {seatData.type != 'driver' &&
              seatData.type == 'booked' &&
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
