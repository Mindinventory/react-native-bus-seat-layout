import * as React from 'react';
import { SeatIcon } from '../assets';

import { SafeAreaView } from 'react-native';
import SeatsLayout from 'src/components/seat-layout/SeatLayoutView';

export default function App() {
  return (
    <SafeAreaView>
      <SeatsLayout
        row={16}
        layout={{ columnOne: 2, columnTwo: 2 }}
        driverPosition="right"
        selectedSeats={[
          { seatNumber: 1, seatType: 'booked' },
          { seatNumber: 4, seatType: 'booked' },
          { seatNumber: 11, seatType: 'women' },
          { seatNumber: 17, seatType: 'women' },
          { seatNumber: 43, seatType: 'blocked' },
        ]}
        numberTextStyle={{ fontSize: 12 }}
        seatImage={{ image: SeatIcon, tintColor: '#B2B2B2' }}
      />
    </SafeAreaView>
  );
}
