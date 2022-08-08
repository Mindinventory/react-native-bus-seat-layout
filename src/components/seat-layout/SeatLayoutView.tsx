import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { mainContainerStyle } from '../../styles';
import type { SeatLayout, SeatsLayoutProps } from '../../types';
import { useSeatLayout } from './useSeatLayout';
import SeatContainer from './views/SeatContainer';

const SeatsLayout = (props: SeatsLayoutProps) => {
  const {
    bookingSeat,
    blockedSeatImage,
    driverImage,
    isSleeperLayout,
    maxSeatToSelect,
    numberTextStyle,
    seatImage,
    userSelectedSeats,
    onSeatSelected,
  } = useSeatLayout(props);

  return (
    <SafeAreaView>
      <View style={mainContainerStyle}>
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={[...bookingSeat]}
          renderItem={({ item, index }) => {
            return (
              <SeatContainer
                item={item}
                index={index}
                isSleeperLayout={isSleeperLayout}
                seatImage={seatImage}
                driverImage={driverImage}
                blockedSeatImage={blockedSeatImage}
                numberTextStyle={numberTextStyle}
                disableSeat={userSelectedSeats.length === maxSeatToSelect}
                onSeatSelected={(seat: SeatLayout) => {
                  onSeatSelected(seat);
                }}
              />
            );
          }}
          keyExtractor={() => Math.random().toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SeatsLayout);
