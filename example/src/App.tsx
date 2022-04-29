import { DriverIcon, SeatIcon, SleeperSeatIcon } from '../assets';
import * as React from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import SeatsLayout from 'react-native-booking-ticket';

export default function App() {
  return (
    <SafeAreaView>
      <SeatsLayout
        row={16}
        layout={{ columnOne: 2, columnTwo: 2 }}
        driverPosition="right"
        // isSleeperLayout
        selectedSeats={[
          { seatNumber: 17, seatType: 'women' },
          { seatNumber: 11, seatType: 'women' },
          { seatNumber: 1, seatType: 'blocked' },
          { seatNumber: 4, seatType: 'booked' },
          { seatNumber: 43, seatType: 'blocked' },
          { seatNumber: 33, seatType: 'blocked' },
          { seatNumber: 23, seatType: 'blocked' },
          { seatNumber: 11, seatType: 'blocked' },
          { seatNumber: 67, seatType: 'blocked' },
        ]}
        seatImage={{ image: SeatIcon, tintColor: '#B2B2B2' }}
        // driverImage={{ image: DriverIcon, tintColor: 'red' }}
        // blockedSeatImage={{image: DriverIcon, tintColor:'red'}}
        numberTextStyle={{ fontSize: 12 }}
      />
    </SafeAreaView>
  );
}
