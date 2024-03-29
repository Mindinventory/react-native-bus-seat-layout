import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SeatsLayout from '@mindinventory/react-native-bus-seat-layout';
import { SleeperSeatIcon } from '../assets';

export default function App() {
  return (
    <SafeAreaView>
      <SeatsLayout
        row={4}
        layout={{ columnOne: 2, columnTwo: 2 }}
        isSleeperLayout={true}
        seatImage={{ image: SleeperSeatIcon, tintColor: 'gray' }}
        selectedSeats={[
          { seatNumber: 1, seatType: 'booked' },
          { seatNumber: 11, seatType: 'women' },
          { seatNumber: 16, seatType: 'booked' },
          { seatNumber: 17, seatType: 'women' },
        ]}
        numberTextStyle={styles.numberStyle}
        getBookedSeats={(seats) => {
          console.log('getBookedSeats :: ', seats);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  numberStyle: { fontSize: 12 },
});
