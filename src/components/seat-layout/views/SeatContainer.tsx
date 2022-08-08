import React from 'react';
import { View } from 'react-native';
import type { SeatContainerProps } from '../../../types';
import { disableButton, seatContainerStyle } from '../../../styles';
import Seat from './Seat';

const SeatContainer = ({
  item,
  index,
  isSleeperLayout,
  disableSeat,
  seatImage = undefined,
  driverImage = undefined,
  blockedSeatImage = undefined,
  numberTextStyle,
  onSeatSelected,
}: SeatContainerProps) => {
  return (
    <View
      style={[
        seatContainerStyle,
        index === 0 && { borderColor: 'lightgray', borderBottomWidth: 1 },
      ]}
    >
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
              disableSeat || disableButton[seat.type] || !!seat.isSeatSelected
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
