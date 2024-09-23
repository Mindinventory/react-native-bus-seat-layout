import React from 'react';
import { View, TextStyle } from 'react-native';
import type {
  AvaiableSeat,
  BlockedSeat,
  DoorSeatImage,
  DriverSeat,
  SeatLayout,
} from '../types';
import { disableButton, seatContainerStyle, viewBorderStyle } from '../styles';
import Seat from './Seat';

export interface SeatContainerProps {
  blockedSeatImage?: BlockedSeat;
  disableSeat: boolean;
  driverImage?: DriverSeat;
  doorSeatImage?: DoorSeatImage;
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
  doorSeatImage = undefined,
  index,
  isSleeperLayout,
  item,
  numberTextStyle,
  onSeatSelected,
  seatImage = undefined,
}: SeatContainerProps) => {
  const renderItem = (seat: SeatLayout, itemIndex: number) => {
    const key = `${seat.id} + ${itemIndex} + ${seat.seatNo} + ${index}`;
    return (
      <Seat
        seatImage={seatImage}
        driverImage={driverImage}
        blockedSeatImage={blockedSeatImage}
        numberTextStyle={numberTextStyle}
        doorSeatImage={doorSeatImage}
        isDisable={
          disableSeat || disableButton[seat.type] || !!seat.isSeatSeleced
        }
        key={key}
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
      key={`horizontal ${index} ${item}`}
      style={[seatContainerStyle, index === 0 && viewBorderStyle]}
    >
      {item.map((seat, mapIndex) => {
        return renderItem(seat, mapIndex);
      })}
    </View>
  );
};

export default React.memo(SeatContainer);
