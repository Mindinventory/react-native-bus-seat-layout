import React from 'react';
import { View } from 'react-native';
import type { SeatLayout } from '../types';
import { disableButton, seatContainerStyle } from '../styles';
import Seat from './Seat';

export interface SeatContainerProps {
  item: Array<SeatLayout>;
  index: number;
  disableSeat: boolean;
  isSleeperLayout?: boolean;
  onSeatSelected?: (seat: SeatLayout) => void;
}

const SeatContainer: React.FC<SeatContainerProps> = ({
  item,
  index,
  isSleeperLayout,
  disableSeat,
  onSeatSelected,
}) => {
  return (
    <View
      style={[
        seatContainerStyle,
        index == 0 && { borderColor: 'lightgray', borderBottomWidth: 1 },
      ]}
    >
      {item.map((seat) => {
        return (
          <Seat
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
