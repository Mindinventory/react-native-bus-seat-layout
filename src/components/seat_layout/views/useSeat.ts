import { Dimensions } from 'react-native';
import { layoutImage, selectedSeatColor } from '../../../styles';
import type { SeatProps } from '../../../types';

export const useSeat = ({
  seatData,
  isDisable,
  isSleeperLayout,
  numberTextStyle,
  onSeatSelect,
  seatImage = undefined,
  driverImage = undefined,
  blockedSeatImage = undefined,
}: SeatProps) => {
  const seatHeightConst = 45;
  const seatWidthConst = Dimensions.get('screen').width / 6 - 20;

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

  return {
    isDisable,
    isSleeperLayout,
    numberTextStyle,
    seatData,
    seatHeightConst,
    seatWidthConst,
    onSeatSelect,
    getTintColorImage,
    getSourceImage,
  };
};
