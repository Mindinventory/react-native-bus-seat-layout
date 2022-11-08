import type { ColorValue } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

export type SeatType =
  | 'available'
  | 'blocked'
  | 'booked'
  | 'door'
  | 'driver'
  | 'emptySpace'
  | 'women';

export type SelectedSeatType = 'booked' | 'women' | 'blocked';

export type SeatImageAssetsType =
  | 'available'
  | 'blocked'
  | 'booked'
  | 'driver'
  | 'women';

export interface SeatLayout {
  id: string;
  isSeatSeleced?: boolean;
  isStatusChange?: boolean;
  seatNo?: number;
  type: SeatType;
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

export interface AvaiableSeat {
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
