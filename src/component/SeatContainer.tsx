import React from 'react';
import { View, TextStyle } from 'react-native';
import type {
  AvaiableSeat,
  BlockedSeat,
  DriverSeat,
  SeatLayout,
} from '../types';
import { disableButton, seatContainerStyle, viewBorderStyle } from '../styles';
import Seat from './Seat';
import { FlatList } from 'react-native';

export interface SeatContainerProps {
  blockedSeatImage?: BlockedSeat;
  disableSeat: boolean;
  driverImage?: DriverSeat;
  index: number;
  isSleeperLayout?: boolean;
  item: Array<SeatLayout>;
  numberTextStyle?: TextStyle;
  onSeatSelected?: (seat: SeatLayout) => void;
  seatImage?: AvaiableSeat;
}

const SeatContainer = ({
  blockedSeatImage = undefined,
  disableSeat,
  driverImage = undefined,
  index,
  isSleeperLayout,
  item,
  numberTextStyle,
  onSeatSelected,
  seatImage = undefined,
}: SeatContainerProps) => {
  const renderItem = (seat: SeatLayout, index: number) => {
    return (
      <Seat
        seatImage={seatImage}
        driverImage={driverImage}
        blockedSeatImage={blockedSeatImage}
        numberTextStyle={numberTextStyle}
        isDisable={
          disableSeat || disableButton[seat.type] || !!seat.isSeatSeleced
        }
        key={seat.id + index + seat.seatNo}
        seatData={seat}
        isSleeperLayout={isSleeperLayout}
        onSeatSelect={() => {
          onSeatSelected && onSeatSelected(seat);
        }}
      />
    );
  };

  return (
    <View
      key={index}
      style={[seatContainerStyle, index === 0 && viewBorderStyle]}
    >
      {item.map((seat, index) => {
        return renderItem(seat, index);
      })}
    </View>
  );
};

export default React.memo(SeatContainer);
