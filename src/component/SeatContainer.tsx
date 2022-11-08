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

const SeatContainer: React.FC<SeatContainerProps> = ({
  blockedSeatImage = undefined,
  disableSeat,
  driverImage = undefined,
  index,
  isSleeperLayout,
  item,
  numberTextStyle,
  onSeatSelected,
  seatImage = undefined,
}) => {
  return (
    <View style={[seatContainerStyle, index === 0 && viewBorderStyle]}>
      {item.map((seat) => {
        return (
          <Seat
            seatImage={seatImage}
            driverImage={driverImage}
            blockedSeatImage={blockedSeatImage}
            numberTextStyle={numberTextStyle}
            key={
              seat.id +
              Math.floor(Math.random() * 1000 + 1) +
              seat.type.toString()
            }
            isDisable={
              disableSeat || disableButton[seat.type] || !!seat.isSeatSeleced
            }
            seatData={seat}
            isSleeperLayout={isSleeperLayout}
            onSeatSelect={() => {
              onSeatSelected && onSeatSelected(seat);
            }}
          />
        );
      })}
    </View>
  );
};

export default React.memo(SeatContainer);
