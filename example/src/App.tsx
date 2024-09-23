import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SeatsLayout from '@mindinventory/react-native-bus-seat-layout';
import { SleeperSeatIcon } from '../assets';

export default function App() {
  return (
    <SafeAreaView>
      <SeatsLayout
        row={10}
        layout={{ columnOne: 2, columnTwo: 2 }}
        isSleeperLayout={true}
        seatImage={{ image: SleeperSeatIcon, tintColor: 'gray' }}
        selectedSeats={[
          { seatNumber: 1, seatType: 'booked' },
          { seatNumber: 2, seatType: 'blocked' },
          { seatNumber: 5, seatType: 'door' },
          { seatNumber: 6, seatType: 'emptySpace' },
          { seatNumber: 11, seatType: 'women' },
          { seatNumber: 12, seatType: 'women' },
          { seatNumber: 16, seatType: 'booked' },
          { seatNumber: 17, seatType: 'door' },
          { seatNumber: 18, seatType: 'emptySpace' },
          { seatNumber: 29, seatType: 'door' },
          { seatNumber: 30, seatType: 'emptySpace' },
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
