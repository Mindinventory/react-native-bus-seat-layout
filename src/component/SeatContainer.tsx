import React from 'react';
import { View } from 'react-native';
import type { SeatLayout } from '../types';
import { disableButton, seatContainerStyle } from '../styles';
import Seat from './Seat';
import type { ImageSourcePropType } from 'react-native';

export interface SeatContainerProps {
  item: Array<SeatLayout>;
  index: number;
  disableSeat: boolean;
  isSleeperLayout?: boolean;
  onSeatSelected?: (seat: SeatLayout) => void;
  seatImage?: string | ImageSourcePropType;
  driverImage?: string | ImageSourcePropType;
}

const SeatContainer: React.FC<SeatContainerProps> = ({
  item,
  index,
  isSleeperLayout,
  disableSeat,
  seatImage = undefined,
  driverImage = undefined,
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
            seatImage={seatImage}
            driverImage={driverImage}
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
