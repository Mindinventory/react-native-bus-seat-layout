import { DriverIcon, SeatIcon } from '../assets';
import * as React from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import SeatsLayout from 'react-native-booking-ticket';

export default function App() {
  return (
    <SafeAreaView>
      <SeatsLayout
        row={16}
        layout={{ columnOne: 3, columnTwo: 2 }}
        driverPosition="right"
        selectedSeats={[
          { seatNumber: 17, seatType: 'women' },
          { seatNumber: 11, seatType: 'women' },
          { seatNumber: 1, seatType: 'blocked' },
          { seatNumber: 4, seatType: 'blocked' },
        ]}
        seatImage={SeatIcon}
        // driverImage={DriverIcon}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    backgroundColor: 'white',
    // height: '100%',
    // width: '100%',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
