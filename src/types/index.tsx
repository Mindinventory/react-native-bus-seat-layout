import type { ColorValue, TextStyle } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

export type SeatType =
  | 'booked'
  | 'available'
  | 'emptySpace'
  | 'door'
  | 'driver'
  | 'blocked'
  | 'women';

export type SelectedSeatType = 'booked' | 'women' | 'blocked';

export type SeatImageAssetsType =
  | 'available'
  | 'booked'
  | 'women'
  | 'blocked'
  | 'driver';

export interface SeatLayout {
  id: string;
  type: SeatType;
  seatNo?: number;
  isStatusChange?: boolean;
  isSeatSelected?: boolean;
}
export interface Layout {
  columnOne: number;
  columnTwo: number;
}
export interface SelectedSeats {
  seatNumber: number;
  seatType: SelectedSeatType;
}

export type DriverPosition = 'left' | 'right';

export interface AvailableSeat {
  image: string | ImageSourcePropType;
  tintColor: ColorValue | undefined;
}
export interface BlockedSeat {
  image: string | ImageSourcePropType;
  tintColor: ColorValue | undefined;
}
export interface DriverSeat {
  image: string | ImageSourcePropType;
  tintColor: ColorValue | undefined;
}

/*
This are props that require to pass in order to get seat layout
*/
export interface SeatsLayoutProps {
  row: number;
  layout: Layout;
  driverPosition?: DriverPosition;
  isSleeperLayout?: boolean;
  maxSeatToSelect?: number;
  selectedSeats?: Array<SelectedSeats>;
  seatImage?: AvailableSeat;
  blockedSeatImage?: BlockedSeat;
  driverImage?: DriverSeat;
  numberTextStyle?: TextStyle;
  getBookedSeats?: (seats: Array<SeatLayout>) => void;
}

export interface SeatContainerProps {
  item: Array<SeatLayout>;
  index: number;
  disableSeat: boolean;
  isSleeperLayout?: boolean;
  onSeatSelected?: (seat: SeatLayout) => void;
  seatImage?: AvailableSeat;
  driverImage?: DriverSeat;
  blockedSeatImage?: BlockedSeat;
  numberTextStyle?: TextStyle;
}

export interface SeatProps {
  seatData: SeatLayout;
  isDisable: boolean;
  isSleeperLayout?: boolean;
  seatImage?: AvailableSeat;
  driverImage?: DriverSeat;
  blockedSeatImage?: BlockedSeat;
  numberTextStyle?: TextStyle;
  onSeatSelect?: () => void;
}
